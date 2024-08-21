
const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
    from:{
        type:String,
        required: true
    },
    to: {
        type: String,
        required: true
    },
    message: {
        type: String,
        maxLength: 50
        
    },
    create_at: {
        type: Date,
        required: true
    }
});

const chat = mongoose.model("chat", chatSchema);

module.exports = chat;

