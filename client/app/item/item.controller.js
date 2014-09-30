'use strict';

angular.module('itemDataModule', ['ngResource'])
  .controller('ItemCtrl', function ($scope, ItemDataFactory) {
    $scope.data = ItemDataFactory.getItemData();
  })
  .factory('ItemDataFactory', function ($resource) {
    return $resource('/api/items',
      {
        id: '@_id'
      },
      {
        getItemData: {
          method: 'GET',
          isArray: true
        }
      }
    );
  });
