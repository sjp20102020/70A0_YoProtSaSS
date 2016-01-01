var sjpAppFull100 = angular.module('sjpAppFull100', ['sjpAppFullServices100','sjpAppFullFactory100', 'sjpAppFullFFactory100', 'sjpAppFullController100']);
var sjpAppFullServices100 = angular.module('sjpAppFullServices100', []);
var sjpAppFullFactory100 = angular.module('sjpAppFullFactory100', []);
var sjpAppFullFFactory100 = angular.module('sjpAppFullFFactory100', []);
var sjpAppFullController100 =  angular.module('sjpAppFullController100', []);


sjpAppFullServices100.service('MathService', function () {
  this.add = function (a, b) {
    return a + b
  };

  this.subtract = function (a, b) {
    return a - b
  };

  this.multiply = function (a, b) {
    return a * b
  };

  this.divide = function (a, b) {
    return a / b
  };
});

sjpAppFullServices100.service('CalculatorService', function (MathService) {

  this.square = function (a) {
    return MathService.multiply(a, a);
  };
  this.cube = function (a) {
    return MathService.multiply(a, MathService.multiply(a, a));
  };

});

sjpAppFullFactory100.factory('fMathService', function () {
  var factory = {};
  factory.add = function (a, b) {
    return a + b
  };

  factory.subtract = function (a, b) {
    return a - b
  };

  factory.multiply = function (a, b) {
    return a * b
  };

  factory.divide = function (a, b) {
    return a / b
  };
  return factory;
});

sjpAppFullFactory100.factory('fCalculatorService', function (fMathService) {
  var factory = {};
  factory.square = function (a) {
    return fMathService.multiply(a, a);
  };
  factory.cube = function (a) {
    return fMathService.multiply(a, fMathService.multiply(a, a));
  };
  return factory;

});

sjpAppFullFFactory100.factory('ffMathService', function () {
  return {
    add: function (a, b) {
      return a + b
    },

    subtract: function (a, b) {
      return a - b
    },

    multiply: function (a, b) {
      return a * b
    },

    divide: function (a, b) {
      return a / b
    }
  };
});

sjpAppFullFFactory100.factory('ffCalculatorService', function (ffMathService) {
  return {
    square: function (a) {
      return ffMathService.multiply(a, a);
    },
    cube: function (a) {
      return ffMathService.multiply(a, ffMathService.multiply(a, a));
    }
  };

});


sjpAppFullController100.controller('fCalculatorController', function ($scope, fCalculatorService) {

  $scope.doSquare = function () {
    $scope.answer = fCalculatorService.square($scope.number);
  }

  $scope.doCube = function () {
    $scope.answer = fCalculatorService.cube($scope.number);
  }

  $scope.sjpName = 'siddy';
});

sjpAppFullController100.controller('ffCalculatorController', function ($scope, ffCalculatorService) {

  $scope.doSquare = function () {
    $scope.answer = ffCalculatorService.square($scope.number);
  }

  $scope.doCube = function () {
    $scope.answer = ffCalculatorService.cube($scope.number);
  }

  $scope.sjpName = 'siddy';
});


sjpAppFullController100.controller('CalculatorController', function ($scope, CalculatorService) {

  $scope.doSquare = function () {
    $scope.answer = CalculatorService.square($scope.number);
  }

  $scope.doCube = function () {
    $scope.answer = CalculatorService.cube($scope.number);
  }

  $scope.sjpName = 'siddy';
});
