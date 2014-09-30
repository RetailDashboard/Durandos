'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var DepartmentSchema = new Schema({
  position : String,
  condition : String,
  events : Number,
  events_sub : Number,
  incremental_sales : Number,
  incremental_margin : Number
});

module.exports = mongoose.model('Department', DepartmentSchema);