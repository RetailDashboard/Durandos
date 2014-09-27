'use strict';

angular.module('testAppApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('item', {
        url: '/item',
        templateUrl: 'app/item/item.html',
        controller: 'ItemCtrl'
      });
  });