const express = require('express')
const mongoose = require('mongoose')
const createServer = require('./server')
const routes = require('./routes')
const port = 3000
const mongo_url = process.env.mongo-url 
const mongo_user = process.env.mongo-user
const mongo_pass = process.env.mongo-pass 

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
