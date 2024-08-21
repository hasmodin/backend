const express = require("express");
const app = express();
const ExpressError = require("./expressError");
const cookieParser = require("cookie-parser");
const cookieValidator = require("./cookie/cookieValidator");

//middleware
app.use(cookieParser());

// app.use((req, res, next) => {
//     res.send("Hi I am middleware one");
//     next();
// })

// app.use((req, res, next) => {
//     console.log("I am middleware two");
// })
// app.get("/", (req, res) =>{
//     res.send("Hi, i am root");
// })

//Middleware function myLogger

// const myLogger = (req, res, next) => {
//     console.log("LOGGED");
//         next();
    
// }
// app.use(myLogger);

// app.get("/", (req, res) => {
//     res.send("Hello World");
// })


//Middleware function requestTime

// app.use("/", (req, res, next) => {
//    todayTime = new Date(Date.now()).toString().split(" ")[4];
//     res.send({todayTime});
//     next();
// })

// app.use("/", (req, res, next) => {
//     req.reqTime = new Date(Date.now()).toString().split(" ").splice(0, 4).join(" ");
//     next();
// });

// app.use("/", (req, res) => {
//     responseText = "Hello World <br>";
//     responseText +=  `<small>Requested at : ${req.reqTime}`;
//     res.send(responseText);
// })


//crating utility middleware

// app.use( (req, res, next) => {
//     console.log(req.method, req.path);
//     next();

// })

// app.use("/", (req, res) => {
//     res.send("Hi, I am root");
// })


// app.use( (req, res , next) => {
//     console.log("LOGGED");
//     next();
// });

// app.use( (req, res, next) => {
//     req.time = Date.now();
//     console.log(req.time);
//     next();
// })

// app.get("/", (req, res) => {
//     res.send("Hi, i am root");
// });

// async function validateCookies(req, res, next) {
//     await cookieValidator(req.cookies);
//     next();
// }

// app.use(validateCookies);

// //error handler
// app.use( (err, req, res, next ) => {
//     req.status(400).send(err.message);
// });

app.get("/admin", (req, res) => {
    throw new ExpressError(403, "Access to admin is forbidden");
});
app.get("/err", (req, res) => {
    res.send(err);
})

app.use( (err, req, res, next) => {
    let {status = 500, message = "some error occureed"} = err;
    res.status(status).send(message);
});

app.get("/", (req, res) => {
    res.send("Hi, I am root");
})

app.listen(8080, () => {
    console.log("Server is listening at port 8080");
})