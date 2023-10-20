const Info = require('../models/info')
const messagesService = require('../services/messages-service');

module.exports = {
    handleReadAll: function (res) {
      
        let messages = messagesService.getAll();
  
        if (messages.length == 0) {
            displayMessage(new Info('There is no message yet'), res, 200);
            return;
        }

        displayMessage(messages, res, 200);

    }
}

function displayMessage(json, res, statusCode) {

    res.statusCode = statusCode;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(json));
  
  }