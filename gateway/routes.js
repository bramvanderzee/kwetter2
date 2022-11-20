const ROUTES = [
    {
        url: '/api/kweet',
        auth: false,
        proxy: {
            target: 'https://l3o7lqzt0a.execute-api.eu-west-1.amazonaws.com/',
            changeOrigin: true,
        },
        pathRewrite: {
            [`^/api/kweet`]: '/kweet'
        }
    },
    {
        url: '/api/profile',
        auth: false,
        proxy: {
            target: 'http://profile-service:3000/',
            changeOrigin: true,
        }
    }
]

exports.ROUTES = ROUTES
