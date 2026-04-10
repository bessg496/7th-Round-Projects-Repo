const express = require("express");
const app = express();

//Middleware that prints a message for every request
app.use((req, res, next) => {
  console.log("Middleware is working");
  next();
});

// Root routenpm
app.get("/", (req, res) => {
  res.send("My First Express Server");
});

// Contact route
app.get("/contact", (req, res) => {
  res.send("Contact us at info@email.com");
});

//User route returning JSON
app.get("/user", (req, res) => {
  res.json({ name: "John", role: "Student" });
});

//Challenge middleware: check for ?admin=true
app.use((req, res, next) => {
  if (req.query.admin === "true") {
    res.send("Welcome Admin");
  } else {
    res.send("Access Denied");
  }
});

//Start server
app.listen(4000, () => {
  console.log("Server running on port 4000");
});