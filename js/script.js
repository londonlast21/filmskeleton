var easyInput = "";
var mediaType ="";


// api call to generate image
var getMedia = new function(){

    if mediaType === film {
    
    // send input to get JSON response
    GET https://api.themoviedb.org/3/movie//images?api_key= + b8918a77ef3da9c62a4dc045d9aa28ee + &language=en-US


    // function to create note card based on user input
    var movie[i] = document.createElement('img');
    movie[i].className = "titleCard";
    document.getElementById('titleImage').appendChild(img);

    }
    // if book is selected, run library API call
    else if mediaType === book {

        // library api call

        // function to create book card
        var book[i] = document.createElement('img');
        book[i].className = "titleCard";
        document.getElementById('titleImage').appendChild(img);

    }
    // if general is selected run api call to image search
    else if mediaType === general {

        // general image api call

        // function to create general card
        var general[i] = document.createElement('img');
        general[i].className = "titleCard";
        document.getElementById('titleImage').appendChild(img);

    }

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