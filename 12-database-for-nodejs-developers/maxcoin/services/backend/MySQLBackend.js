/* eslint-disable no-useless-constructor */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-empty-function */
const mysql = require("mysql2/promise");
const CoinAPI = require("../CoinAPI");

class MySQLBackend {
  constructor() {
    this.coinAPI = new CoinAPI();
    this.connection = null;
  }

  async connect() {
    this.connection = await mysql.createConnection({
      host: "localhost",
      port: 3406,
      user: "root",
      password: "mypassword",
      database: "maxcoin",
    });
    return this.connection;
  }

  async disconnect() {
    return this.connection.end();
  }

  async insert() {
    const data = await this.coinAPI.fetch();
    const sql = "INSERT INTO coinvalues (valuedate, coinvalue) VALUES ?";
    const values = [];
    Object.entries(data.bpi).forEach((entry) => {
      values.push([entry[0], entry[1]]);
    });
    return this.connection.query(sql, [values]);
  }

  async getMax() {
    return this.connection.query(
      "SELECT * FROM coinvalues ORDER by coinvalue DESC LIMIT 0,1"
    );
  }

  async max() {
    console.log("*************************")
    console.info("Connecting to MySQL Database.");
    console.time("MySQL Connection");
    const connection = this.connect();
    if (connection) {
      console.info("Successfully connected to MySQL.");
    } else {
      throw new Error("Failed to connect to MySQL.");
    }
    console.timeEnd("MySQL Connection");
    console.log("*************************\n")

    console.log("*************************")
    console.info("Inserting documents into MySQL.");
    console.time("MySQL Data Insertion.");
    const insertResult = await this.insert();
    console.timeEnd("MySQL Data Insertion.");
    console.info(
      `Inserted ${insertResult[0].affectedRows} documents into MySQL`
    );
    console.log("*************************\n")

    console.log("*************************")
    console.info("Querying data from MySQL.");
    console.time("MySQL Data Query.");
    const result = await this.getMax();
    console.timeEnd("MySQL Data Query.");
    console.log("*************************\n")

    console.log("*************************")
    console.info("Disconnecting from MySQL.");
    console.time("MySQL Disconnection");
    await this.disconnect();
    console.timeEnd("MySQL Disconnection");
    console.log("*************************\n")
    
    return result[0];
  }
}

module.exports = MySQLBackend;