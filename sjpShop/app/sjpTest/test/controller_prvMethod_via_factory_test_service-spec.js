describe("MathService", function () {
  var mathService;

  /*beforeEach(function () {
   module('sjpAppFullServices100')
   inject(function (MathService) {
   mathService = MathService;
   });
   });*/

  beforeEach(module('sjpAppFullServices100'));
  beforeEach(inject(function (MathService) {
    mathService = MathService;
  }));


  it("should add method defined", function () {
    expect(mathService.add()).toBeDefined();
  });

  it("should return 15 when 5 and 10 passed as parameters to add", function () {
    expect(mathService.add(5, 10)).toBe(15);
  });


});


describe("CalculatorService", function () {
  var mathService, calculatorService;
  beforeEach(module('sjpAppFullServices100'));
  beforeEach(inject(function ( CalculatorService) {
    calculatorService = CalculatorService;
  }));


  it("should define square method", function () {
    expect(calculatorService.square()).toBeDefined();

  });

  it("should return 25 as the square of 5 ", function () {
    expect(calculatorService.square(5)).toBe(25);
  });



});
