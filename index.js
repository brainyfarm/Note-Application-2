

/**
* Class NoteApplication 
*/
var  NoteApplication = function( author ) {
		
		/**
		 * Set author's name and empty notes list 
		 */
		if ( typeof author === "string" && author.length > 0 ){
		 this.noteAuthor = author;
		 this.notes = [];
		}
		else{
			//console.log( "Author must be a valid string longer than 1" );
		}
	
	
	/**
	 * Method create
	 * Creates a new note
	 * @param note_content
	 */
	this.create = function ( note_content ) {
	 	// Check to see note contain is a string and not empty
	 	if( note_content && typeof note_content === "string" && note_content.length > 0 )
	 		this.notes.push( note_content );
	 	else
	 		console.log( "Note content must be a string with length greater than 1" );
	 };
	 
	 
	 /**
	  * Method listNotes 
	  * Prints out individual note in the notes list
	  */
	 this.listNotes = function() {
	 	// Check to see if there are notes in list
	 	if( this.notes.length > 0 ){
	 		for( let i = 0; i < this.notes.length; i++ ){
	 		
	 			let noteContent = this.notes[i];
	 			let noteId = i;
	 		
	 			console.log( "Note ID: " + noteId + "\n" + noteContent + "\n" );
		 		console.log( "By Author " + this.noteAuthor + "\n" );
	 			}
			 }
		// If no notes exist 
		else{
			 	console.log( "You have no notes saved" );
			 }
	 	};
	
	  /**
	  * Method get  
	  * @param note_id 
	  * @return content of note 
	  */
	 this.get = function( note_id ) {
	 	// Check to see note_id is a number and that the note exists
	 	if( typeof note_id === "number" && this.notes[ note_id ] )
	 		return this.notes[ note_id ];
	 		else{
	 			console.log( "Please supply a valid note id" );
	 		}
	 };
	
	
}; 
// Export this
module.exports = NoteApplication