
// function to capture the input from the searchBar
// when onClick
function getInput = function(event) {
    //set input to the value of text entered
    var input = document.getElementById('searchBar').value;
    // make entered text all lowercase
    var easyInput = input.toLowerCase();
    
    // test what value is being used
    console.log(easyInput);

    // capture the type of category selected
    var dropDown = document.getElementById('dropdown-bar');
    var mediaType = dropDown.options[dropDown.selectedIndex].text;

    // test what value is being used
    console.log(mediaType);

    // send easyInput and mediaType to api call

};