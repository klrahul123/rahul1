const mongoose= require("mongoose");
const dotenv=require("dotenv");
const express = require("express");
const path = require("path");
const app=express();
const fs = require('fs');
const hbs = require("hbs");

dotenv.config({path :'./config.env'});

const PORT= process.env.PORT;
require('./db/conne');
//const User= require('./model/userSchema');


const staticPath = path.join(__dirname, "../public");
const templatePath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");
app.use(express.static(staticPath));


app.set("view engine", "hbs");
app.set("views", templatePath);
hbs.registerPartials(partialsPath);


app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
app.get("/me", (req , res) => {
    res.render('index');
});

app.get("/about", (req , res) => {
    res.render('about');
});

app.get("/" , (req , res) => {
    res.send("hello kalua here <h1>Love you the most </h1>");
});
app.get("/about", (req, res) => {
    res.send("thank you dost");
});

app.get( "*" , (req , res) => {
    res.render("404" , {
        error: "nikal laude ye page nhi h idhar" ,
    });
});

app.listen(PORT, () => {
    console.log(`listening to the port ${PORT}`);
});