'use strict';

var _ = require('lodash');
var Itemtatic = require('./itemTatic.model');

// Get list of itemTatics
exports.index = function(req, res) {
  Itemtatic.find(function (err, itemTatics) {
    if(err) { return handleError(res, err); }
    return res.json(200, itemTatics);
  });
};

// Get a single itemTatic
exports.show = function(req, res) {
  Itemtatic.findById(req.params.id, function (err, itemTatic) {
    if(err) { return handleError(res, err); }
    if(!itemTatic) { return res.send(404); }
    return res.json(itemTatic);
  });
};

// Creates a new itemTatic in the DB.
exports.create = function(req, res) {
  Itemtatic.create(req.body, function(err, itemTatic) {
    if(err) { return handleError(res, err); }
    return res.json(201, itemTatic);
  });
};

// Updates an existing itemTatic in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Itemtatic.findById(req.params.id, function (err, itemTatic) {
    if (err) { return handleError(res, err); }
    if(!itemTatic) { return res.send(404); }
    var updated = _.merge(itemTatic, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, itemTatic);
    });
  });
};

// Deletes a itemTatic from the DB.
exports.destroy = function(req, res) {
  Itemtatic.findById(req.params.id, function (err, itemTatic) {
    if(err) { return handleError(res, err); }
    if(!itemTatic) { return res.send(404); }
    itemTatic.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}