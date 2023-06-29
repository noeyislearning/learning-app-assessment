const MongoBackend = require("./services/backend/MongoBackend");
const RedisBackend = require("./services/backend/RedisBackend");

async function runMongo() {
  const mongoBackend = new MongoBackend();
  return mongoBackend.max();
}

async function runRedis() {
  const redisBackend = new RedisBackend();
  return redisBackend.max();
}

// runMongo()
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => console.error(err));

runRedis()
  .then((result) => {
    console.log(result);
  })
  .catch((err) => console.error(err));
