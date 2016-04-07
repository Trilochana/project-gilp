var expect = require('expect');
var circle = require('../app/scripts/area');


describe('Lame tests', function() {
  it('should evaluate true to true', function() {
    expect(true).toBe(true);
  });

  it('should add 2 and 3 and return 5', function() {
    expect(2+3).toEqual(5);
  });
})

describe('Area tests', function() {
  it('should say area exists', function() {
    expect(circle).toExist();
  });

  it('should have a property called area', function() {
    expect(circle.area).toExist();
  });

  it('should return 4 when passed 2', function() {
    expect(circle.area(2)).toEqual(12.566370614359172);
  })

  it('should return 625 when passed 25', function() {
    expect(circle.area(25)).toEqual(1963.4954084936207);
  })

  it('should have a property called perimeter', function() {
    expect(circle.perimeter).toExist();
  });

  it('should return the correct value when passed 2', function() {
    expect(circle.perimeter(2)).toEqual(12.566370614359172);
  })

  it('should return the correct value when passed 25', function() {
    expect(circle.perimeter(25)).toEqual(157.07963267948966);
  });


  it('should have a property called volume', function() {
    expect(circle.volume).toExist();
  })
})
