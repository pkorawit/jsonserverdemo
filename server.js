const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('pins.json')
const port = process.env.PORT || 3000
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)
server.listen(port, function () {
  console.log('PSU Pin Server is running')
})