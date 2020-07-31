
var easyInput = "";
var mediaType ="";
//api keys go here 



var deleteNote = document.querySelector("delete-note");
var editNote = document.querySelector("edit-note");

// counters
var mediaIdCounter = 0;
var noteIdCounter = 0;
var deletebtnNoteCounter = 0;

// drag drop stuff
const allowDrop = (event) => {
       event.preventDefault();
    console.log("allow drop working");
   }
const onDragStart = (event) => {
    console.log("onDragStart");
    event.dataTransfer.setData("text", event.target);
    // test set data value
    console.log(event.target);
    
}
const onDrop = (event) => {
    event.preventDefault();
    console.log("onDrop is working");
    var data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));
};


// api call to generate image
var getMedia = function(easyInput, mediaType){

    // clear old results
    document.getElementById('mediaImage').innerHTML = "";

    

    // if media type value is 'film'
    if (mediaType === "Film") {

    // send input to tmdb api call to get JSON response
    var url = "https://api.themoviedb.org/3/search/movie?api_key="+ apikey + "&query=" + easyInput;

    fetch (url)
    .then(response => response.json())
    .then(function(data) {
        console.log(data);

        // function to create note card based on user input
        var titleImage = document.createElement('div');
        titleImage.className = "titleImage";
        titleImage.id = "titleImage";
        titleImage.setAttribute("movie-id", mediaIdCounter);
        document.getElementById('mediaImage').appendChild(titleImage);
        
        var movie = document.createElement('img');
        movie.className = "titleCard";
        movie.id = "movie";
        movie.setAttribute("src", "http://image.tmdb.org/t/p/w185/"+ data.results[0].poster_path);
        movie.setAttribute("movie-id", mediaIdCounter);
        
        
        // create delete button
        var deleteMovieBtn = document.createElement('button');
        deleteMovieBtn.textContent = "X";
        deleteMovieBtn.className = "delete-movie";
        deleteMovieBtn.id = "deleteMovie";
        deleteMovieBtn.setAttribute("movie-id", mediaIdCounter);
        
        deleteMovieBtn.addEventListener("click", deleteMovieHandler);

        document.getElementById('titleImage').appendChild(deleteMovieBtn);
        document.getElementById('titleImage').appendChild(movie);
        
        //set class for entire titleImage space (button and image together)
        mediaGenerated = titleImage.setAttribute("id", "movie" + mediaIdCounter)


        mediaIdCounter++;

        // //stick div to mediaresults area
        // document.getElementById("mediaImage").appendChild(titleImageCard);

    });}
    else if (mediaType === "Book"){
        // API call to google Books api
       var url = "https://www.googleapis.com/books/v1/volumes?q=" + easyInput;

        fetch (url)
        .then(response => response.json())
        .then(function(data) {
            console.log(data);

            var titleImage = document.createElement('div');
            titleImage.className = "titleImage";
            titleImage.id = "titleImage";
            titleImage.setAttribute("book-id", mediaIdCounter);
            document.getElementById('mediaImage').appendChild(titleImage);

            console.log(mediaIdCounter);

            // function to create img
            var book = document.createElement('img');
            book.className = "titleCard";
            book.id = "book";
            book.setAttribute("src", data.items[0].volumeInfo.imageLinks.thumbnail);
            book.setAttribute("book-id", mediaIdCounter);

            // create delete button
            var deleteBookBtn = document.createElement('button');
            deleteBookBtn.textContent = "X";
            deleteBookBtn.className = "delete-book";
            deleteBookBtn.id = "deleteBook";
            deleteBookBtn.setAttribute("book-id", mediaIdCounter);

            deleteBookBtn.addEventListener("click", deleteBookHandler);

            document.getElementById('titleImage').appendChild(deleteBookBtn);
            document.getElementById('titleImage').appendChild(book);


            //set class for entire titleImage space (button and image together)
            mediaGenerated = titleImage.setAttribute("id", "book" + mediaIdCounter);
            
            mediaIdCounter++;
            
            
        })

    } else if (mediaType === "General"){

        var url = "https://pixabay.com/api/?key=" + apikey2 + "&q=" + easyInput + "&image_type=photo";

        fetch (url)
        .then(response => response.json())
        .then(function(data){
            console.log(data);

            // function to create note card based on user input
            var titleImage = document.createElement('div');
            titleImage.className = "titleImage";
            titleImage.id = "titleImage";
            titleImage.setAttribute("general-id", mediaIdCounter);
            document.getElementById('mediaImage').appendChild(titleImage);
        
            // // function to create img
            var general = document.createElement('img');
            general.className = "titleCard";
            general.id = "general";
            general.setAttribute("src", data.hits[0].largeImageURL);
            general.setAttribute("general-id", mediaIdCounter);

            // create delete button
            var deleteGeneralBtn = document.createElement('button');
            deleteGeneralBtn.textContent = "X";
            deleteGeneralBtn.className = "delete-general";
            deleteGeneralBtn.id = "deleteGeneral";
            deleteGeneralBtn.setAttribute("general-id", mediaIdCounter);

            deleteGeneralBtn.addEventListener("click", deleteGeneralHandler);
            
            document.getElementById('titleImage').appendChild(deleteGeneralBtn);
            document.getElementById('titleImage').appendChild(general);

            //set class for entire titleImage space (button and image together)
            mediaGenerated = titleImage.setAttribute("id", "general" + mediaIdCounter)
            
            mediaIdCounter++;
            
        });
    }
};
var deleteMovieIcon = function (movieIdGet) {
    var movieSelected = document.querySelector("#movie" + movieIdGet);
    console.log(movieSelected);
    movieSelected.remove();
    // update localStorage call

}
var deleteBookIcon = function(bookIdGet) {
    var bookSelected = document.querySelector("#book" + bookIdGet);
    console.log(bookSelected);
    bookSelected.remove();
    // update localStorage call
}
var deleteGeneralIcon = function(generalIdGet) {
    var generalSelected = document.querySelector("#general" + generalIdGet);
    console.log(generalSelected);
    generalSelected.remove();
    // update localStorage call
}

