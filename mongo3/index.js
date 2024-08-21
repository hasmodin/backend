const express = require("express");
const app = express();
const mongoose = require("mongoose");

const path = require("path");

const Chat = require("./models/chat.js");

const methodOverride = require('method-override');


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public/css")));
app.use(express.static(path.join(__dirname, "public/js")));
app.use(methodOverride('_method'))

app.use(express.urlencoded({extended: true})); // to parse data from request body(post)


main()
.then((result) => {
    console.log("connection success");
})
.catch((err) => {
    console.log(err);
});

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');

}



//index rout
app.get("/chats", async (req,res) => {
    let chats = await Chat.find();
    
    res.render("index.ejs", {chats});
})

//new rout
app.get("/chats/new", (req, res) => {
    res.render("new.ejs");
});

//create rout
app.post("/chats", (req, res) => {
    let {from, to, message} = req.body;
    let newChat = new Chat({
        from: from,
        to: to,
        message: message,
        create_at : new Date(),
    })
    newChat.save()
    .then((result) => {
        console.log("chat saved");
        res.redirect("/chats");
    })
    .catch((err) => {
        console.log(err);
    })
    
});

//edit rout

app.get("/chats/:id/edit", async (req, res) => {
    let {id} = req.params;
    let chat =  await Chat.findById(id);
    res.render("edit.ejs", {chat});
});


//updated Rout

app.put("/chats/:id", async (req, res) => {
  let {id} = req.params;
  let { message: newMessage} = req.body;
    let updatedChat = await Chat.findByIdAndUpdate(id, {message: newMessage}, 
        {runValidators: true, new:true}
    )
    console.log(updatedChat);
    res.redirect("/chats");
});

//Destroy Rout
app.delete("/chats/:id", async (req, res) => {
    let {id} = req.params;
    let deleteChat = await Chat.findByIdAndDelete(id);
    res.redirect("/chats");
    console.log("Deleted")
})


app.get("/", (req, res) => {
    res.send("root is working");
})


app.listen(8080, () => {
    console.log(`server is listening on port 8080`);
})