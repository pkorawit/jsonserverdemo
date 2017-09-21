const express = require('express')
const app = express()
var fakepins = require('./fakepins.js')

app.get('/', function (req, res) {
  res.send('Hello World! Express.Js')
})

app.get('/pins', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(fakepins());
  })

app.listen(80, function () {
  console.log('Example app listening on port 80!')
})



