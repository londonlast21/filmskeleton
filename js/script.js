// api call to link to penguin api book database
var getBookImage = function() {
    
   
    
}


// function to capture the input from the searchBar
var getInput = function(event) {
    //set input to the value of text entered
    var input = document.getElementById('searchBar').value;
    // make entered text all lowercase
    var easyInput = input.toLowerCase();
    
    // test what value is being used
    console.log(easyInput);

    // send entered value to the api call
    getBookImage();
};

