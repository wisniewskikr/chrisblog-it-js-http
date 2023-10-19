const http = require('http');
const Info = require('./models/info')
const messagesService = require('./services/messages-service');
const port = 3000;

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

// ***** HELP METHODS ***** //

function handleReadAll(res) {
  
  let messages = messagesService.getAll();
  
  if (messages.length == 0) {
    displayMessage(new Info('There is no message yet'), res, 200);
    return;
  }

  displayMessage(messages, res, 200);

}

function handleRead(req, res) {

  const messageId = parseInt(req.url.split("/")[1]);
  if (isNaN(messageId)) {
    displayMessage(new Info('Specific ID Not Found'), res, 200);
    return;
  }

  const message = messagesService.getById(messageId);
  if (message == null) {
    displayMessage(new Info('Specific Message Not Found'), res, 200);
    return;
  }

  displayMessage(message, res, 200);

}

function handleCreate(req, res) {

  let body = '';
  req.on('data', (chunk) => {
      body += chunk;
  });
  req.on('end', () => {
      const message = JSON.parse(body);
      messagesService.add(message);
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
    const messageCurrent = messagesService.getById(message.id);
    if (!messageCurrent) {
      displayMessage(new Info('Specific Message Not Found'), res, 200);
      return; 
    }
    messagesService.update(message);
    displayMessage(new Info('Message was updated'), res, 200);
  });

}

function handleDelete(req, res) {
  
  const messageId = parseInt(req.url.split("/")[1]);
  if (isNaN(messageId)) {
    displayMessage(new Info('Specific ID Not Found'), res, 200);
    return;
  }

  const messageCurrent = messagesService.getById(messageId);
  if (!messageCurrent) {
    displayMessage(new Info('Specific Message Not Found'), res, 200);
    return; 
  }

  messagesService.delete(messageId);
  displayMessage(new Info('Message was deleted'), res, 200); 

}

function displayMessage(json, res, statusCode) {

  res.statusCode = statusCode;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(json));

}