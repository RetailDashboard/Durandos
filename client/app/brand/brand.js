'use strict';

angular.module('retailDashboardApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main.brand', {
        url: '/brand',
        templateUrl: 'app/brand/brand.html',
        controller: 'BrandCtrl'
      });
  });