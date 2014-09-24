'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ItemSchema = new Schema({
  id: Number,
  Category: Number,
  brand: Number,
  item: String,
  numEvents: Number,
  sales: Number,
  volume: Number,
  margin: Number,
  profit: Number,
  transactions: Number,
  impact: Number,
  isBest: Boolean,
  followUp: String,
  action: String,
  hiddenAction: String,
  actionColor: String,
  disabled: Boolean,
  ActionOrder: Number
});

module.exports = mongoose.model('Item', ItemSchema);