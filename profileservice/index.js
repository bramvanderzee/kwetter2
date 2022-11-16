const express = require('express')
const mongoose = require('mongoose')
const createServer = require('./server')
const routes = require('./routes')
const port = 3000
const MONGO_URL = process.env.MONGO_URL
const MONGO_USER = process.env.MONGO_USER
const MONGO_PASS = process.env.MONGO_PASS

export default MONGO_USER

mongoose.connect(MONGO_URL,
    {
        authSource: "admin",
        user: MONGO_USER,
        pass: MONGO_PASS,
        useNewUrlParser: true
    })
        .then(() => {
            const app = createServer()
            app.listen(port, () => {
                console.log('Server running on port', port)
            })
        })
