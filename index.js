const express = require('express')
const PORT = process.env.PORT|4777
const {username, password} = require('./credentials')
const mongoose = require('mongoose')
const wtRouter = require('./routes/wtRouter')
const userRouter = require('./routes/userRouter')

/**
 * DataBase connection(mongooDB Atlas)
 */
mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.ez8s0.mongodb.net/wtapp?retryWrites=true&w=majority`)
    .then(()=> console.log("MongoDB started -_-"))
    .catch((err)=>console.log("MongoDB not working because:",err.message))
const app =express()


app.use('/api/whiteTests/',wtRouter)
app.use('/api/users/', userRouter)
app.listen(PORT, () => console.log(`App is running on port ${PORT} °_°`))