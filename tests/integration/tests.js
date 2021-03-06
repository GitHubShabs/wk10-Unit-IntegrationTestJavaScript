var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

describe('calculator functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  // write integration tests here in the form of "it should do something..."
  it('should have working number buttons', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2')
  })

    // Do the number buttons update the display of the running total?
    it('should have number buttons that update running total display', function(){
      running_total = element(by.css('#running_total'))
      element(by.css('#number2')).click();
      expect(running_total.getAttribute('value')).to.eventually.equal('2')
    })

    // Do the arithmetical operations update the display with the result of the operation?

    // Can multiple operations be chained together?

    // Is the output as expected for a range of numbers (for example, positive, negative, decimals and very large numbers)?

    // If a number is divided by zero, is the output 'Not a number'? (You will need to modify the Calculator model to meet this requirement).

});
