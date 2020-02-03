
// Javascript script by Hayley Corson-Dosch
// // Example 2.1
// var mydiv = document.getElementById("mydiv");
// mydiv.innerHTML = "Hello World";

// // Example 2.2
// function myfunc(){
//     var mydiv = document.getElementById("mydiv");
//     mydiv.innerHTML = "Hello World.";
// };
//
// window.onload = myfunc();

// // Example 2.3
//initialize function called when the script loads
function initialize(){
    cities();
};

//function to create a table with cities and their populations
function cities(){
    //define two arrays for cities and population
    // var cities = [
    //     'Madison',
    //     'Milwaukee',
    //     'Green Bay',
    //     'Superior'
    // ];
    // var population = [
    //     233209,
    //     594833,
    //     104057,
    //     27244
    // ];

// Example 2.4
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
// End example 2.4

    //create the table element
    var table = document.createElement("table");

    //create a header row
    var headerRow = document.createElement("tr");

    //add the "City" column
    var cityHeader = document.createElement("th");
    cityHeader.innerHTML = "City";
    headerRow.appendChild(cityHeader);

    //add the "Population" column
    var popHeader = document.createElement("th");
    popHeader.innerHTML = "Population";
    headerRow.appendChild(popHeader);

    //add the row to the table
    table.appendChild(headerRow);

    //loop to add a new row for each city
    // for (var i = 0; i < cities.length; i++){
    //     var tr = document.createElement("tr");
    //
    //     var city = document.createElement("td");
    //     city.innerHTML = cities[i];
    //     tr.appendChild(city);
    //
    //     var pop = document.createElement("td");
    //     pop.innerHTML = population[i];
    //     tr.appendChild(pop);
    //
    //     table.appendChild(tr);
    // };

// Example 2.7

//Example 2.4 line 25...loop to add a new row for each city
    for (var i = 0; i < cityPop.length; i++){
    var tr = document.createElement("tr");

    var city = document.createElement("td");

    //first conditional block
        if (cityPop[i].city == 'Madison'){
            city.innerHTML = 'Badgerville';
        } else if (cityPop[i].city == 'Green Bay'){
            city.innerHTML = 'Packerville';
        } else {
            city.innerHTML = cityPop[i].city;
        }

        tr.appendChild(city);

        var pop = document.createElement("td");

    //second conditional block
        // if (cityPop[i].population < 500000){
        //     pop.innerHTML = cityPop[i].population;
        // } else {
        //     pop.innerHTML = 'Too big!';
        // };

        // Example 2.8

        //Example 2.7 line 19
        pop.innerHTML = cityPop[i].population < 500000 ? cityPop[i].population : 'Too big!';

        // End example 2.8

        tr.appendChild(pop);

        table.appendChild(tr);
    };

// End example 2.7

// // Example 2.4
//     for (var i = 0; i < cityPop.length; i++){
//           var tr = document.createElement("tr");
//
//           var city = document.createElement("td");
//           city.innerHTML = cityPop[i].city; //NOTE DIFFERENT SYNTAX
//           tr.appendChild(city);
//
//           var pop = document.createElement("td");
//           pop.innerHTML = cityPop[i].population; //NOTE DIFFERENT SYNTAX
//           tr.appendChild(pop);
//
//           table.appendChild(tr);
//       };
//
// // End example 2.4

// Example 2.6a
    // //WHILE LOOP...Example 2.4 line 25
    //   //define a counter variable
    //   var i = 0;
    //   //start the loop
    //   while (i < cityPop.length){
    //       var tr = document.createElement("tr");
    //
    //       var city = document.createElement("td");
    //       city.innerHTML = cityPop[i].city;
    //       tr.appendChild(city);
    //
    //       var pop = document.createElement("td");
    //       pop.innerHTML = cityPop[i].population;
    //       tr.appendChild(pop);
    //
    //       table.appendChild(tr);
    //
    //       //increment counter
    //       i++;
    //   };

// end example 2.6a

// Example 2.6b

      //FOREACH LOOP...Example 2.4 line 25
      // cityPop.forEach(function(cityObject){
      //     var tr = document.createElement("tr");
      //
      //     var city = document.createElement("td");
      //     city.innerHTML = cityObject.city; //NOTE DIFFERENT SYNTAX
      //     tr.appendChild(city);
      //
      //     var pop = document.createElement("td");
      //     pop.innerHTML = cityObject.population; //NOTE DIFFERENT SYNTAX
      //     tr.appendChild(pop);
      //
      //     table.appendChild(tr);
      // });
// End example 2.6b

// Example 2.6c

//FOREACH LOOP WITH OBJECT FOR LOOP...Example 2.4 line 25

      // cityPop.forEach(function(cityObject){
      //     var tr = document.createElement("tr");
      //
      //     for (var property in cityObject){
      //         var td = document.createElement("td");
      //         td.innerHTML = cityObject[property];
      //         tr.appendChild(td);
      //     };
      //
      //     table.appendChild(tr);
      // });

// End example 2.6c

    //add the table to the div in index.html
    var mydiv = document.getElementById("mydiv");
    mydiv.appendChild(table);
};

//call the initialize function when the window has loaded
window.onload = initialize();

// Example 2.4
