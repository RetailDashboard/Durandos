'use strict';

angular.module('retailDashboardApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main.chartTest', {
        url: '/chartTest',
        templateUrl: 'app/chartTest/chartTest.html',
        controller: 'CharttestCtrl'
      });
  });