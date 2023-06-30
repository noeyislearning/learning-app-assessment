const { createServer } = require("http");
const { createReadStream } = require("fs");

const PORT = 3000;

const sendFile = (res, status, type, filePath) => {
  res.writeHead(status, { "Content-Type": type });
  createReadStream(filePath).pipe(res);
}

createServer((req, res) => {
  switch (req.url) {
    case "/": 
      return sendFile(res, 200, "text/html", "./index.html");
    case "/img/alex-banks.jpeg": 
      return sendFile(res, 200, "image/jpeg", "./alex-banks.jpeg");
    case "/style.css": 
      return sendFile(res, 200, "text/css", "./styles.css");
    default: 
      return sendFile(res, 404, "text/html", "./404.html");
  }
}).listen(PORT, () => {});

console.log(`Server listening on port ${PORT}`);