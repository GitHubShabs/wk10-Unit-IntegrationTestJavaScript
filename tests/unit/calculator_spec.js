var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  });


// write unit test for calculator.add() - add 1+4=5
  it('it should add numbers', function(){
    calculator.previousTotal = 4;
    calculator.add(1);
    const actual = calculator.runningTotal;
    assert.equal(actual, 5)
  });

  // write unit test for calculator.subract() - minus 7-4=3
    it('it should subtract numbers', function(){
      calculator.previousTotal = 7;
      calculator.subtract(4);
      const actual = calculator.runningTotal;
      assert.equal(actual, 3)
    });

    // calculator.multiply() - multiply 3 by 5 and get 15
    it('it should multiply numbers', function(){
      calculator.previousTotal = 3;
      calculator.multiply(5);
      const actual = calculator.runningTotal;
      assert.equal(actual, 15)
    });

    // calculator.divide() - divide 21 by 7 and get 3
    it('it should divide numbers', function(){
      calculator.previousTotal = 21;
      calculator.divide(7);
      const actual = calculator.runningTotal;
      assert.equal(actual, 3)
    });

    // calculator.numberClick() - concatenate multiple number button clicks
    it('concatenate multiple number button clicks', function(){
      calculator.runningTotal = this.newTotal;
      calculator.numberClick(0);
      const actual = calculator.newTotal;
      assert.equal(actual, false)
    });

//     // calculator.operatorClick() - chain multiple operations together
    it('chain multiple operations together', function(){
      calculator.previousTotal = this.runningTotal;
      calculator.operatorClick(0);
      const actual = calculator.newTotal;
      assert.equal(actual, true)
    });
//
//     // calculator.clearClick() - clear the running total without affecting the calculation
    it('clear the running total without affecting the calculation', function(){
      calculator.clearClick(0);
      const actual = calculator.runningTotal;
      assert.equal(actual, 0)
    });
//
//
});
