'use strict';

angular.module('retailDashboardApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main.itemTactic', {
        url: '/itemTactic',
        templateUrl: 'app/itemTactic/itemTactic.html',
        controller: 'ItemTacticCtrl'
      });
  });