'use strict';

angular.module('retailDashboardApp', ['dataModule'])

.controller('BrandController', function($scope, Data){
  // var brands = Data.brandData();

  $scope.data = Data.brandData();
});