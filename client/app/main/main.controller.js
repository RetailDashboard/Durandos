'use strict';

angular.module('mainModule', ['mainService'])
  .controller('MainCtrl', function($scope, $state, DataItems, DataBrands, DataCategories, DataItemTactics) {
  $scope.all = 'All';
  $scope.state = $state;
  //ng-model is assigned to null but changes upon selection this model is used to filter the data
  $scope.selectedDepartment = null;
  $scope.selectedCategory = null;
  $scope.selectedBrand = null;
  $scope.selectedItem = null;
  $scope.selectedTactic = null;
  //this set interacts with ng-disable to deactivate dropdowns that have no data attached.
  $scope.disableCategory = true;
  $scope.disableBrand = true;
  $scope.disableItem = true;
  $scope.disableTactic = true;

  //data fetched from DB to populate dropdowns
  $scope.displayCategories = DataCategories.getCategoryData(); 
  $scope.displayBrands = DataBrands.getBrandData();
  $scope.displayItems = DataItems.getItemData();
  $scope.displayTactics = DataItemTactics.getItemTacticData();
  //dummy department data
  $scope.departments = [
    {name: 'Dry Goods'},
    {name:'Frozen Food'},
    {name:'Electronics'}
  ];
  //disables dropdowns if preceding dropdown is not active
  $scope.disableDropdowns = function() {
    if($scope.selectedDepartment === null){
      $scope.disableCategory = true;
      $scope.selectedCategory = null;
    }
    if($scope.selectedCategory === null){
      $scope.disableBrand = true;
      $scope.selectedBrand = null;
    }
    if($scope.selectedBrand === null){
      $scope.disableItem = true;
      $scope.selectedItem = null;
    }
    if($scope.selectedItem === null){
      $scope.disableTactic = true;
      $scope.selectedTactic = null;
    }
  };
  //changes state in the nested state below main based upon selection
  $scope.changeDepartment = function() {
    //model of what was selected in the dropdown
    var selection = $scope.selectedDepartment;
    if(selection === null || selection.name !== 'Dry Goods'){
      $state.go('main.department');
    //if the model ever evaluates to null this must be called to ensure
    //all following dropdowns are disabled after it.  
      $scope.disableDropdowns();
    }else{
      $scope.disableCategory = false;
      $state.go('main.category');  
    }
  };

  $scope.changeCategory = function() {
    var selection = $scope.selectedCategory;
    if(selection){
      //similar to the brand filter, but finds out if there is anything
      //in the neighboring dropdown menu, if not, it disables it.
      var filteredBrands = $scope.displayBrands.filter(function(val){
        if(val.Category === selection.id){
        return val;
        }
      });
      //no brands are in this category
      if(filteredBrands.length === 0){
        //???????????????????perhaps update $scope.displayBrands in this if/else?
        $scope.disableBrand = true;
        $scope.selectedBrand = null;
        $scope.disableDropdowns();
      }else{
        $scope.disableBrand = false;
        $scope.selectedBrand = null;
        $scope.disableDropdowns();
        $state.go('main.brand');
      }
    //nothing selected, change state and check dropdowns 
    }else{
      $state.go('main.brand');
      $scope.disableDropdowns();
    }
  };
  //same flow as changeCategory
  $scope.changeBrand = function() {
    var selection = $scope.selectedBrand;
    if(selection){
      var filteredItems = $scope.displayItems.filter(function(val){
        if(val.brand === selection.id){
        return val;
        }
      });
      if(filteredItems.length === 0){
        $scope.disableItem = true;
        $scope.selectedItem = null;
        $scope.disableDropdowns();
      }else{
        $scope.disableItem = false;
        $scope.selectedItem = null;
        $scope.disableDropdowns();
        $state.go('main.item');
      }
    }else{ 
      $state.go('main.item');
      $scope.disableDropdowns();
    }
  };

  $scope.changeItem = function() {
    var selection = $scope.selectedItem;
    if(selection){  
      var filteredTactics = $scope.displayTactics.filter(function(val){
        if(val.item === selection.item){
        return val;
        }
      });
      if(filteredTactics.length === 0){
        $scope.disableTactic = true;
        $scope.selectedTactic = null;
        $scope.disableDropdowns();
      }else{
        $scope.disableTactic = false;
        $scope.selectedTactic = null;
        $scope.disableDropdowns();
        $state.go('main.itemTactic');
      }
    }else{
      $state.go('main.itemTactic');
      $scope.disableDropdowns();  
    }
  };

  $scope.changeTactic = function() {
    //console.log('tactic changed');
  };

})
//filters written to handle each data selection
.filter('brandFilter', function(){
  return function(items, selectedCategory){
    if(selectedCategory){
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
    if(selectedBrand){
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
    if(selectedItem){
      var results = items.filter(function(val){
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
