'use strict';

angular.module('categoryDataModule', ['ngResource'])
  .controller('CategoryCtrl', function ($scope) {
    $scope.data = $scope.displayCategories;
  });
