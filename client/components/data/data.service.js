'use strict';
//data will be hard coded for now, then retrieved via $resource
angular.module('data.factory', ['ngResource'])
  .factory('Data', function ($resource) {

        return $resource('/api/brands', {
            id: '@_id'
        },
        {
        brandData:{
          method: 'GET',
        }
      // categoryData:{},
      // catergoryLineChart:{},
      // DiscountLevelData:{},
      // heatmapData:{},
      // itemData:{},
      // itemTacticData:{},
      // tacticDetailData:{},
      // twoByTwoData:{}
    });
  });



angular.module('dataModule', ['data.factory']);
