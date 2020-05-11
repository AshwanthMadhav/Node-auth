const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt')
const mongoose = require("mongoose")
const db = require('./helper/db')
const errorHandler = require('./helper/errorHandler')
app.set('view-engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/', require('./controller/user'));


app.use(errorHandler)

app.get('/', (req, res) => {
    res.render('login.ejs')
})

app.get('/login', (req, res) => {
    res.render('login.ejs')
})

app.get('/register', (req, res) => {
    res.render('register.ejs')
})

app.listen(3000, () => {
    console.log("Server listenig to 3000")
})