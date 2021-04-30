//set up web server

let express = require('express')
let routes = require('./routes/routes')
let path = require('path')
//create web app
let app = express()
app.use(express.static(path.join(__dirname, 'hello-vue', 'dist'))) //express notified with the dist files path

app.use('/api', routes)

//run server
let server = app.listen(process.env.PORT || 3000, function () { //listen for specified port if not use port 3000
    console.log('Express server running on port', server.address().port);

}) 