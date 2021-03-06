const socketCluster = require('socketcluster-client');
const logger = require('winston');

const socket = socketCluster.connect({
  hostname: process.env.SOCKET_HOST,
  port: process.env.SOCKET_PORT
});

socket.on('connect', () => logger.info('CONNECTED'));
socket.on('error', (error) => logger.error('socket error: ', error));

module.exports = socket;