# 7th Round Students Projects Repository

7TH ROUND STUDENT
name BESELAM GIZAW 
Node.js & Express.js Practice Questions 
A simple Node.js project that serves an `index.html` file using the built‑in `http` and `fs` modules.
##Project Structure
.
├── code.js        # Node.js server script
├── index.html     # HTML file served to clients

Code
http://localhost:3000/

code.js
javascript
const http = require('http');
const fs = require('fs');
const port = 3000;

const server = http.createServer((req, res) => {
  fs.readFile('index.html', (err, data) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Error reading index.html');
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    }
  });
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
//index.html
html
   //index.html<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My First Webpage</title>
</head>
<body>
  <h1>Welcome to Node JS</h1>
</body>
</html>
</html>