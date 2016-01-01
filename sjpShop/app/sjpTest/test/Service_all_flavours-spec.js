describe('testing some service', function (){
  var myService,
    fooMock;

  beforeEach(function (){
    module('myApp');
    // load our module
    // BUT also provide a mock foo!
  /*  module('myApp', function($provide) {

      // Jasmine's createSpyObj will create an object
      // that has spies on the specified array of properties.
      // it's equivalent to creating an object, then adding a
      // spy to a property, or simply spying on an existing property.
     fooMock = jasmine.createSpyObj('foo', ['bar']);

      // provide the mock!
      $provide.value('foo', fooMock);
    });*/

    // now we inject the service we're testing.
    inject(function(_myService_) {
      myService = _myService_;
    });
  });

  xit('should call foo.bar on myService.test passing through parameters.', function (){
    // make the call.
    myService.test('WEE!');
    console.log("hii siddy");
    // check our spy to see if bar was callled properly.
    expect(fooMock.bar).toHaveBeenCalledWith('WEE!');
  });

  it("should output 'in bar' in the console when invoked", function () {
    console.log(myService.test('WEE!'));
    expect(myService.test('sjp')).toBe("sjp");

  });
});
