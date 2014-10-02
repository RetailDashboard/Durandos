'use strict';

angular.module('itemDataModule', ['ngResource'])
  .controller('ItemCtrl', function ($scope) {
    $scope.data = $scope.displayItems;
  });

