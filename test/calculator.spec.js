var expect = require('expect');
var calculator = require('../app/scripts/calculator');

describe('Calculator tests', function() {
  it('should say calculator exists', function() {
    expect(calculator).toExist();
    expect(calculator).toNotBe(undefined);
  });

  it('should add two numbers', function() {
    expect(calculator.add).toExist();
    expect(calculator.add).toNotBe(undefined);
    expect(calculator.add(2, 5)).toEqual(7);
  });


  it('should call add medhod with the right parameters', function() {
    var spy1 = expect.spyOn(calculator, 'add');
    calculator.add(2, 5);

    var spy2 = expect.spyOn(calculator, 'add');
    calculator.add(25, 25);

    expect(spy1).toHaveBeenCalledWith(2, 5);
    expect(spy2).toHaveBeenCalledWith(25, 25);

  })
})
