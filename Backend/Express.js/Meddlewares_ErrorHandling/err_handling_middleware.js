const express = require("express");
const app = express();
const ExpressError = require("./ExpressError");

// ============================= ERROR HNADLING =========================================

// text route for generating error
app.get("/err",(req, res) => {
    abcd = abds;
  });

  // CUSTOME ERROR HANDLER (we handle error by our side)
app.use((err, req, res, next) => {
    console.log("-------------------ERROR 1 ------------------");
    // err in next is used to send err to next error-handling-middleware 
    next(err);
  });
  
  app.use((err, req, res, next) => {
    console.log("------------ERROR 2------------");
    //  if their is no next error-handling-middleware it invoke build-in express error handler , u can use that also 
    // next(err);
  
    let { status = 500, message = "Some Error Ocurred" } = err;
    res.status(status).send(message);  // this is basic error handling 
  });

 
  // small activity  ,here we decide what status code ,what massage we send 
  app.get("/admin", (req, res) => {
    throw new ExpressError (403, "Access to Admin is Forbidden");  // best way for custome error handling by making own error class
  });
  

  app.listen(8080, (req, res) => {
    console.log("server is running at port 8080");
   });