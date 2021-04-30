module.exports = { // any API requests made by vue client will be sent to this address
    devServer: {
        proxy: 'http://127.0.0.1:3000' // express server address
    }

}