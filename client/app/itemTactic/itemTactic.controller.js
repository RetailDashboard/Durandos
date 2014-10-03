'use strict';

angular.module('itemTacticDataModule', ['ngResource'])
  .controller('ItemTacticCtrl', function ($scope) {
    $scope.data = $scope.displayCategories;
  });
 
