const express = require('express')
const logger = require("morgan")

const app = express()

const storeRouter = require('./routes/storeRouter')

app.use(logger('dev'))
app.use(express.json())

app.use('/', storeRouter)

app.listen(3000, ()=>{
    console.log("Server started on port 3000")
})

module.exports = app