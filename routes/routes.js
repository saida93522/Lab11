let express = require('express')  // imports express library
let router = express.Router() // object

router.get('/', function (req, res, next) { //get--request and fetches data, function--provides resopnse
    res.json({ 'message': 'Welcome ITEC 2560 Web Programmers!' })
})

module.exports = router // other file can access router 