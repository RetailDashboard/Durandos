'use strict';

angular.module('retailDashboardApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main.brand', {
        url: '/charts/:departmentName/:categoryName',
        templateUrl: 'app/brand/brand.html',
        controller: 'BrandCtrl'
      });
  });