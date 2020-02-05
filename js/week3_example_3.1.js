//define AJAX function
function jQueryAjax(){
    //basic jQuery ajax method
    $.ajax("data/MegaCities.geojson", {
        dataType: "json",
        success: callback
    });
};

var mydata;

//Example 3.4 line 10...define callback function
function callback(response){
    mydata = response;
    // note that data can be accessed within the callback function
    console.log('data can be accessed within the callback function')
    // within the callback function, data can be accessed using the variable response
    // or using a variable defined to equal respones (here: mydata)
    console.log(response)
    console.log(mydata)

    //pass data to another function
    nextFunction(mydata);
};

function nextFunction(data){
    // note that data can be accessed within a function that is called within the callback function
    console.log('data can be accessed within a function that is called within the callback function')
    // must be accessed using the parameter name of the function to which the data was passed
    // (e.g., 'data' instead of 'mydata' or 'response')
    console.log(data); //contains response data held by mydata in callback
};


// note that data cannot be accssed outside of the callback function
// (unless called within a function that is called within the callback function)
// For example, the next line prints 'undefined' to the console, since the no value has been assigned to mydata yet
console.log(mydata)
console.log('data cannot be accessed outside of the callback function')

$(document).ready(jQueryAjax);
