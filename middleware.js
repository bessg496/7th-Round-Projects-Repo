app.use((req, res, next) => {
  console.log("Middleware is working");
  next(); 
});