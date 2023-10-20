const Info = require('../models/info')
const messagesService = require('../services/messages-service');

module.exports = {
    handleReadAll: function (res) {
      
        let messages = messagesService.getAll();
        displayMessage(messages, res, 200);

    },
    handleRead: function (req, res) {

        const messageId = parseInt(req.url.split("/")[3]);
        if (isNaN(messageId)) {
            displayMessage(null, res, 404);
            return;
        }

        const message = messagesService.getById(messageId);
        if (message == null) {
            displayMessage(null, res, 404);
            return;
        }

        displayMessage(message, res, 200);

    },
    handleCreate: function (req, res) {

        let body = '';
        req.on('data', (chunk) => {
            body += chunk;
        });
        req.on('end', () => {
            body = body.replaceAll("\\", "").replaceAll("\"{", "{").replaceAll("}\"", "}");
            const message = JSON.parse(body);
            messagesService.add(message);
            displayMessage(null, res, 200);
        });

    }
}

function displayMessage(json, res, statusCode) {

    res.statusCode = statusCode;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(json));
  
  }