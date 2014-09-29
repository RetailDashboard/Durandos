'use strict';

angular.module('categoryDataModule', ['ngResource'])
  .controller('CategoryCtrl', function ($scope, CategoryDataFactory) {
    $scope.data = CategoryDataFactory.getCategoryData();
  })
  .factory('CategoryDataFactory', function ($resource) {
    return $resource('/api/categories',
      {
        id: '@_id'
      },
      {
        getCategoryData: {
          method: 'GET',
          isArray: true
        }
      }
    );
  });
