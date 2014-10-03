'use strict';

var _ = require('lodash');
var Categorymonth = require('./categoryMonth.model');

// Get list of categoryMonths
exports.index = function(req, res) {
  Categorymonth.find({}, function (err, categoryMonths) {
    if(err) { return handleError(res, err); }
    return res.json(200, categoryMonths);
  });
};

// Get a single categoryMonth
exports.show = function(req, res) {
  Categorymonth.findById(req.params.id, function (err, categoryMonth) {
    if(err) { return handleError(res, err); }
    if(!categoryMonth) { return res.send(404); }
    return res.json(categoryMonth);
  });
};

// Creates a new categoryMonth in the DB.
exports.create = function(req, res) {
  Categorymonth.create(req.body, function(err, categoryMonth) {
    if(err) { return handleError(res, err); }
    return res.json(201, categoryMonth);
  });
};

// Updates an existing categoryMonth in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Categorymonth.findById(req.params.id, function (err, categoryMonth) {
    if (err) { return handleError(res, err); }
    if(!categoryMonth) { return res.send(404); }
    var updated = _.merge(categoryMonth, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, categoryMonth);
    });
  });
};

// Deletes a categoryMonth from the DB.
exports.destroy = function(req, res) {
  Categorymonth.findById(req.params.id, function (err, categoryMonth) {
    if(err) { return handleError(res, err); }
    if(!categoryMonth) { return res.send(404); }
    categoryMonth.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}