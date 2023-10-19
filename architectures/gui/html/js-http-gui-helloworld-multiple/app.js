const http = require('http');
const fs = require('fs');
const port = 3000;

const server = http.createServer((req, res) => {

  if ('/' == req.url) {
    displayPage('frontend/init.html', res);
  } else if ('/helloworld' == req.url) {
    displayPage('frontend/helloworld.html', res);
  } else {
    displayPage('frontend/404.html', res);
  }

});

server.listen(port, function(error) {
  if (error) {
    console.log('Something went wrong', error)
  } else {
    console.log('Server is listening on port ' + port)
  }
});

function displayPage(filePath, res) {

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
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