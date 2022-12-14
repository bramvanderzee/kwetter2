const express = require('express')
const { setupLogging } = require('./logging')
const { setupProxies } = require('./proxy')
const { setupAuth } = require('./auth')
const { setupCors } = require('./cors')

const { ROUTES } = require('./routes')

const app = express()
const port = 3000

setupLogging(app)
setupAuth(app, ROUTES)
setupProxies(app, ROUTES)
setupCors(app, ROUTES)

app.listen(port, () => {
    console.log(`Gateway listening on port ${port}`)
})
