const jsonServer = require('json-server');
// import jsonServer from 'json-server';
const server = jsonServer.create();
const router = jsonServer.router('./src/data/db_user.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);
server.listen(3000, function () {
  console.log('JSON Server is running')
});



const server1 = jsonServer.create();
const router1 = jsonServer.router('./src/data/db_list.json');
const middlewares1 = jsonServer.defaults();

server1.use(middlewares1);
server1.use(router1);
server1.listen(3001, function () {
  console.log('JSON2 Server is running')
});
