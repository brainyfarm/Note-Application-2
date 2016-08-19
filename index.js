

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
	 		return "Note content must be a string with length greater than 1";
	 };
	 
	 
	 /**
	  * Method get  
	  * @param note_id 
	  * @return content of note 
	  */
	 this.get = function ( note_id ) {
	 	// Check to see note_id is a number and that the note exists
	 	if( typeof note_id === "number" && this.notes[ note_id ] )
	 		return this.notes[ note_id ];
	 		else{
	 			return "supply note id";
	 		}
	 }


	 /**
	  * Method listNotes 
	  * Prints out individual note in the notes list
	  */
	 this.listNotes = function() {

	 	var allNotes = ""
	 	// Check to see if there are notes in list
	 	if( this.notes.length > 0 ){
	 		for( let i = 0; i < this.notes.length; i++ ){
	 		
	 			let noteContent = this.notes[i];
	 			let noteId = i;
	 		
	 			allNotes +=  "Note ID: " + noteId + "\n" + noteContent + "\n" +
		 		"By Author " + this.noteAuthor + "\n" ;
	 			}

	 			return allNotes;
			 }
		// If no notes exist 
		else{
			 	return  "no notes saved" ;
			 }
	 	};

	 	/**
	  * Method delete
	  * deletes note with the id note_id
	  * @param note_id
	  */
	  
	  this.delete = function ( note_id ) {	 	
	  // Check to see note_id is a number and that the note exists
	 	if( typeof note_id === "number" && this.notes[ note_id ] ){
	  		this.notes.splice( note_id, 1 );
	 	}
	 	else{
	 		return "Please supply a valid note id";
	 	}
	  }
	
	 /**
	   * Method edit
	   * replaces the content of note item
	   * @param note_id new_content
	   */
	   this.edit = function( note_id, new_content ) {
	   		// Check note_id is a number, the note exists and the new_content is a string
	   		if( typeof note_id === "number" && this.notes[ note_id ] && typeof new_content === "string" ){
	   			this.notes[ note_id ] = new_content;
	   		}
	   		else{
	   			return "Please supply a valid note id as well as new content";
	   		}
	   }
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

	 /**
	  * Method search 
	  * @param search_text
	  * @return all note containing the string search_text
	  */
	 this.search = function( search_text ) {
	 	// Check to be sure search_text is a string and not empty
	 	if( typeof search_text === "string" && search_text.length > 0 ){
	 		// Keep track of the number of results found
	 		var numberOfResults = 0;
	 		var searchResults = '';

	 		
	 	searchResults += "Showing results for search " + "\'" + search_text + "\'";
	 
	 	for( var i = 0; i < this.notes.length; i++ ) {
    		var wordsInNoteArray = this.notes[i].toLowerCase().split(" ");
    		
    		// If search_text is found in the current note
    		if( wordsInNoteArray.indexOf( search_text.toLowerCase() ) > -1 ) {
    			numberOfResults += 1;
    			
       			searchResults += "Note ID: " + i + "\n" + this.notes[i] + "\n";
	 			searchResults +=  "By Author " + this.noteAuthor + "\n";
       			
					}					
	 			}
	 		// Check to see if no results were found	
	 		return numberOfResults === 0 ? "no result": searchResults;
	 	}
	 	// If search term is invalid
	 	else{
	 		console.log( "Please supply a valid search term" );
	 	}
	 }
	
	
}; 
// Export this
module.exports = NoteApplication