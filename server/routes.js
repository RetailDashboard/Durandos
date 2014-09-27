/**
 * Main application routes
 */

'use strict';

var errors = require('./components/errors');

module.exports = function(app) {

  // Insert routes below
  app.use('/api/brands', require('./api/brand'));
  app.use('/api/categories', require('./api/category'));
  app.use('/api/items', require('./api/item'));
  app.use('/api/categoryMonths', require('./api/categoryMonth'));
  app.use('/api/itemTactics', require('./api/itemTactic'));
  app.use('/api/things', require('./api/thing'));
  
  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
   .get(errors[404]);

  // All other routes should redirect to the index.html
  app.route('/*')
    .get(function(req, res) {
      res.sendfile(app.get('appPath') + '/index.html');
    });
};
