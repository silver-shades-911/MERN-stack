const express = require('express');
var cors = require('cors')
const app = express();
const connectToMongo = require("./db");
const authRouter = require('./routes/auth.js');
const noteRouter = require('./routes/note.js');




// MongoDB Connect
connectToMongo();

// json() middleware

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('hello world')
});

// Available routes
app.use("/api/auth", authRouter);
app.use("/api/note", noteRouter);

app.listen(5000, () => {
    console.log("Server is started");
});