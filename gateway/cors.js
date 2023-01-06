const cors = require('cors')

const setupCors = (app, routes) => {
    routes.forEach(r => {
        app.use(r.url, cors(), function (req, res, next) {
            res.set('Access-Control-Allow-Origin', '*');
            next()
        })
    })
}

exports.setupCors = setupCors