// delete movie function
var deleteMovieHandler = function(event) {
    console.log(event.target);

    if (event.target.matches(".delete-movie")) {
        // get element's task id
        var movieIdGet = event.target.getAttribute("movie-id");
        // check the value we're getting
        console.log(movieIdGet);

        deleteMovieIcon(movieIdGet);
    }

    
}
// delete book function
var deleteBookHandler = function(event){
    console.log(event.target);

    if (event.target.matches(".delete-book")) {
        var bookIdGet = event.target.getAttribute("book-id");
        // check the value we are getting
        console.log(bookIdGet);

        deleteBookIcon(bookIdGet);
    }
}
// delete general function
var deleteGeneralHandler = function(event) {
    console.log(event.target);

    if (event.target.matches(".delete-general")) {
        // get element's id
        var generalIdGet = event.target.getAttribute("general-id")
        // check the value we're getting
        console.log(generalIdGet);

        deleteGeneralIcon(generalIdGet);
    }
}

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
    // var editButtonNote = document.createElement('button');
    // editButtonNote.textContent = "Edit";
    // editButtonNote.className = "edit-note";
    // editButtonNote.setAttribute("note-id", editbtnNoteCounter);
    // editButtonNote.id = "editNote";

    // // listen to edit note on button click
    // editButtonNote.addEventListener("click", editNoteHandler);

    // createNewNote.appendChild(editButtonNote);
    // editbtnNoteCounter++;


    // create delete button on note
    var deleteButtonNote = document.createElement('button');
    deleteButtonNote.textContent = "Delete";
    deleteButtonNote.className = "delete-note";
    deleteButtonNote.setAttribute("note-id", deletebtnNoteCounter)
    deleteButtonNote.id = "deleteNote";
    deleteButtonNote.value = "remove Element";

    createNewNote.appendChild(deleteButtonNote);
    deletebtnNoteCounter++;
    
    //
    
    
    document.getElementById('myNote').appendChild(createNewNote);
    noteIdCounter++;
    // listen to delete note on button click
    deleteButtonNote.addEventListener("click", deleteNoteHandler);

};

// delete note secondary function
var deleteNoteFromPage = function(noteIdGet) {
    var noteSelected = document.querySelector(".scheduleEvent[note-id='"+ noteIdGet + "']");
    console.log(noteSelected);
    noteSelected.remove();
    
}
// edit note secondary function
// var editNoteFromPage = function(editNoteIdGet) {
//     var editNoteSelected = document.querySelector(".scheduleEvent[note-id='"+ editNoteIdGet + "']");
//     console.log(editNoteSelected);
// }

// delete note function
var deleteNoteHandler = function(event) {
    // test if its working
    console.log(event.target);

    if (event.target.matches(".delete-note")) {
        // get the element's task id
        var noteIdGet = event.target.getAttribute("note-id");
        // check the value were getting
        console.log(noteIdGet);


        // call delete function
        deleteNoteFromPage(noteIdGet);
    }
   
    
}

// edit note function
// var editNoteHandler = function(event) {
//     // test if its working
//     console.log(event.target);

//     if (event.target.matches(".edit-note")) {
//         var editNoteIdGet = event.target.getAttribute("note-id");
//         console.log(editNoteIdGet);

//         // call edit function
//         editNoteFromPage(editNoteIdGet);

//     }

    
// }




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



    // capture input from textarea
    var getNewNote = document.getElementById('newNote').value;
    // test what was captured
    console.log(getNewNote);

    // clear note input area on submission
    var noteInput = document.getElementById('newNote').value = "";
    
    // use note input to generate note card
    getNote(getNewNote);
}
// end of note function section



// onclick to get resource info links
// document.getElementById("saveResource").onclick = function (event){
//     getResourceInfo();
// }

var dragIconHandler = function() {
    /// set data so can be drag/dropped
    var iconId = event.target.getAttribute("icon-id");
    console.log("Icon ID:", iconId);

    event.dataTransfer.setData("text/plain", event.target.iconId);

}

// save data from media image drag/drop
var mediaImageHandler = function() {
    // set data 
    var mediaImageId = event.target.getAttribute("id");
    console.log("Image ID:", mediaImageId);

    event.dataTransfer.setData("text/plain", event.target.mediaImageId);
}


// // listen for drag on icons
// document.getElementsByClassName("tooltip").onclick = function (event){
//     dragIconHandler();
// }

// listen for drag on dynamic images
// document.getElementsByClassName("titleImage").onclick = function (event){
//     mediaImageHandler();
// }

// listen for drag on dynamic notes
//document.getElementsBy

// listen for drop on working on column

// listen for drop on triggers column

// listen for drop on days


/// onclick to get data user's input from script in html tag
document.getElementById("getTitle").onclick = function (event){
    getTitleInfo();     
}

// onclick to get data from user's input in week div
document.getElementById("saveNewEvent").onclick = function (event){
    getNoteInfo();
}
// 

window.addEventListener("dragstart", onDragStart);
window.addEventListener("drop", onDrop);

