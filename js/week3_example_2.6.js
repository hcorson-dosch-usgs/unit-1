// jQuery.get() method...Example 2.5 line 3
// $.get("data/MegaCities.geojson", callback, "json");

// OR

//jQuery.getJSON() method...Example 2.5 line 3
$.getJSON("data/MegaCities.geojson", callback);

//define callback function
function callback(response, status, jqXHRobject){
    //tasks using the data go here
    console.log(response);
    console.log(JSON.stringify(response));
};
