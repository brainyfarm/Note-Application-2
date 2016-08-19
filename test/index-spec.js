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

  	it("MyNote get must return a note content", function(){
  		myNote.notes = [];
  		myNote.create("Cool note");
  		var getResult = myNote.get(0);
  		assert.equal(getResult, "Cool note");
  	})


	it("MyNote edit method must replace content of a note", function(){
  		myNote.notes = [];
  		myNote.create("This is a note");
  		myNote.edit(0, "New note content");
  		assert.equal(myNote.notes[0], "New note content");
  	})


  	it("MyNote delete method should delete a note", function(){
  		myNote.notes = [];
  		myNote.create("This is a note");
  		myNote.delete(0)
  		assert.equal(myNote.notes[0], undefined);
  	})

  	it("MyNote search('No where to be found') method should return 'no result'", function(){
  		myNote.notes = [];
  		myNote.create("This is a note");
  		var thisSearch = myNote.search("No where to be found")
  		assert.equal(thisSearch, 'no result');
  	})
 
  	

	it("MyNote listNotes method should return 'no notes saved' ", function(){
  		myNote.notes = [];
  		var result = myNote.listNotes();
  		assert.equal(result, "no notes saved");
  	})
  	

});



describe('Make sure author us set for new instance before creation', function() {
  it('Author name must not be an empty string', function() {
  		var badInstance = noteApplication('');
		assert.equal(badInstance, undefined);
  });
});



