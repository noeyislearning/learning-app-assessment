const { createServer } = require("http");
const { createReadStream } = require("fs");
const { decode } = require("querystring");

const PORT = 3000;

const sendFile = (res, status, type, filePath) => {
  res.writeHead(status, { "Content-Type": type });
  createReadStream(filePath).pipe(res);
}

createServer((req, res) => {

  if (req.method === "POST") {
    let body = "";
    req.on("data", data => {
      body += data;
    })
    req.on("end", () => {
      const { name, email, message } = decode(body);
      console.log(`Name: ${name}`);
      console.log(`Email: ${email}`);
      console.log(`Message: ${message}`);
    })
  }

  switch (req.url) {
    case "/": 
      return sendFile(res, 200, "text/html", "./index.html");
    case "/contact":
      return sendFile(res, 200, "text/html", "./contact.html");
    case "/img/alex-banks.jpeg": 
      return sendFile(res, 200, "image/jpeg", "./alex-banks.jpeg");
    case "/style.css": 
      return sendFile(res, 200, "text/css", "./styles.css");
    default: 
      return sendFile(res, 404, "text/html", "./404.html");
  }
}).listen(PORT, () => {});

console.log(`Server listening on port ${PORT}`);