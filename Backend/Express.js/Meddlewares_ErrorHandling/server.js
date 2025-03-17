// this is when i second time learning middlewares
// middleware can do 2 work, { send response or next } if it cant do any of them, website is stuck on loading

const express = require("express");
const app = express();
const ExpressError = require("./ExpressError");

// learning basics
app.use ((req, res, next) => {
    console.log(" I am 1st middleware");
    return next();
});

app.use(
  (req, res, next) => {
    console.log("I am 2nd middlewares");
    return next();
  }
);

// utility middleware -- logger
app.use(
  (req, res, next) => {
    req.time = new Date();
    console.log(req.url, req.method, req.time, req.hostname);
    next();
  }
);

// route specific middlewares
app.use(
  "/random", (req, res, next) => {
    console.log("I am middleware on /randome route");
    return next();
  }
);


// else you can make callback
let tokenChaker = (req, res, next ) => {
  let { token } = req.query;
  if(token === "give_access"){
    next();
  }
  else{
    // res.status(401).send("ACCESS DENIED !"); ---------> basic way

    // OR

    // throw new Error("ACCESS DENIED !"); ---------->  pre-defined express error class 

    // OR

    // our custom error class
    throw new ExpressError(401, "ACCESS DENIED !"); // best way for custome error handling by making own error class

  }
};

// token checker --- api form
// app.use( "/api", (req, res, next) => {
//   let { token } = req.query;

//   if(token === "give_access"){
//     next();
//   }
//   else {
//     res.status(401).send("ACCESS DENIED !")
//   }
// }
// );


// root route 
app.get("/", (req, res) => {
  res.send("root route is working");
});

// random route 
app.get("/random", (req, res) => {
   res.send(" random page ");
});


// middleware as function , callback
app.get("/api", tokenChaker,(req, res) => {
  res.send("High classified file");
});



app.use((err, req, res, next) => {
  console.log("------------ERROR------------");
  let { status , message } = err;
  res.status(status).send(message);  // this is basic error handling 
});


// not find page --- define last middleware if nothing match 
app.use((req, res ) => {
  res.status(404).send("Page not found");
});

app.listen(8080, (req, res) => {
 console.log("server is running at port 8080");
});