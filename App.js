const express = require('express');
//const URL = "mongodb+srv://Sarmad:VSdFgx50EgSbgePU@cluster0.hhke0ln.mongodb.net/4material?retryWrites=true&w=majority";
const URL = "mongodb://127.0.0.1:27017/4material"
const cors = require('cors');
const mongoose = require('mongoose');
const userRoute = require('./route/userRoutes')
const app = express();


mongoose.connect(URL, {
    useNewUrlParser: true, useUnifiedTopology: true
})
    .then((result)=>{
        console.log("Connected to DB")
        app.listen(4000, (err)=>{
            if(!err)
                console.log("Listening on port 4000")
            else (err => console.log(err))
        })
    })
    .catch((err) => console.log(err))

//middleware to parse data
app.use(express.json());

//middleware to handle cross server request
app.use(cors());

//middleware for user route
app.use("/api/user", userRoute);