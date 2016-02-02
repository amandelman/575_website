// Javascript by Adam Mandelman, 2016


// Populations of four cities I have lived in:
// Port Vila, Vanuatu: 44,040
// Byron Bay, Australia: 4,959
// San Francisco, CA: 852,469
// Madison, WI: 233,209


//initialize function called when the script loads
function initialize(){
    //Call cities after document ready
    cities();
    //Call addEvents after document ready
    addEvents();
    
};


//function to create a table with cities and their populations
function cities(){
    //define two arrays for cities and population
    var cityPop = [
        { 
            city: 'Madison, WI',
            population: 233209
        },
        {
            city: 'San Francisco, CA',
            population: 852469
        },
        {
            city: 'Byron Bay, AUS',
            population: 4959
        },
        {
            city: 'Port Vila, VAN',
            population: 44040
        }
    ];

    //append the table element to the div
    $("#mydiv").append("<table>");

    //append a header row to the table
    $("table").append("<tr>");

    //add the "City" and "Population" columns to the header row
    $("tr").append("<th>Cities I've Lived In</th><th>Population</th>");

    //loop to add a new row for each city
    for (var i = 0; i < cityPop.length; i++){
        //assign longer html strings to a variable
        var rowHtml = "<tr><td>" + cityPop[i].city + "</td><td>" + cityPop[i].population + "</td></tr>";
        //add the row's html string to the table
        $("table").append(rowHtml);
    };


    //add a column with the new heading City Size.
    function addColumns(cityPop){
        // for each row
        $("tr").each(function(i){
        // if row = 0, then add row heading City Size
    	if (i == 0){
    
            $(this).append("<th>City Size</th>");
    	} else {
        // if not row 0, then
        // for the variable citySize
            var citySize;
        // compare each population in the array with an arbitrary number
        // if less than 100000, defince the variable citySize as "Small"
    		if (cityPop[i-1].population < 100000){
    			citySize = "Small";
        // if less than 500000, defince the variable citySize as "Medium"
            } else if (cityPop[i-1].population < 500000){
    			citySize = "Medium";
        // Otherwise define the variable citySize as "Large"
    		} else {
    			citySize = "Large";
    		};
        // Fill the rows with the resulting citySize data
    		$(this).append("<td>" + citySize + "</td>");
    	};
    });
};
//call addColumns function with cityPop data passed through
    addColumns(cityPop);


    };

//Add an interaction...
 function addEvents(){
//That whenever the mouse hovers over the table...
     $("table").mouseover(function(i){
//Define the variable color
		var color = "rgb(";
//According to three different locations in RGB color space (i = 0, 1, or 2)
		for (var i=0; i<3; i++){
//Set the variable random as a random integer between 0 and 255
			var random = Math.round(Math.random() * 255);
//These lines concatenate the randomly generated integers so they correspond to three locations in the RGB color space for the variable color so that the result is always in the form rgb(x, y, z)
			color += random;
//
			if (i<2){
				color += ",";
			
			} else {
				color += ")";
		};
    
//Using that randomly generated color, change the color of the table with each mouseover
		$(this).css("color", color);
	};

          });
// Add a clickme function
	
    function clickme(){
// That pops up a dialogue box saying "Hey, you click me"
		alert("Hey, you clicked me!");
	};
//Whenever the table is clicked
	$("table").on("click", clickme);

    
    
};

 



//call the initialize function when the document has loaded
$(document).ready(initialize);
