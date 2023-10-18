const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {

  var method = req.method.toLocaleLowerCase();
  var message = `Hello World by method ${method}`;

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(message);

});

server.listen(port, function(error) {
  if (error) {
    console.log('Something went wrong', error)
  } else {
    console.log('Server is listening on port ' + port)
  }
});