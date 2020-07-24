var easyInput = "";
var mediaType ="";
var apikey = "b8918a77ef3da9c62a4dc045d9aa28ee";
var apikey2 = "17609511-a8b61b70dbfc9bcb99ef972fb";



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
        // API call to google Books api
       var url = "https://www.googleapis.com/books/v1/volumes?q=" + easyInput;

        fetch (url)
        .then(response => response.json())
        .then(function(data) {
            console.log(data);

            // function to create img
            var book = document.createElement('img');
            book.className = "titleCard";
            book.setAttribute("src", data.items[0].volumeInfo.imageLinks.thumbnail);
            document.getElementById('titleImage').appendChild(book);
        })

    } else if (mediaType === "General"){

        var url = "https://pixabay.com/api/?key=" + apikey2 + "&q=" + easyInput + "&image_type=photo";

        fetch (url)
        .then(response => response.json())
        .then(function(data){
            console.log(data);

            // // function to create img
            var general = document.createElement('img');
            general.className = "titleCard";
            general.setAttribute("src", data.hits[0].largeImageURL);
            document.getElementById('titleImage').appendChild(general);
        })
    }
};
//--------------//

// write note using user input
var getNote = function(noteInput){
    console.log("hello");

    // clear old results
    document.getElementById(newNote).innerHTML = "";
};

// get value for links based on icon's class

// when icon is dropped, set value to class
//var setIconValue = document.get

// function to generate links based on set class value for icon







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
    getNote(noteInput);


}


/// onclick to get data user's input from script in html tag
document.getElementById("getTitle").onclick = function (event){
    getTitleInfo();     
}
// onclick to get data from user's input in week div
document.getElementById("save-new-event").onclick = function (event){
    getNoteInfo();
}