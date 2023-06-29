/* eslint-disable no-useless-constructor */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-empty-function */
const Redis = require('ioredis');
const dotenv = require('dotenv');
dotenv.config();
const CoinAPI = require('../CoinAPI');

class RedisBackend {

  constructor() {
    this.coinAPI = new CoinAPI();
    this.client = null;
  }

  async connect() {
    this.client = new Redis(
      process.env.REDIS_URL, 
    )
    return this.cient;
  }

  async disconnect() {
    return this.client.disconnect();
  }

  async insert() {
    const data = await this.coinAPI.fetch();
    const values = [];
    Object.entries(data.bpi).forEach((entries) => {
      values.push(entries[1]);
      values.push(entries[0]);
    });
    return this.client.zadd('maxcoin:values', values);
  }

  async getMax() {
    return this.client.zrange('maxcoin:values', -1, -1, 'WITHSCORES');
  }

  async max() {
    console.log("*************************")
    console.info("Connecting to Redis.");
    console.time("Redis Connection");
    const client = this.connect();
    if (client) {
      console.info("Successfully connected to Redis.");
    } else {
      throw new Error("Failed to connect to Redis.");
    }
    console.timeEnd("Redis Connection");
    console.log("*************************\n")

    console.log("*************************")
    console.info("Inserting data into Redis.");
    console.time("Redis Data Insertion");
    const insertResult = await this.insert();
    console.timeEnd("Redis Data Insertion");
    console.info(`Inserted ${insertResult} documents into Redis.`);
    console.log("*************************\n")

    console.log("*************************")
    console.info("Querying data from Redis.");
    console.time("Redis Data Query");
    const result = await this.getMax();
    console.timeEnd("Redis Data Query");
    console.log("*************************\n")

    console.log("*************************")
    console.info("Disconnecting from Redis.");
    console.time("Redis Disconnection");
    await this.disconnect();
    console.timeEnd("Redis Disconnection");
    console.log("*************************\n")

    return result;
  }
}

module.exports = RedisBackend;