// npm i --save express cors dotenv nodemailer

const express = require('express')
require('dotenv').config()

const PORT = process.env.PORT 

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(`/`, require('./route/mailRoute'))

app.listen(PORT, () => {
    console.log(`server is started @ http://localhost:${PORT}`)
})
