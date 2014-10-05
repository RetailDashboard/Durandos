'use strict';

angular.module('retailDashboardApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main.item', {
        url: '/department/:departmentName/:categoryName/:brandName',
        templateUrl: 'app/item/item.html',
        controller: 'ItemCtrl'
      });
  });