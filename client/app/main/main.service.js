'use strict';

angular.module('mainService', ['ngResource'])

  .factory('DataDepartments', function ($resource) {
    return $resource('/api/departments', {
      id: '@_id'
    },
    {
      getDepartmentData:{
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
  })
  .factory('DataItemTactics', function ($resource) {
    return $resource('/api/itemTactics', {
      id: '@_id'
    },
    {
      getItemTacticData:{
      method: 'GET',
      isArray: true
    }
    });
  })
  .directive('categoryData', function() {
    return {
      template:'<div ng-controller="CategoryCtrl"><div id="categoryEventsChart"></div><div id="categorySalesChart"></div><div id="categoryVolumeChart"></div><div id="categoryMarginChart"></div><div id="categoryProfitChart"></div><div id="categoryTransactionsChart"></div><div id="categoryImpactChart"></div></div>',
      restrict: 'A'
    };
  })
  .directive('itemData', function() {
    return {
      template:'<div ng-controller="ItemCtrl"><div id="itemEventsChart"></div><div id="itemSalesChart"></div><div id="itemVolumeChart"></div><div id="itemMarginChart"></div><div id="itemProfitChart"></div><div id="itemTransactionsChart"></div><div id="itemImpactChart"></div></div>',
      restrict: 'A'
    };
  })
  .directive('brandData', function() {
    return {
      template:'<div ng-controller="BrandCtrl"><div id="brandEventsChart"></div><div id="brandSalesChart"></div><div id="brandVolumeChart"></div><div id="brandMarginChart"></div></div>',
      restrict: 'A'
    };
  });
  