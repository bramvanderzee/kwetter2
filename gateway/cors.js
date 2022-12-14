const setupCors = (app, routes) => {
    routes.forEach(r => {
        app.use(r.url, cors(), function (req, res, next) {
            next()
        })
    })
}

exports.setupCors = setupCors
