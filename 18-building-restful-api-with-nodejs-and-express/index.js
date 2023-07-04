import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
dotenv.config();

// Importing Routes
import routes from "./src/routes/crmRoutes.js";

const app = express();
const PORT = 4000;
const MONGODB_URL = process.env.MONGODB_URL;

// Mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect(MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Mongodb connection
const db = mongoose.connection;
db.on("connected", () => {
  console.log("Connected to MongoDB.");
});
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// Bodyparser setup
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json());

// Using Routes
routes(app);

app.get("/", (req, res, next) => 
  res.send(`Node and Express is running on ${PORT}.`)
)

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}.`)
})