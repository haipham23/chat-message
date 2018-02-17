const save = require('../apis/save');
const search = require('../apis/search');

const ResponseFactory = require('../factories/response.factory');

const routes = [{
  method: 'get',
  path: '/api/health-check',
  func: (req, res) => ResponseFactory.ok(res, 'ok')
}, {
  method: 'post',
  path: '/api/message/save',
  func: (req, res) =>
    save(req.body)
      .then(data => ResponseFactory.notify(res, data))
      .catch((error) => ResponseFactory.error(res, error))
}, {
  method: 'post',
  path: '/api/message/search',
  func: (req, res) =>
    search(req.body)
      .then(messages => ResponseFactory.ok(res, messages))
      .catch((error) => ResponseFactory.error(res, error))
}]

module.exports = routes;