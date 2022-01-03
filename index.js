require('dotenv').config()
const mongoose = require('mongoose')
const server = require("./src/server");

;(() => {
    mongoose
        .connect(process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/simple-todolist')
        .then(() => server({ port: process.env.PORT || 8000 }))
        .catch(er => console.log(er))
})()
