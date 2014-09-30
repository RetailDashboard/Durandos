'use strict';

angular.module('retailDashboardApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main.item', {
        url: '/item',
        templateUrl: 'app/item/item.html',
        controller: 'ItemCtrl'
      });
  });