const MessageModel = require('../models/message.model');

const search = data => {
  return MessageModel.find(
    { $text : { $search : data.query } },
    { score : { $meta: data.from } }
  );
}

module.exports = search;