const express = require('express')
const app = express()
var fakepins = require('./fakepins.js')
var port = process.env.PORT || 3000;

app.get('/', function (req, res) {
  res.send('Hello World! Express.Js')
})

app.get('/pins', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(fakepins());
  })

app.listen(port, function () {
  console.log('Example app listening on port 80!')
})



