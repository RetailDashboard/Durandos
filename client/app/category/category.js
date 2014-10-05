'use strict';

angular.module('retailDashboardApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main.category', {
        url: '/department/:departmentName',
        templateUrl: 'app/category/category.html',
        controller: 'CategoryCtrl'
      });
  });