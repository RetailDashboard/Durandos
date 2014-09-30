'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ItemtaticSchema = new Schema({
  id: Number,
  item_id: Number,
  item: String,
  avgRetail: String,
  avgPromoPrice: String,
  page: Number,
  ad_week: String,
  ad_type: String,
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
  actionOrder: Number
});

module.exports = mongoose.model('Itemtatic', ItemtaticSchema);