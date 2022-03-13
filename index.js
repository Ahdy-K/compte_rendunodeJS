const express = require('express')
const PORT = process.env.PORT|4777
const {username, password} = require('./credentials')
const mongoose = require('mongoose')

mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.ez8s0.mongodb.net/wtapp?retryWrites=true&w=majority`)
    .then(()=> console.log("MongoDB started -_-"))
    .catch((err)=>console.log("MongoDB not working because:",err))
const app =express()

app.listen(PORT, () => console.log(`App is running on port ${PORT} °_°`))