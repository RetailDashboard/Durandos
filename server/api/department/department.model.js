'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var DepartmentSchema = new Schema({
  id : Number,
  item : String
});

module.exports = mongoose.model('Department', DepartmentSchema);