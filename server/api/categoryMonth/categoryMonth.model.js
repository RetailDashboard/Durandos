'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CategorymonthSchema = new Schema({
  id: Number, 
  month: String,
  sales: Number,
  volume: Number,
  margin: Number,
  profit: Number,
  transactions: Number,
  impact: Number
});

module.exports = mongoose.model('Categorymonth', CategorymonthSchema);