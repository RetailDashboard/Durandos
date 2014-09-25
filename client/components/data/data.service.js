'use strict';
//data will be hard coded for now, then retrieved via $resource
angular.module('dataFactory', ['ngResource'])
  .factory('DataBrands', function ($resource) {
    return $resource('/api/brands', {
      id: '@_id'
    },
    {
      getBrandData:{
      method: 'GET',
      isArray: true
    }
    });
  })
  .factory('DataCategories', function ($resource) {
    return $resource('/api/categories', {
      id: '@_id'
    },
    {
      getCategoryData:{
      method: 'GET',
      isArray: true
    }
    });
  })
  .factory('DataItems', function ($resource) {
    return $resource('/api/items', {
      id: '@_id'
    },
    {
      getItemData:{
      method: 'GET',
      isArray: true
    }
    });
});
      // catergoryLineChart:{},
      // DiscountLevelData:{},
      // heatmapData:{},
      // itemData:{},
      // itemTacticData:{},
      // tacticDetailData:{},
      // twoByTwoData:{}



angular.module('dataModule', ['dataFactory']);
