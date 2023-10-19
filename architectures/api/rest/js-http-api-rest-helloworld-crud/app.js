const http = require('http');
const port = 3000;

class Message {
  constructor({ id, text }) {
    this.id = id
    this.text = text
  }
}

class Error {
  constructor( error ) {
    this.error = error
  }
}

let messages = [
  new Message({ id: 1, text: 'Hello World 1' }),
  new Message({ id: 2, text: 'Hello World 2' })
]

const server = http.createServer((req, res) => {

  var method = req.method.toLocaleLowerCase();

  if ('get' == method && '/' == req.url) {
    handleReadAll(res);
  } else if ('get' == method) {
    handleRead(req, res);
  } else {
    displayMessage(new Error('Resource Not Found'), res, 404);
  }

});

server.listen(port, function(error) {
  if (error) {
    console.log('Something went wrong', error)
  } else {
    console.log('Server is listening on port ' + port)
  }
});

function displayMessage(json, res, statusCode) {

  res.statusCode = statusCode;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(json));

}

function handleReadAll(res) {
  displayMessage(messages, res, 200);
}

function handleRead(req, res) {
  const id = req.url.split("/")[1];
  const messageId = parseInt(id);
  const message = messages.find((c) => c.id === messageId)
  displayMessage(message, res, 200);
}