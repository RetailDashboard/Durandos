'use strict';

angular.module('retailDashboardApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap',
  'categoryDataModule',
  'brandDataModule',
  'itemDataModule',
  'itemTacticDataModule',
  'categoryMonthModule',
  'mainModule'
])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/main/charts');
    // $locationProvider.html5Mode(true);
  });
  