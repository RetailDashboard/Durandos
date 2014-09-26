'use strict';

angular.module('retailDashboardApp', ['dataModule'])

.controller('CategoryController', function($scope, DataCategories){
  $scope.data = DataCategories.getCategoryData();
});
