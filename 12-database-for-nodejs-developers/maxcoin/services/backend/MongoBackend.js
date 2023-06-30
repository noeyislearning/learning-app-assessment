/* eslint-disable no-useless-constructor */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-empty-function */
const { MongoClient } = require("mongodb");

const CoinAPI = require("../CoinAPI");

class MongoBackend {

  constructor() {
    this.coinAPI = new CoinAPI();
    this.mongoDBURL = "mongodb://localhost:37017/maxcoin";
    this.client = null;
    this.collection = null;
  }

  async connect() {
    const mongoClient = new MongoClient(this.mongoDBURL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });

    this.client = await mongoClient.connect();
    this.collection = this.client.db("maxcoin").collection("values");
    return this.client;
  }

  async disconnect() {
    if(this.client) {
      await this.client.close();
    }
    return false;
  }

  async insert() {
    const data = await this.coinAPI.fetch();
    const docuemnts = [];
    Object.entries(data.bpi).forEach((entry) => {
      docuemnts.push({
        date: entry[0],
        value: entry[1],
      });
    });

    return this.collection.insertMany(docuemnts);
  }

  async getMax() {
    return this.collection.findOne({}, {
      sort: {
        value: 1
      }
    })
  }

  async max() {
    console.log("*************************")
    console.info(`Conneting to MongoDB: ${this.mongoDBURL}`);
    console.time("MongoDB Connection");
    const isConnected = await this.connect();
    if (isConnected) {
      console.info("Successfully connected to MongoDB.");
    } else {
      throw new Error("Failed to connect to MongoDB.");
    }
    console.timeEnd("MongoDB Connection");
    console.log("*************************\n")

    console.log("*************************")
    console.info("Inserting data into MongoDB.");
    console.time("MongoDB Data Insertion");
    const insertResult = await this.insert();
    console.timeEnd("MongoDB Data Insertion");
    console.info(`Inserted ${insertResult.insertedCount} documents into MongoDB.`);
    console.log("*************************\n")

    console.log("*************************")
    console.info("Querying data from MongoDB.");
    console.time("MongoDB Data Query");
    const doc = await this.getMax();
    console.timeEnd("MongoDB Data Query");
    console.log("*************************\n")

    console.log("*************************")
    console.info("Disconnecting from MongoDB.");
    console.time("MongoDB Disconnection");
    await this.disconnect();
    console.timeEnd("MongoDB Disconnection");
    console.log("*************************\n")

    return {
      date: doc.date,
      value: doc.value,
    }
  }
}

module.exports = MongoBackend;