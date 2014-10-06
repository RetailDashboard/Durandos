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
  });
  