var appController = require('../controllers/appController.js');

module.exports = function(app) {
  app.get('/', appController.index );
};
