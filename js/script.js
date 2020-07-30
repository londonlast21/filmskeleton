var easyInput = "";
var mediaType ="";
//api keys go here 


var deleteNote = document.querySelector("delete-note");
var editNote = document.querySelector("edit-note");

var noteIdCounter = 0;
var movieIdCounter = 0;
var bookIdCounter = 0;
var generalIdCounter = 0;

// draggable
$("#titleCard").draggable;


// resource functions



// api call to generate image
var getMedia = function(easyInput, mediaType){

    // clear old results
    document.getElementById('titleImage').innerHTML = "";

    

    // if media type value is 'film'
    if (mediaType === "Film") {

    // send input to tmdb api call to get JSON response
    var url = "https://api.themoviedb.org/3/search/movie?api_key="+ apikey + "&query=" + easyInput;

    fetch (url)
    .then(response => response.json())
    .then(function(data) {
        console.log(data);

        // function to create note card based on user input
        var movie = document.createElement('img');
        movie.draggable = true;
        movie.className = "titleCard";
        movie.id = "movie";
        movie.setAttribute("src", "http://image.tmdb.org/t/p/w185/"+ data.results[0].poster_path);

        movie.setAttribute("movie-id", movieIdCounter);
        
        // create delete button
        var deleteMovieBtn = document.createElement('button');
        deleteMovieBtn.textContent = "X";
        deleteMovieBtn.className = "delete-movie";
        deleteMovieBtn.id = "deleteMovie";

       document.getElementById('titleImage').appendChild(deleteMovieBtn);


        document.getElementById('titleImage').appendChild(movie);

        movieIdCounter++;

        console.log(movieId);


    });}
    else if (mediaType === "Book"){
        // API call to google Books api
       var url = "https://www.googleapis.com/books/v1/volumes?q=" + easyInput;

        fetch (url)
        .then(response => response.json())
        .then(function(data) {
            console.log(data);

            // function to create img
            var book = document.createElement('img');
            book.draggable = true;
            book.className = "titleCard";
            book.id = "book";
            book.setAttribute("src", data.items[0].volumeInfo.imageLinks.thumbnail);

            book.setAttribute("book-id", bookIdCounter);

            // create delete button on image
            var deleteBookBtn = document.createElement('button');
            deleteBookBtn.textContent = "X";
            deleteBookBtn.className = "delete-book";
            deleteBookBtn.id = "deleteBook";
            

            document.getElementById('book').appendChild(deleteBookBtn);


            document.getElementById('titleImage').appendChild(book);
            
            bookIdCounter++;
        })

    } else if (mediaType === "General"){

        var url = "https://pixabay.com/api/?key=" + apikey2 + "&q=" + easyInput + "&image_type=photo";

        fetch (url)
        .then(response => response.json())
        .then(function(data){
            console.log(data);

            // // function to create img
            var general = document.createElement('img');
            general.draggable = true;
            general.className = "titleCard";
            general.id = "general";
            general.setAttribute("src", data.hits[0].largeImageURL);
            general.setAttribute("general-id", generalIdCounter);

            // create delete button
            var deleteGeneralBtn = document.createElement('button');
            deleteGeneralBtn.textContent = "X";
            deleteGeneralBtn.className = "delete-general";
            deleteGeneralBtn.id = "deleteGeneral";

            document.getElementById('deleteGeneral').appendChild(deleteGeneralBtn);

            document.getElementById('titleImage').appendChild(general);
            generalIdCounter++;
        })
    }
};

//--------------//

