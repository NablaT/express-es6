var express = require('express')
var bodyParser = require('body-parser')

var app = express()

// Body parser to be able to read the json in th request
app.use(bodyParser.json())

// Load the routes 
app.use(require('./site/router'))
app.use('/api', require('./customers/router'))
// Repeat the above line for additional model areas

// FINALLY, use any error handlers
app.use(require('./errors/not-found'))

// Export the app instance for unit testing via supertest
module.exports = app
