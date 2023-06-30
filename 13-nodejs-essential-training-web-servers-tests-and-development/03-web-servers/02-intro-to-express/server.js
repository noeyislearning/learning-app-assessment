const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");

const app = express();
const PORT = 3000;

let skiTerms = require("./skiTerms.json");

app.use(bodyParser.json());

const save = () => {
  fs.writeFile("./skiTerms.json", JSON.stringify(skiTerms, null, 2), err => {
    if (err) {
      console.error(err);
    } else {
      console.log("The file has been saved!");
    }
  });
};

const remove = () => {
  fs.writeFile("./skiTerms.json", JSON.stringify(skiTerms, null, 2), err => {
    if (err) {
      console.error(err);
    } else {
      console.log("The file has been deleted!");
    }
  });
};

app.use((req, res, next) => {
  console.log(`${req.method} request for ${req.url}`);
  if (Object.keys(req.body).length) {
    console.log(req.body);
  }
  next();
})

app.use(
  express.static("./client")
);



app.get("/dictionary", (req, res) => {
  res.json(skiTerms);
});

app.post("/dictionary", bodyParser.json(), (req, res) => {
  skiTerms.push(req.body);
  save();
  res.json(skiTerms);
});

app.delete("/dictionary/:term", (req, res) => {
  skiTerms = skiTerms.filter(def => {
    def.term !== req.params.term;
  });
  remove();
  res.json({
    status: "Successfully deleted.",
    removed: req.params.term,
    newLength: skiTerms.length
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});