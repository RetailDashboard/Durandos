'use strict';

describe('Controller: HighchartCtrl', function () {

  // load the controller's module
  beforeEach(module('retailDashboardApp'));

  var HighchartCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HighchartCtrl = $controller('HighchartCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
