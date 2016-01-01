/**
 * Created by simpson on 26/12/2015.
 */

describe('controller: fCalculatorController', function () {
 // beforeEach(module('sjpAppFull100'));
  beforeEach(module('sjpAppFullController100'));
  beforeEach(module('sjpAppFullFactory100'));

  var ctrl, scope;
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ctrl = $controller('fCalculatorController', {
      $scope: scope
    });

  }));


  it('should assigned siddy to sjpName ', function () {
    expect(scope.sjpName).toBe('siddy');


  });


  it('should calculate 9 when doSquare is called with 3 for scope.number', function () {
    scope.number = 3;
    scope.doSquare();
    expect(scope.answer).toBe(9);
  });


  it('should calculate 0 when doSquare is called with 0 for scope.number', function () {
    scope.number = 0;
    scope.doSquare();
    expect(scope.answer).toBe(0);
  });

  it('should calculate 27 when doCube is called with 3 for scope.number', function () {
    scope.number = 3;
    scope.doCube();
    expect(scope.answer).toBe(27);
  });

  it('should calculate -27 when doCube is called with -3 for scope.number', function () {
    scope.number = -3;
    scope.doCube();
    expect(scope.answer).toBe(-27);
  });



});


