const socket = require('./socket.factory');

const ResponseFactory = {
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