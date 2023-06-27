const express = require("express");
const path = require("path");
const session = require("express-session");
const createError = require("http-errors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
dotenv.config();

// Directory for static files
const { dirPath } = require("./src/utils/constants.js");

// Initialze express & PORT
const app = express();
const PORT = process.env.PORT;

// Routes
const routes = require(`./src/routes/routes.js`);

// Services
const FeedbackService = require(`./src/assets/services/FeedbackService.js`);
const SpeakerService = require(`./src/assets/services/SpeakerService.js`);

// Data
const feedbackService = new FeedbackService("./src/assets/data/feedback.json");
const speakersService = new SpeakerService("./src/assets/data/speakers.json");

// Trust proxy
app.set("trust proxy", 1);

// Middleware
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {
    secure: false, // change this to true in production if you are using https
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
  },
}));

// Body Parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, `../${dirPath}/src/views`));

// Serve static files
app.use(express.static(path.join(__dirname, `../${dirPath}/src/assets`)));

// Global Variable
app.locals.siteName = "ROUX Meetups";
app.use(async (req, res, next) => {
  try {
    const names = await speakersService.getNames();
    res.locals.speakerNames = names;
    return next();
  } catch(err) {
    return next(err);
  }
});

// Routes
app.use("/", routes(
  feedbackService,
  speakersService
));

// Error Handling
app.use((err, req, res, next) => {
  return next(createError(404, "File not found."));
});
app.use((err, req, res, next) => {
  res.locals.message = err.message;
  const status = err.status || 500;
  res.locals.status = status;
  res.status(status);
  return res.render("error");
});

// Server listening
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
}); 