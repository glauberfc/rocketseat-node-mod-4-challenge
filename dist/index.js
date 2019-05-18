'use strict'

var express = require('express')

var morgan = require('morgan')

var app = express()
app.use(morgan('dev'))
app.get('/', function(req, res) {
  res.send('hello, world!')
})
app.listen(3000, function() {
  return console.log('Server running on http://localhost:3000')
})
