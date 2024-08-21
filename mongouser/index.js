const express = require("express");
const path = require("path");
const app = express();


// const mongoose = require("mongodb://127.0.0.1:27017/facebook");
const mongoose = require('./models/db');
const User = require("./models/db.js");


app.set("view enigine" , "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public/css")));

app.use(express.json);
app.use(express.urlencoded({extended: true}));

app.get("/home",  async (req, res) => {
   res.render("home.ejs");
  

})

app.get("/home/show",  async (req, res) => {
    const users = await User.find();
    res.render("show.ejs", {users}); 

})
app.get("/home/main", async (req, res) => {
    res.render("main.ejs");
});



app.listen(8080, () => {
  
    console.log(`Server is listening on 8080`);
})