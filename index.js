const express = require('express')
const morgan = require('morgan')

const app = express()

app.use(morgan('dev'))

app.get('/', function(req, res) {
  res.send('hello, world!')
})

app.listen(3000, () => console.log('Server running on http://localhost:3000'))
