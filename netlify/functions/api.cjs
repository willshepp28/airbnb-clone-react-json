/* eslint-disable no-undef */
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use('/.netlify/functions/jsonServer', router);  // path must route to lambda

module.exports.handler = async () => {
  const result = await new Promise((resolve) => {
    server(req, res, () => {
      resolve({
        statusCode: res.statusCode,
        body: res.body,
        headers: res.getHeaders()
      });
    });
  });

  return result;
};
