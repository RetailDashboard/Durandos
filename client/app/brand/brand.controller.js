'use strict';

angular.module('brandDataModule', ['ngResource'])
  .controller('BrandCtrl', function ($scope) {
    $scope.data = $scope.displayBrands;
  });
