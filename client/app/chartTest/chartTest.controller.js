'use strict';

angular.module('retailDashboardApp')
  .factory('CategoryDataFactory', function($resource) {
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
  })
  .controller('CharttestCtrl', function ($scope, CategoryDataFactory) {

    CategoryDataFactory.getCategoryData().$promise.then(function(data){
      $scope.showGraph(data);
    })
    $scope.data = CategoryDataFactory.getCategoryData();

    
    $scope.chart = null;
    $scope.showGraph = function(data) {
      console.log(data);
        $scope.chart = c3.generate({
          bindto: '#chart',
        data: {
          json: data,
            keys: {
               x: 'item', // it's possible to specify 'x' when category axis
              value: ['margin'],
            },
            types: {
              margin: 'bar'
            },
            labels: true,
        },
        axis: {
          rotated: true,
          x: {
            type: 'category'
          }
        },
        grid: {
          y: {
            lines: [{value:120}]
          }
        }
        });
    };
  })
  ;
