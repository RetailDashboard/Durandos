'use strict';

angular.module('retailDashboardApp', ['dataModule'])

.controller('BrandController', function($scope, DataBrands){
  $scope.data = DataBrands.getBrandData();
});
