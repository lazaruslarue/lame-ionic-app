var exampleController = require('../controllers/exampleController.js');

module.exports = function(app) {
  app.get('/example',      exampleController.example );
};
