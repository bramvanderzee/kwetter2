const ROUTES = [
    {
        url: '/api/kweet',
        auth: false,
        proxy: {
            target: 'https://l3o7lqzt0a.execute-api.eu-west-1.amazonaws.com/kweet',
            changeOrigin: true,
        }
    },
    {
        url: '/api/profiles',
        auth: false,
        proxy: {
            target: 'http://profile-service/api/profiles',
            changeOrigin: true,
            pathRewrite: {
                [`^/api/profiles`]: ''
            }
        }
    }
]

exports.ROUTES = ROUTES
