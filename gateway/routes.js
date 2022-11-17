const ROUTES = [
    {
        url: '/free',
        auth: false,
        proxy: {
            target: 'http://www.google.com',
            changeOrigin: true,
            pathRewrite: {
                [`^/free`]: ''
            }
        }
    },
    {
        url: '/premium',
        auth: true,
        proxy: {
            target: 'http://www.google.com',
            changeOrigin: true,
            pathRewrite: {
                [`^/premium`]: ''
            }
        }
    }
]

exports.ROUTES = ROUTES
