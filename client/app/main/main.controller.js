'use strict';

angular.module('mainModule', ['mainService'])
  .controller('MainCtrl', function($scope, $state, DataItems, DataBrands, DataCategories, DataItemTactics) {
  $scope.all = 'All';
  $scope.selectedDepartment = null;
  $scope.displayCategories = DataCategories.getCategoryData(); 
  $scope.selectedCategory = null;
  $scope.displayBrands = DataBrands.getBrandData();
  $scope.selectedBrand = null;
  $scope.displayItems = DataItems.getItemData();
  $scope.selectedItem = null;
  $scope.displayTactics = DataItemTactics.getItemTacticData();
  $scope.selectedTactic = null;

  $scope.departments = [
    {name: 'Dry Goods'},
    {name:'Frozen Food'},
    {name:'Electronics'}
  ];
  
  $scope.selection = function(selectedItem) {
    if($scope.selectedDepartment === null){
      $scope.selectedCategory = null;
    }
    if($scope.selectedCategory === null){
      $scope.selectedBrand = null;
    }
    if($scope.selectedBrand === null){
      $scope.selectedItem = null;
    }
    if($scope.selectedItem === null){
      $scope.selectedTactic = null;
    }
  };
  
  $scope.changeDepartment = function() {
    $state.go('main.category');
  };

  $scope.changeCategory = function() {
    $state.go('main.brand');
  };

  $scope.changeBrand = function() {
    $state.go('main.item');
  };

  $scope.changeItem = function() {
    $state.go('main.itemTactic');
  };

})

.filter('brandFilter', function(){
  return function(items, selectedCategory){
    if(selectedCategory !== null){
      var results = items.filter(function(val){
        if(val.Category === selectedCategory.id){
        return val;
        }
      });
      return results;
    }
  };
})

.filter('itemFilter', function(){
  return function(items, selectedBrand){
    if(selectedBrand !== null){
      var results = items.filter(function(val){
        if(val.brand === selectedBrand.id){
        return val;
        }
      });
      return results;
    }
  };
})

.filter('tacticFilter', function(){
  return function(items, selectedItem){
    if(selectedItem !== null){
      var results = items.filter(function(val){
        console.log(selectedItem);
        console.log(val);
        if(val.item === selectedItem.item){
        return val;
        }
      });
      return results;
    }
  };
});





    // $scope.awesomeThings = [];

    // $http.get('/api/things').success(function(awesomeThings) {
    //   $scope.awesomeThings = awesomeThings;
    // });

    // $scope.addThing = function() {
    //   if($scope.newThing === '') {
    //     return;
    //   }
    //   $http.post('/api/things', { name: $scope.newThing });
    //   $scope.newThing = '';
    // };

    // $scope.deleteThing = function(thing) {
    //   $http.delete('/api/things/' + thing._id);
    // };
//
