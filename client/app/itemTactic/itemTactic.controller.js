'use strict';

angular.module('itemTacticDataModule', ['ngResource'])
  .controller('ItemTacticCtrl', function ($scope, ItemTacticDataFactory) {
    $scope.data = ItemTacticDataFactory.getItemTacticData();
  })
  .factory('ItemTacticDataFactory', function ($resource) {
    return $resource('/api/itemtactics',
      {
        id: '@_id'
      },
      {
        getItemTacticData: {
          method: 'GET',
          isArray: true
        }
      }
    );
  });