// write note using user input
var getNote = function(noteInput){
    console.log(noteInput);

    
    // use input to generate new note div
    var createNewNote = document.createElement('div');
    createNewNote.draggable = true;
    createNewNote.className = 'scheduleEvent';
    createNewNote.id = "newNoteId";
    createNewNote.innerHTML = noteInput;

    createNewNote.setAttribute("note-id", noteIdCounter);
    // create edit button on note
    var editButtonNote = document.createElement('button');
    editButtonNote.textContent = "Edit";
    editButtonNote.className = "edit-note";
    editButtonNote.id = "editNote";

    // listen to edit note on button click
    editButtonNote.addEventListener("click", editNoteHandler);


    createNewNote.appendChild(editButtonNote);
    // create delete button on note
    var deleteButtonNote = document.createElement('button');
    deleteButtonNote.textContent = "Delete";
    deleteButtonNote.className = "delete-note";
    deleteButtonNote.id = "deleteNote";
    deleteButtonNote.value = "remove Element";

    createNewNote.appendChild(deleteButtonNote);
    
    //
    
    
    document.getElementById('myNote').appendChild(createNewNote);
    noteIdCounter++;
    // listen to delete note on button click
    deleteButtonNote.addEventListener("click", deleteNoteHandler);

};

// delete note function
var deleteNoteHandler = function(event) {
    // test if its working
    console.log(event.target);

    if (event.target.matches(".delete-note")) {
        // get the element's task id
        var noteIdGet = event.target.getAttribute("note-id");
        
        console.log(noteIdGet);
    }
   
    
}

// edit note function
var editNoteHandler = function(event) {
    // test if its working
    console.log(event.target);

    
}




// function to run an icon's html on drag to anchor


// function to set localStorage for working on column
// function to set localStorage for trigger column
// function to set localStorage for weekly thing
// function to restore localStorage for all on page refresh



// var to get resource input search
//var getResourceInfo = function(event) {
    // getting the value from the zip code entry
    //var helpInput = document.getElementById('dropdown-bar-help').value;
    // check to see input being logged
    //console.log(helpInput);
   
    //var zipCodeInput = document.getElementById('zipCode').value;
     // reject it if it isn't five integers
    //if { !zipCodeInput === 00000 < 

    // } else {
    //     console.log("err");
        
    // }

    // turn input into a string
    


    // check input being used
    //console.log(zipCodeInput);
    

    // send input to api call
    //getResourceInfo(helpInput, zipCodeInput);
//}

// var to get media input
var getTitleInfo = function(event) {
    var input = document.getElementById('titleSearch').value;
    // make entered text all lowercase
    var easyInput = input.toLowerCase();
    //test what is being used
    console.log(easyInput);

    // capture type of category selected
    var dropDown = document.getElementById('dropdown-bar');
    var mediaType = dropDown.options[dropDown.selectedIndex].text;
    // test what value is being used
    console.log(mediaType);

    // clear the text input
    document.getElementById('titleSearch').value = "";

    // send these values to the api calls
    getMedia(easyInput, mediaType);
}
// var to get note input
var getNoteInfo = function(event) {
    // clear out old note
    var clearNote = document.getElementById('myNote');
    clearNote = function removeNote(clearNote, newNoteId) {
    if (newNoteId == clearNote) {
        console.log("error");
    }

    // clear note appended to target section
    clearNote.removeElement(parent, child);
    }



    //    // while(clearNote.firstChild){
    //         clearNote.removeChild(clearNote.firstChild);
    //         clearNote.removeChild(deleteButtonNote);
    //         clearNote.removeChild(editButtonNote);
    //     }

    // capture input from textarea
    var getNewNote = document.getElementById('newNote').value;
    // test what was captured
    console.log(getNewNote);

    // clear note input area on submission
    var noteInput = document.getElementById('newNote').value = "";
    
    // use note input to generate note card
    getNote(getNewNote);
}

// makin note draggable
var dragIcon = function onDragStart(event) {
    event
    .dataTransfer
    .setData('text/plain', event.target.id);
    console.log(dragNote);
}

//to delete the note
//var noteDelete = function()




// onclick to get resource info links
// document.getElementById("saveResource").onclick = function (event){
//     getResourceInfo();
// }

/// onclick to get data user's input from script in html tag
document.getElementById("getTitle").onclick = function (event){
    getTitleInfo();     
}
// onclick to get data from user's input in week div
document.getElementById("saveNewEvent").onclick = function (event){
    getNoteInfo();
}





