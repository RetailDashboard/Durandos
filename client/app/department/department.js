'use strict';

angular.module('retailDashboardApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main.department', {
        url: '/charts',
        templateUrl: 'app/department/department.html',
        controller: 'DepartmentCtrl'
      });
  });