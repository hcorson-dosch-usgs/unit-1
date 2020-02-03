//initialize function called when the script loads
//Use the intitialize function to call the cities function
function initialize(){
	cities();
};

//function to create a table with cities and their populations
function cities(){
	//define an array of objects for cities and their population
	var cityPop = [
		{
			city: 'Madison',
			population: 233209
		},
		{
			city: 'Milwaukee',
			population: 594833
		},
		{
			city: 'Green Bay',
			population: 104057
		},
		{
			city: 'Superior',
			population: 27244
		}
	];

	//append the table element to the div
	$("#mydiv").append("<table>");

	//append a header row to the table
	$("table").append("<tr>");

	//add the "City" and "Population" columns to the header row
	$("tr").append("<th>City</th><th>Population</th>");

	//loop to add a new row for each city
    for (var i = 0; i < cityPop.length; i++){
        //assign longer html strings to a variable
        var rowHtml = "<tr><td>" + cityPop[i].city + "</td><td>" + cityPop[i].population + "</td></tr>";
        //add the row's html string to the table
        $("table").append(rowHtml);
    };

		// call the addColumns and addEvents functions
    addColumns(cityPop);
    addEvents();
};

// define a function to add and populate a City Size column
function addColumns(cityPop){
		// Loop through the rows to add a new column and populate it
    $('tr').each(function(i){

    	if (i == 0){
			// For the header row, add a new header called City Size
    		$(this).append('<th>City Size</th>');
    	} else {
			// for the remaining rows...
				// define a variable citySize
    		var citySize;

				// Use conditional statements to set the value of citySize,
				// depending on the population of each city
    		if (cityPop[i-1].population < 100000){
    			citySize = 'Small';

    		} else if (cityPop[i-1].population < 500000){
    			citySize = 'Medium';

    		} else {
    			citySize = 'Large';
    		};

				// Append the value of citySize to each row
    		$(this).append('<td>' + citySize + '</td>');
    	};
    });
};

// define a function to add events to the page
function addEvents(){

// Define a mouseover function that randomly changes the
// color of the text each time the user mouses over the table
	$('table').mouseover(function(){
	// Upon each mouseover...
		//generate a random color
		var color = "rgb(";

		for (var i=0; i<3; i++){

			var random = Math.round(Math.random() * 255);

			color += random;

			if (i<2){
				color += ",";

			} else {
				color += ")";
			};
		};
		// assign the color to the table style
		$(this).css('color', color);
	});

// Define a clcik function that displays a pop-up
// message each time the user clicks on the table
	function clickme(){
	// Define the pop-up alert to be displayed
		alert('Hey, you clicked me!');
	};
	// Tell the function to display the alert each time
	// the table is clicked
	$('table').on('click', clickme);
};

//call the initialize function when the document has loaded
$(document).ready(initialize);
