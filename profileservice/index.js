const express = require('express')
const mongoose = require('mongoose')
const createServer = require('./server')
const routes = require('./routes')
const port = 3000
const MONGO_URL = process.env.MONGO_URL
const MONGO_USER = process.env.MONGO_USER
const MONGO_PASS = process.env.MONGO_PASS

mongoose.connect(mongo_url,
    {
        authSource: "admin",
        user: mongo_user,
        pass: mongo_pass,
        useNewUrlParser: true
    })
        .then(() => {
            const app = createServer()
            app.listen(port, () => {
                console.log('Server running on port', port)
            })
        })
