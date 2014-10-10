'use strict';

var _ = require('lodash');
var Itemtactic = require('./itemTactic.model');

// Get list of itemTactics
exports.index = function(req, res) {
  Itemtactic.find(null, null, {sort: {item: 1}}, function (err, itemTactics) {
    if(err) { return handleError(res, err); }
    return res.json(200, itemTactics);
  });
};

// Get a single itemTactic
exports.show = function(req, res) {
  Itemtactic.findById(req.params.id, function (err, itemTactic) {
    if(err) { return handleError(res, err); }
    if(!itemTactic) { return res.send(404); }
    return res.json(itemTactic);
  });
};

// Creates a new itemTactic in the DB.
exports.create = function(req, res) {
  Itemtactic.create(req.body, function(err, itemTactic) {
    if(err) { return handleError(res, err); }
    return res.json(201, itemTactic);
  });
};

// Updates an existing itemTactic in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Itemtactic.findById(req.params.id, function (err, itemTactic) {
    if (err) { return handleError(res, err); }
    if(!itemTactic) { return res.send(404); }
    var updated = _.merge(itemTactic, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, itemTactic);
    });
  });
};

// Deletes a itemTactic from the DB.
exports.destroy = function(req, res) {
  Itemtactic.findById(req.params.id, function (err, itemTactic) {
    if(err) { return handleError(res, err); }
    if(!itemTactic) { return res.send(404); }
    itemTactic.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}