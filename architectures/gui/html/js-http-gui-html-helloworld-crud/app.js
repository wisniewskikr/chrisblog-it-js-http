const http = require('http');
const fs = require('fs');
const messagesApi = require('./apis/messages-api');
const port = 3000;

const server = http.createServer((req, res) => {

  var method = req.method.toLocaleLowerCase();

  if ('get' == method && '/api/' == req.url) {
    messagesApi.handleReadAll(res);
    return;
  } else if ('get' == method && req.url.startsWith('/api/view')) {
    messagesApi.handleRead(req, res);
    return;
  }

  if (req.url.startsWith('/frontend/js')) {
    displayPage(req.url.substring(1), 'text/javascript', res);
    return;
  } 
  
  if ('/' == req.url) {
    displayPage('frontend/html/list.html', 'text/html', res);
  } else if (req.url.startsWith('/view')) {
    displayPage('frontend/html/view.html', 'text/html', res);
  } else {
    displayPage('frontend/html/404.html', 'text/html', res);
  }

});

server.listen(port, function(error) {
  if (error) {
    console.log('Something went wrong', error)
  } else {
    console.log('Server is listening on port ' + port)
  }
});

function displayPage(filePath, contentType, res) {

  res.statusCode = 200;
  res.setHeader('Content-Type', contentType);
  fs.readFile(filePath, function(error, data){
    if (error) {
      res.writeHead(404);
      res.write("Error: File Not Found");
    } else {
      res.write(data);
    }
    res.end();
  });

}