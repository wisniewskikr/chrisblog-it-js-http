const http = require('http');
const port = 3000;

class Message {
  constructor({ id, text }) {
    this.id = id
    this.text = text
  }
}

class Info {
  constructor( info ) {
    this.info = info
  }
}

let messages = [];

const server = http.createServer((req, res) => {

  var method = req.method.toLocaleLowerCase();

  if ('get' == method && '/' == req.url) {
    handleReadAll(res);
  } else if ('get' == method) {
    handleRead(req, res);
  } else if ('post' == method) {
    handleCreate(req, res); 
  } else if ('put' == method) {
    handleUpdate(req, res);
  } else if ('delete' == method) {
    handleDelete(req, res);   
  } else {
    displayMessage(new Info('Error: Resource Not Found'), res, 404);
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
  if (isNaN(messageId)) {
    displayMessage(new Info('Specific ID Not Found'), res, 200);
    return;
  }
  const message = messages.find((c) => c.id === messageId)
  displayMessage(message, res, 200);
}

function handleCreate(req, res) {
  let body = '';
  req.on('data', (chunk) => {
      body += chunk;
  });
  req.on('end', () => {
      messages.push(JSON.parse(body));
      displayMessage(new Info('New Message was added'), res, 200);      
  });
}

function handleUpdate(req, res) {
  let body = '';
  req.on('data', (chunk) => {
      body += chunk;
  });
  req.on('end', () => {
    const message = JSON.parse(body);
    const messageCurrent = messages.find((c) => c.id === message.id)
    if (!messageCurrent) {
      displayMessage(new Info('Specific Message Not Found'), res, 200);
      return; 
    }
    messages = messages.filter((c) => c.id !== message.id);
    messages.push(message);
    displayMessage(new Info('New Message was updated'), res, 200);      
  });
}

function handleDelete(req, res) {
  const id = req.url.split("/")[1];
  const messageId = parseInt(id);
  if (isNaN(messageId)) {
    displayMessage(new Info('Specific ID Not Found'), res, 200);
    return;
  }
  const messageCurrent = messages.find((c) => c.id === messageId)
    if (!messageCurrent) {
      displayMessage(new Info('Specific Message Not Found'), res, 200);
      return; 
    }
    messages = messages.filter((c) => c.id !== messageId);
    displayMessage(new Info('Message was deleted'), res, 200); 
}