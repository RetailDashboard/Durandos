'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var BrandSchema = new Schema({
  id: Number,
  Category: Number,
  item: String,
  numberEvents: Number,
  IncSalesMin: Number,
  IncSalesMax: Number,
  IncSalesMean: Number,
  VolSalesMin: Number,
  VolSalesMax: Number,
  VolSalesMean: Number,
  MarSalesMin: Number,
  MarSalesMax: Number,
  MarSalesMean: Number,
  isBest: Boolean,
  followUp: String,
  action: String,
  hiddenAction: String,
  actionColor: String,
  disabled: Boolean,
  ActionOrder: Number
});

module.exports = mongoose.model('Brand', BrandSchema);
