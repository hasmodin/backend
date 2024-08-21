const mongoose = require("mongoose");
const Chat = require("./models/chat.js");


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

let allChats = ([
    {
        from: "Ehan",
        to: "sabina",
        message: "I love you Mama",
        create_at: new Date()
    },

    {
        from: "Ifra",
        to: "sabina",
        message: "I love you Mama",
        create_at: new Date()
    },

    {
        from: "Azil",
        to: "sabina",
        message: "I love you Mama",
        create_at: new Date()
    },

    {
        from: "Aayat",
        to: "sabina",
        message: "I love you Mama",
        create_at: new Date()
    }
]);

Chat.insertMany(allChats);