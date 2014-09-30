'use strict';

angular.module('retailDashboardApp')
  .config(function ($stateProvider
    ) {
    $stateProvider
      .state('main', {
        url: '/',
        views: {
          'main': {
            templateUrl: 'app/main/main.html',
            controller: 'MainCtrl',
          },
          'main.filter': {
            templateUrl: 'app/filter/filter.html',
            controller: 'FilterCtrl'
          },
          'main.graph': {
            templateUrl: 'app/graph/graph.html',
            controller: 'GraphCtrl'
          },
          'main.actionItem': {
            templateUrl: 'app/actionItem/actionItem.html',
            controller: 'ActionitemCtrl'
          },
        }
      });
  });
