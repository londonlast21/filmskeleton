var easyInput = "";
var mediaType ="";
var apikey = "b8918a77ef3da9c62a4dc045d9aa28ee";



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
        movie.className = "titleCard";
        movie.setAttribute("src", "http://image.tmdb.org/t/p/w185/"+ data.results[0].poster_path)
        document.getElementById('titleImage').appendChild(movie);


    });}
    else if (mediaType === "Book"){
    
        var url = "https://www.googleapis.com/books/v1/volumes?q=" + easyInput;

        fetch (url)
        .then(response => response.json())
        .then(function(data) {
            console.log(data);

            // function
            var book = document.createElement('img');
            book.className = "titleCard";
            book.setAttribute("src", data.items[0].volumeInfo.imageLinks.thumbnail);
            document.getElementById('titleImage').appendChild(book);
        })

    } else if (mediaType === "General"){


  



    
    }
    // // if book is selected, run library API call
    // else if mediaType === book {

    //     // library api call

    //     // function to create book card
    //     var book[i] = document.createElement('img');
    //     book[i].className = "titleCard";
    //     document.getElementById('titleImage').appendChild(img);

    // }
    // // if general is selected run api call to image search
    // else if mediaType === general {

    //     // general image api call

    //     // function to create general card
    //     var general[i] = document.createElement('img');
    //     general[i].className = "titleCard";
    //     document.getElementById('titleImage').appendChild(img);

    // }

};


//--------------//

// function to create note based on user note input




// function to run an icon's html on drag to anchor


// function to set localStorage for working on column
// function to set localStorage for trigger column
// function to set localStorage for weekly thing
// function to restore localStorage for all on page refresh


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

    // capture input from textarea
    var getNote = document.getElementById('new-note').value;
    // test what was captured
    console.log(getNote);


    // clear note input area on submission
    var noteInput = document.getElementById('new-note').value = "";
    
    // use note input to generate note card


}


/// onclick to get data user's input from script in html tag
document.getElementById("getTitle").onclick = function (event){
    getTitleInfo();     
}
// onclick to get data from user's input in week div
document.getElementById("save-new-event").onclick = function (event){
    getNoteInfo();
}