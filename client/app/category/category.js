'use strict';

angular.module('retailDashboardApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main.category', {
        url: '/category',
        templateUrl: 'app/category/category.html',
        controller: 'CategoryCtrl'
      });
  });