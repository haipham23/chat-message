const logger = require('winston');

const socket = require('./socket.factory');

const ResponseFactory = {
  ok: (res, result) => res.status(200).json(result),
  error: (res, error) => {
    logger.error(error);

    return res.status(400).json('SERVER_ERROR');
  },
  notify: (res, result) => {
    socket.emit('new_message', {
      from: result.from,
      to: result.to,
      msg: result.text
    });

    return res.end();
  }
};

module.exports = ResponseFactory;