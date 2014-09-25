'use strict';

retailDashboardApp
  .directive('topBar', function() {
    return {
      restrict: 'E',
      templateUrl: 'components/navbar/navbar.html'
    };
  })
  .directive('navBar', function() {
    return {
      restrict: 'E',
      templateUrl: 'app/nav-bar.html'
    };
  })
  .directive('mainChart', function() {
    return {
      restrict: 'E',
      templateUrl: 'app/main-chart.html'
    };
  })
  .directive('sideBar', function() {
    return {
      restrict: 'E',
      templateUrl: 'app/side-bar.html'
    };
  })
  .directive('bottomChart', function() {
    return {
      restrict: 'E',
      templateUrl: 'app/bottom-chart.html'
    };
  });
