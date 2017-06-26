var express = require('express')
var bodyParser = require('body-parser')

var app = express()

app.use(bodyParser.json())

// See the README about ordering of middleware
// Load the routes ("controllers" -ish)
app.use(require('./site/router'))
app.use('/api', require('./customers/router'))
// Repeat the above line for additional model areas

// FINALLY, use any error handlers
app.use(require('./errors/not-found'))

// Export the app instance for unit testing via supertest
module.exports = app
