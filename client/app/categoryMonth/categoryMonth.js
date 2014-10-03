'use strict';

angular.module('retailDashboardApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main.categoryMonth', {
        url: '/categoryMonth',
        templateUrl: 'app/categoryMonth/categoryMonth.html',
        controller: 'CategoryMonthCtrl'
      });
  });