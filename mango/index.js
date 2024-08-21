const mongoose = require('mongoose');

main()
.then(() =>{ 
    console.log("connection successful")
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

}

const userSchema = new mongoose.Schema({
    name: String,
    email : String,
    age : Number
});

const User = mongoose.model("User", userSchema);


User.deleteMany({age:34})
.then((res) => {
    console.log(res);
})
.catch((err) => {
    console.log(err);
})

// User.updateOne({name:"samir"}, {age:34})
// .then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err);
// });

// User.deleteOne({name:"hasmodin"})
// .then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err);
// })

// User.findByIdAndUpdate("66919252525cd68f804609be", {age:40}, {new:true})
// .then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err);
// }) 

// User.updateMany({age:30}, {age:50})
// .then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err);
// })

// User.updateOne({name:"sabina"}, {name:"hasmodin"})
// .then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err);
// });

// User.findById("66919252525cd68f804609be")
// .then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err);
// });




// User.insertMany([
//     {name:"hassam", email:"hassam123@yahoo.com", age:30},
//     {name:"naimo", email:"naimo@yahoo.com", age:34},
//     {name:"samir", email:"samier@yahoo.com", age:28}
// ])
// .then((res) => {
//     console.log(res);
// });

// const user2 = new User({
//     name: "sabina",
//     email: "sabina123@gmail.com",
//     age: 30
// });

// user2.save()
// .then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err);
// })

