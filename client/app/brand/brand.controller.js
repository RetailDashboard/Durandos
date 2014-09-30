'use strict';

angular.module('brandDataModule', ['ngResource'])
  .controller('BrandCtrl', function ($scope, BrandDataFactory) {
    $scope.data = BrandDataFactory.getBrandData();
  })
  .factory('BrandDataFactory', function($resource) {
    return $resource('/api/brands',
      {
        id: '@_id'
      },
      {
        getBrandData: {
          method: 'GET',
          isArray: true
        }
      }
    );
  });
