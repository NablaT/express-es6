var express = require('express')
var join = require('path').join

var router = new express.Router()

function home (req, res) {
  res.send("Home")
}

function team (req, res) {
  res.send('Team')
}

router.get('/', home)
router.get('/team', team)

module.exports = router
