const express = require('express')
const routes = require('./routes')

function createServer() {
    const app = express()
    app.use(express.json())
    app.use('/api', routes)

    app.use(express.static('public'))
    return app
}

module.exports = createServer
