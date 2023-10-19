const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {

  var method = req.method.toLocaleLowerCase();

  if ('get' == method && '/' == req.url) {
    displayMessage('Hello World Index', res, 200);
  } else if ('get' == method && '/helloworld' == req.url) {
    displayMessage('Hello World Message', res, 200);
  } else {
    displayMessage('Resource Not Found', res, 404);
  }

});

server.listen(port, function(error) {
  if (error) {
    console.log('Something went wrong', error)
  } else {
    console.log('Server is listening on port ' + port)
  }
});

function displayMessage(message, res, statusCode) {

  res.statusCode = statusCode;
  res.setHeader('Content-Type', 'text/plain');
  res.end(message);

}