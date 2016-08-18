var chai = require('chai');
var expect = chai.expect;
var assert = chai.assert;
var should = chai.should;
var noteApplication = require('../index');

// Test set up
var myNote = new noteApplication("Olawale");

describe('Class structure test', function(){
	it('typeof noteApplication must be a function', function(){
		assert.typeOf(noteApplication, 'function')
	})

	it('typeof new noteApplication("Olawale") must be an object', function(){
		assert.typeOf( new noteApplication("Olawale"), 'object')
	})
})


describe('Instantiation tests', function() {
  
    it('Author\'s name must be supplied', function() {
		assert.equal(noteApplication(), undefined);
  });

    it('Author\'s name cannot be an empty string', function() {
		assert.equal(noteApplication(''), undefined);
  });
	
	
	it('new noteApplication("Olawale") must return an object', function() {
		expect(( new noteApplication("Olawale") instanceof Object)).to.equal(true);
  });

	it('myNote.noteAuthor should be "Olawale"', function() {
		assert.equal(myNote.noteAuthor, "Olawale");
   });

	it('After Instantiation, note array must be empty', function() {
		expect(myNote.notes).to.have.length(0);
   });	

});


describe('Object methods usage test', function() {
  	it("myNote.create('New note') should make note with content \'New note\' ", function(){
  		myNote.create("This is a note");
  		assert.equal(myNote.notes[0], "This is a note");
  	})

  	it("myNote.delete(0) should delete the first note", function(){
  		myNote.create("This is a note");
  		myNote.delete(0);
  		expect((myNote.notes.length)).to.equal(0);
  	})
});



describe('Make sure author us set for new instance before creation', function() {
  it('Author name must not be an empty string', function() {
  		var badInstance = noteApplication('');
		assert.equal(badInstance, undefined);
  });
});



