var jsonServer = require('json-server');
var server = jsonServer.create();
var router = jsonServer.router('pins.json');
var middlewares = jsonServer.defaults();
var fs = require('fs');
var port = process.env.PORT || 3000;

server.use(middlewares);
server.use(router);

server.listen(port, function () {
  console.log('PSU Pin json-server is running!');
});