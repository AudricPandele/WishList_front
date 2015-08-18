'use strict';

describe('Controller: CreatewishlistCtrl', function () {

  // load the controller's module
  beforeEach(module('wishListApp'));

  var CreatewishlistCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CreatewishlistCtrl = $controller('CreatewishlistCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CreatewishlistCtrl.awesomeThings.length).toBe(3);
  });
});
