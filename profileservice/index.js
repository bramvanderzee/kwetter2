const express = require('express')
const mongoose = require('mongoose')
const createServer = require('./server')
const routes = require('./routes')
const port = 3000

mongoose.connect('mongodb://localhost:27017/acmedb',
    {
        authSource: "admin",
        user: "root",
        pass: "root",
        useNewUrlParser: true
    })
        .then(() => {
            const app = createServer()
            app.listen(port, () => {
                console.log('Server running on port', port)
            })
        })
