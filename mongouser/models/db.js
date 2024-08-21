const { type } = require("express/lib/response");
const mongoose = require("mongoose");

main()
.then((res) => {
    console.log("connection success");
})
.catch((err) => {
    console.log(err);
})
async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/facebook");
}


const facebookSchema = new mongoose.Schema({
    name: {
       firstName: {type: String},
       lastName: {type: String}
      
    },
            
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },

    birthdate: {
        type: Date
        
    },

    gender: {
        type: String,
        enum: ["Male", "Female"]

    }
});

const User = mongoose.model("User",facebookSchema);
module.exports = User;
// const users = User.find()
// .then((result) => {
//     console.log(result);
// })
// .catch((err) => {
//     console.log(err);
// })



// User.updateOne({email: "hassam123@gmail.com"}, {email: "naimodin@gmail.com"})
// .then((result) => {
//     console.log(result);
// })
// .catch((err) => {
//     console.log(err);
// });

// User.deleteMany({email: "sabina123@gmail.com"})
// .then((result) => {
//     console.log(result);
// })
// .catch((err) => {
//     console.log(err);
// } );



// const users = [
//     {name: {
//         firstName:"samir",
//         lastName: "Ansari"
//     },
//     email:"samir@gmail.com",
//     password: "samir12",
//     birthdate: "200-02-03",
//     gender: "Male"
// },
// {
//     name: {
//         firstName:"ifra",
//         lastName:"Hassam"
//     },
//     email: "ifra@gmail.com",
//     password: "ifra12",
//     birthdate: "2021-05-20",
//     gender: "Female"
// }
// ];

// User.insertMany(users)
// .then((res) => {
//     console.log(res[0]);
// })
// .catch((err) => {
//     console.log(err);
// })

// const user1 = new User({
//     name: {
//         firstName: "Sabina",
//         lastName: "Khatun"
//     },
//     email: "sabina12@gmail.com",
//     password: "sabina123",
//     birthdate: "1995-01-02",
//     gender: "Female"
// });

// user1.save()
// .then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err);
// })