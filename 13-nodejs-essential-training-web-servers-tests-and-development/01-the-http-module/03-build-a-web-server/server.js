const http = require("http");

const PORT = 3000;

http.createServer((req, res) => {

  res.writeHead(200, {"Content-Type": "text/html"});
  res.end(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>HTML Response</title>
      </head>
      <body>
        <h1>Serving HTML Text</h1>
        <p>${req.url}</p>
        <p>${req.method}</p>
      </body>
    </html>
  `);

}).listen(PORT);

console.log(`Server listening on port ${PORT}`);