const ROUTES = [
    {
        url: '/api/kweet',
        auth: false,
        proxy: {
            target: 'https://kweetfunctions.azurewebsites.net/api/kweet?code=kweet',
            changeOrigin: true,
            pathRewrite: {
                [`^/api/kweet`]: ''
            }
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
