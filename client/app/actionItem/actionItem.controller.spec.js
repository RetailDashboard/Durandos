'use strict';

describe('Controller: ActionitemCtrl', function () {

  // load the controller's module
  beforeEach(module('retailDashboardApp'));

  var ActionitemCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ActionitemCtrl = $controller('ActionitemCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
