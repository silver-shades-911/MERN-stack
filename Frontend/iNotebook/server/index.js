const express = require('express');
const app = express();
const connectToMongo = require("./db");
const authRouter = require('./routes/auth.js');
const notes = require('./routes/notes.js');

// MongoDB Connect
connectToMongo();

// json() middleware

app.use(express.json());
app.use(express.urlencoded());

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('hello world')
});

// Available routes
app.use("/api/auth", authRouter);
app.use("/api/notes", notes);

app.listen(5000, () => {
    console.log("Server is started");
});