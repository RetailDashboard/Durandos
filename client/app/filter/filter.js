'use strict';

angular.module('retailDashboardApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main.filter', {
        // url: '/filter',
        templateUrl: 'app/filter/filter.html',
        controller: 'FilterCtrl'
      });
  });