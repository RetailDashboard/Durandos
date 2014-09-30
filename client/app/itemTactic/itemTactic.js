'use strict';

angular.module('retailDashboardApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('scope.itemTactic', {
        url: '/itemTactic',
        templateUrl: 'app/itemTactic/itemTactic.html',
        controller: 'ItemtacticCtrl'
      });
  });