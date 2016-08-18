var chai = require('chai');
var expect = chai.expect;
var assert = chai.assert;
var noteApplication = require('../index');


describe('Test to see a new instance is properly created', function() {

  it('A new instance must be an object type ', function() {
    var myNote = new noteApplication("Olawale");
		expect((myNote instanceof Object)).to.equal(true);
  });



});
