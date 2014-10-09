'use strict';

angular.module('retailDashboardApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main.highChart', {
        url: '/highChart',
        templateUrl: 'app/highChart/highChart.html',
        controller: 'HighchartCtrl'
      });
  });