'use strict';

angular.module('retailDashboardApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main.actionItem', {
        // url: '/actionItem',
        templateUrl: 'app/actionItem/actionItem.html',
        controller: 'ActionitemCtrl'
      });
  });