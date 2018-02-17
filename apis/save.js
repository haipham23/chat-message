const MessageModel = require('../models/message.model');

const save = data => {
  const newMessage = new MessageModel(data);
  return newMessage.save().then(() => data);
};

module.exports = save;