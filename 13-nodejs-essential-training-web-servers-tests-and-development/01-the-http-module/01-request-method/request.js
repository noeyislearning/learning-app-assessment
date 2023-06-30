const http = require("https");
const fs = require("fs");

const options = {
  hostname: "en.wikipedia.org",
  port: 443,
  path: "/wiki/George_Washington",
}

const request = http.request(options, (res) => {

  let responseBody = "";
  res.setEncoding("UTF-8");

  res.on("data", data => {
    console.log("chunk received: " + data.length);
    responseBody += data;
  })
 
  res.on("end", () => {
    fs.writeFile("./downloads/george-washington.html", responseBody, err => {
      if (err) {
        throw err;
      }
      console.log("file downloaded");
    });
  })
});

request.end();