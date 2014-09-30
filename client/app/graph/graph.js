'use strict';

angular.module('retailDashboardApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main.graph', {
        // url: '/graph',
        templateUrl: 'app/graph/graph.html',
        controller: 'GraphCtrl'
      });
  });