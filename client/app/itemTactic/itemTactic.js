'use strict';

angular.module('retailDashboardApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main.itemTactic', {
        url: '/department/:departmentName/:categoryName/:brandName/:itemName',
        templateUrl: 'app/itemTactic/itemTactic.html',
        controller: 'ItemTacticCtrl'
      });
  });