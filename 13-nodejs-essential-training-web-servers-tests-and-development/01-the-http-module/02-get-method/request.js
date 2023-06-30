const https = require("https");
const fs = require("fs");


const request = https.get("https://en.wikipedia.org/wiki/Philippines", (res) => {

  let download = fs.createWriteStream("./downloads/Philippines.html");
  res.pipe(download);

  res.on("end", () => {
    console.log("Response finished: ", res.complete);
  });
});

request.end();