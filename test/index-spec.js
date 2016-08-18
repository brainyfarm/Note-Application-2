var chai = require('chai');
var expect = chai.expect;
var assert = chai.assert;
var noteApplication = require('../index');


describe("Test cases for not application ", function(){
	it("Test to be sure note", function(){

		assert.equal(noteApplication("Olawale").author, "Olawale")
	})
})

