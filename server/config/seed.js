/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Thing = require('../api/thing/thing.model');
var User = require('../api/user/user.model');
var Category = require('../api/category/category.model')

Thing.find({}).remove(function() {
  Thing.create({
    name : 'Development Tools',
    info : 'Integration with popular tools such as Bower, Grunt, Karma, Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, Stylus, Sass, CoffeeScript, and Less.'
  }, {
    name : 'Server and Client integration',
    info : 'Built with a powerful and fun stack: MongoDB, Express, AngularJS, and Node.'
  }, {
    name : 'Smart Build System',
    info : 'Build system ignores `spec` files, allowing you to keep tests alongside code. Automatic injection of scripts and styles into your index.html'
  },  {
    name : 'Modular Structure',
    info : 'Best practice client and server structures allow for more code reusability and maximum scalability'
  },  {
    name : 'Optimized Build',
    info : 'Build process packs up your templates as a single JavaScript payload, minifies your scripts/css/images, and rewrites asset names for caching.'
  },{
    name : 'Deployment Ready',
    info : 'Easily deploy your app to Heroku or Openshift with the heroku and openshift subgenerators'
  });
});

User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin'
  }, function() {
      console.log('finished populating users');
    }
  );
});

Category.find({}).remove(function() {
  Category.create({
    id : 5,
    item : "Cookies",
    numEvents : 450,
    sales : 0.04,
    volume : 0.03,
    margin : -0.05,
    profit : -0.04,
    transactions : 0.019999999999999997,
    impact : 0.049999999999999996,
    isBest : false,
    followUp : "Investigate Cookies brand, item and tactic performance in more detail, to find higher and lower performing promos",
    action : null,
    hiddenAction : "Large number of events currently used produces mixed results, causing little sales lift and margin erosion.  Identifying and focusing on higher performing brands, items and tactics will improve category performance",
    actionColor : "yellow",
    disabled : false,
    ActionOrder : null
  },
  {
    id : 4,
    item : "Bath Tissue",
    numEvents : 269,
    sales : 0.19,
    volume : 0.14,
    margin : 0.7,
    profit : 0.08,
    transactions : 0.13,
    impact : 0.18,
    isBest : true,
    followUp : null,
    action : null,
    hiddenAction : null,
    actionColor : null,
    disabled : true,
    ActionOrder : null
  },
  {
    id : 8,
    item : "Cereal",
    numEvents : 253,
    sales : 0.24,
    volume : 0.19,
    margin : -0.22,
    profit : -0.22,
    transactions : 0.18,
    impact : 0.24,
    isBest : false,
    followUp : null,
    action : "Stop current high discount promotions in Cereal, and explore different promo tactics",
    hiddenAction : "Current approach causes significant margin erosion. New tactic needed to maintain sales lift without margin loss",
    actionColor : "red",
    disabled : false,
    ActionOrder : null
  },
  {
    id : 0,
    item : "Juices",
    numEvents : 190,
    sales : 0.1,
    volume : 0.07,
    margin : 0.04,
    profit : 0.07,
    transactions : 0.060000000000000005,
    impact : 0.09,
    isBest : false,
    followUp : null,
    action : null,
    hiddenAction : null,
    actionColor : null,
    disabled : true,
    ActionOrder : null
  },
  {
    id : 6,
    item : "Dressings",
    numEvents : 189,
    sales : 0.09,
    volume : 0.06,
    margin : 0.1,
    profit : 0.1,
    transactions : 0.049999999999999996,
    impact : 0.12,
    isBest : false,
    followUp : null,
    action : null,
    hiddenAction : null,
    actionColor : null,
    disabled : true,
    ActionOrder : null
  },
  {
    id : 7,
    item : "Canned Vegetables",
    numEvents : 99,
    sales : 0.07,
    volume : 0.05,
    margin : 0.12,
    profit : 0.12,
    transactions : 0.04,
    impact : 0.07,
    isBest : false,
    followUp : null,
    action : null,
    hiddenAction : null,
    actionColor : null,
    disabled : true,
    ActionOrder : null
  },
  {
    id : 9,
    item : "Laundry Detergent",
    numEvents : 86,
    sales : 0.13,
    volume : 0.09,
    margin : 0.14,
    profit : 0.14,
    transactions : 0.08,
    impact : 0.11,
    isBest : false,
    followUp : null,
    action : null,
    hiddenAction : null,
    actionColor : "red",
    disabled : true,
    ActionOrder : null
  },
  {
    id : 1,
    item : "Food Wrappers",
    numEvents : 76,
    sales : 0.21,
    volume : 0.16,
    margin : 0.16,
    profit : 0.16,
    transactions : 0.15,
    impact : 0.18,
    isBest : true,
    followUp : null,
    action : "Promote items in Food Wrapper more frequently, using current tactics",
    hiddenAction : "Despite relatively few promo events, Food Wrappers shows significant margin and profit lift",
    actionColor : "green",
    disabled : false,
    ActionOrder : null
  },
  {
    id : 2,
    item : "Drink Mixes",
    numEvents : 30,
    sales : 0.03,
    volume : 0.02,
    margin : 0.01,
    profit : 0.02,
    transactions : 0.01,
    impact : 0.04,
    isBest : false,
    followUp : "Explore additional promo tactics and greater frequency for Drink Mixes",
    action : null,
    hiddenAction : "Currently, few events are driving very little sales and margin improvement. Testing additional events will determine the best tactics and frequency for Drink Mixes",
    actionColor : "yellow",
    disabled : false,
    ActionOrder : null
  },
  {
    id : 3,
    item : "Household Cleaners",
    numEvents : 17,
    sales : 0.1,
    volume : 0.08,
    margin : 0.03,
    profit : 0.03,
    transactions : 0.07,
    impact : 0.1,
    isBest : false,
    followUp : null,
    action : null,
    hiddenAction : null,
    actionColor : null,
    disabled : true,
    ActionOrder : null
  }, function() {
      console.log('finished populating categories');
    }
  );
});