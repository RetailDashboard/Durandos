'use strict';

angular.module('retailDashboardApp', ['dataModule'])

.controller('ItemController', function($scope, DataItems){
  $scope.data = DataItems.getItemData();
});
