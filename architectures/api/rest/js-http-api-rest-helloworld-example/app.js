const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {

  const name = getNameFromReq(req);

  if (name) {

    const contentType = getContentTypeFromReq(req);    
    const content = getContentByContentType(contentType, name, req);  
    sendResponseAPI(res, content, contentType, 200);

  } else {

    const content = 'Please use following URL structure: http://localhost:3000/name/{name} or http://localhost:3000/name/{name}?contentType=json';  
    sendResponseAPI(res, content, 'text/plain', 200);

  }
  
});

server.listen(port, function(error) {
  if (error) {
    console.log('Something went wrong', error)
  } else {
    console.log('Server is listening on port ' + port)
  }
});

function sendResponseAPI(res, content, contentType, statusCode) {

  res.statusCode = statusCode;
  res.setHeader('Content-Type', contentType);
  res.end(content);

}

function getNameFromReq(req) {

  const urlElements = req.url.split('name/');

  if (urlElements.length != 2) {
    return null;
  }

  let name = urlElements[1];
  return (name.includes("?")) ? name.substring(0, name.indexOf("?")) : name;

}

function getContentTypeFromReq(req) {

  const urlElements = req.url.split('contentType=');

  if (urlElements.length != 2) {
    return 'text/plain';
  }

  const contentType = urlElements[1];
  if (contentType == 'json') {
    return 'application/json';
  } else {
    return 'text/plain';
  }

}

function getContentByContentType(contentType, name, req) {

  let content = null;

  const method = req.method.toLocaleLowerCase();

  if (contentType == 'application/json') {
    const message = 'Hello World ' + name + '. Used HTTP method: ' + method + '. Content type: json';
    content = `{"message": "${message}"}`;
  } else {
    content = 'Hello World ' + name + '. Used HTTP method: ' + method + '. Content type: plain'; 
  }

  return content;

}