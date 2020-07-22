// // api call to generate image
// var getMedia = function(){

// };

// // function to create note card based on user input
// if mediaType = film {

// }

// // function
// else if mediaType = book {

// }
// // function

// else if mediaType = general {

// }

// else {
//     // generate prompt 'select category'
    

// }

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
    //getMedia(easyInput, mediaType);
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