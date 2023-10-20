let messages = [
  {"id": 1, "text": "Hello World 1"},
  {"id": 2, "text": "Hello World 2"}
];
// let messages = [];

module.exports = {
    getAll: function () {
      return messages;
    },
    getById: function (messageId) {
        return messages.find((c) => c.id === messageId);
    }, 
    add: function (message) {
      messages.push(message);
    },
    update: function (message) {
      messages = messages.filter((c) => c.id !== message.id);
      messages.push(message);
    },
    delete: function (messageId) {
      messages = messages.filter((c) => c.id !== messageId);
    }
};