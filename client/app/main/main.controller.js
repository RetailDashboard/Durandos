'use strict';

angular.module('mainModule', ['mainService'])
  .controller('MainCtrl', function($scope, $state, DataDepartments, DataCategories, DataBrands, DataItems, DataItemTactics) {
  $scope.all = 'All';
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
  $scope.displayDepartments = DataDepartments.getDepartmentData();
  $scope.displayCategories = DataCategories.getCategoryData(); 
  $scope.displayBrands = DataBrands.getBrandData();
  $scope.displayItems = DataItems.getItemData();
  $scope.displayTactics = DataItemTactics.getItemTacticData();

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
    if(selection === null || selection.item !== 'Dry Goods*'){
      $state.go('main.department');
    //if the model ever evaluates to null this must be called to ensure
    //all following dropdowns are disabled after it.  
      $scope.disableDropdowns();
    }else{
      $scope.disableCategory = false;
      $state.go('main.category',{
        departmentName : eliminateSpaces(selection.item)
      });  
    }
  };

  $scope.changeCategory = function(arg) {
    //refresh data from server
    DataBrands.getBrandData().$promise.then(function(responseData) {
      $scope.displayBrands = responseData;
      if(arg){
        $scope.selectedCategory = arg;
      }
      var selection = $scope.selectedCategory;
      //something was selected in the dropdown
      if(selection){
        //finds out if there is anything in the neighboring dropdown menu
        var filteredBrands = $scope.displayBrands.filter(function(val) {
          return val.Category === selection.id;
        });
        //no brands are in this category, so disable neighboring dropdowns
        if(filteredBrands.length === 0){
          $scope.disableBrand = true;
          $scope.selectedBrand = null;
          $scope.disableDropdowns();
        //otherwise, update brands that belong to category selection
        }else{
          $scope.displayBrands = filteredBrands;
          $scope.disableBrand = false;
          $scope.selectedBrand = null;
          $scope.disableDropdowns();
          $state.go('main.brand',{
            departmentName: eliminateSpaces($scope.selectedDepartment.item),
            categoryName: eliminateSpaces(selection.item)
            });
        }
      //nothing selected, change state and check dropdowns 
      }else{
        $state.go('main.category',{
          departmentName: eliminateSpaces($scope.selectedDepartment.item)
        });
        $scope.disableDropdowns();
      }
    });
  };
  //same flow as changeCategory
  $scope.changeBrand = function(arg) {
    DataItems.getItemData().$promise.then(function(responseData) {
      $scope.displayItems = responseData;
      if(arg){
        $scope.selectedBrand = arg;
      }
      var selection = $scope.selectedBrand;
      if(selection){
        var filteredItems = $scope.displayItems.filter(function(val) {
          return val.brand === selection.id;
        });
        if(filteredItems.length === 0){
          $scope.disableItem = true;
          $scope.selectedItem = null;
          $scope.disableDropdowns();
        }else{
          $scope.displayItems = filteredItems;
          $scope.disableItem = false;
          $scope.selectedItem = null;
          $scope.disableDropdowns();
          $state.go('main.item',{
            departmentName: eliminateSpaces($scope.selectedDepartment.item),
            categoryName: eliminateSpaces($scope.selectedCategory.item),
            brandName: eliminateSpaces(selection.item)
          });
        }
      }else{ 
        $state.go('main.brand',{
          departmentName: eliminateSpaces($scope.selectedDepartment.item),
          categoryName: eliminateSpaces($scope.selectedCategory.item)
        });
        $scope.disableDropdowns();
      }
    });
  };

  $scope.changeItem = function(arg) {
    DataItemTactics.getItemTacticData().$promise.then(function(responseData) {
      $scope.displayTactics = responseData;
      if(arg){
        $scope.selectedItem = arg;
      }
      var selection = $scope.selectedItem;
      if(selection){  
        var filteredTactics = $scope.displayTactics.filter(function(val) {
          console.log(val);
          console.log(selection);
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
          $state.go('main.itemTactic',{
            departmentName: eliminateSpaces($scope.selectedDepartment.item),
            categoryName: eliminateSpaces($scope.selectedCategory.item),
            brandName: eliminateSpaces($scope.selectedBrand.item),
            itemName: eliminateSpaces(selection.item)
          });
        }
      }else{
        $state.go('main.item',{
          departmentName: eliminateSpaces($scope.selectedDepartment.item),
          categoryName: eliminateSpaces($scope.selectedCategory.item),
          brandName: eliminateSpaces($scope.selectedBrand.item)
        });
        $scope.disableDropdowns();  
      }
    });
  };

  $scope.changeTactic = function() {
    //console.log('tactic changed');
  };
  
//initialization function to set state to path upon reset.
  $scope.init = function(){
    var location = window.location.hash;
    if(location !== '#/main/department'){
      var routeSelections = location.split('/').slice(3).map(function(val){
        return val.split('_').join(' ');
      });
      if(routeSelections.length >= 1){
        $scope.displayDepartments.$promise.then(function(data){
          data.forEach(function(val){
            if(val.item === routeSelections[0]){
              $scope.selectedDepartment = val;
              $scope.changeDepartment();  
            }
          });
          if(routeSelections.length >= 2){
            $scope.displayCategories.$promise.then(function(data){
              data.forEach(function(val){
                if(val.item === routeSelections[1]){
                  $scope.selectedCategory = val;
                }
              });
              $scope.changeCategory($scope.selectedCategory);  
              if(routeSelections.length >= 3){
                $scope.displayBrands.$promise.then(function(data){
                  data.forEach(function(val){
                    if(val.item === routeSelections[2]){
                      $scope.selectedBrand =  val;
                    }
                  });
                  $scope.changeBrand($scope.selectedBrand);
                  if(routeSelections.length >= 4){
                    $scope.displayItems.$promise.then(function(data){
                      data.forEach(function(val){
                        if(val.item === routeSelections[3]){
                          $scope.selectedItem = val;
                        }
                      });
                      $scope.changeItem($scope.selectedItem);
                    });
                  }
                });
              }
            });
          }
        });
      }
    }
  };
  $scope.init();
})
//filters written to handle each data selection
.filter('brandFilter', function() {
  return function(items, selectedCategory) {
    if(selectedCategory){ 
      return items.filter(function(val) {
        return val.Category === selectedCategory.id;
      });
    }
  };
})

.filter('itemFilter', function() {
  return function(items, selectedBrand) {
    if(selectedBrand){
      return items.filter(function(val) {
        return val.brand === selectedBrand.id;
      });
    }
  };
})

.filter('tacticFilter', function() {
  return function(items, selectedItem) {
    if(selectedItem){
      return items.filter(function(val) {
        return val.item === selectedItem.item;
      });
    }
  };
});

var eliminateSpaces = function(string) {
  return string.split(' ').join('_');
};

