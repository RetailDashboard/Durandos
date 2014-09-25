'use strict';

angular.module('retailDashboardApp', ['dataModule'])

.controller('BrandController', function($scope, Data){
  $scope.data = Data.brandData();
});