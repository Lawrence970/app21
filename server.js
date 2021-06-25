// this file contains all connections to server
// res.setHeader("Content-Type","application/json"); converts info to json
//import express so u can use it

const express = require("express");
const {linkStore, Link} = require("./model"); // importing both objects 'store' and 'Todo'
const cors = require("cors");

// initialize your app/server
const app = express();

app.use(cors());
app.use(express.static("static"));

// tell our app to use json
app.use(express.json({}));


module.exports =  app;