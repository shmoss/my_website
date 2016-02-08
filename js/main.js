//initialize function called when the script loads
function initialize(){
    cities();
};

//function to create a table with cities and their populations
function cities(){
    //define two arrays for cities and population
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
        },
        {
            city: 'Boston',
            population: 655884
         },
        {
            city: 'San Francisco',
            population: 852469
        },
        {
            city: 'New York City',
            population: 8491079
         },
        {
            city: 'Nouakchott',
            population: 2000000
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
        	console.log("This is working");
        
        
     
    };
 // Now, we'll declare the addColumns function   
 function addColumns(cityPop){
    	//Let's make sure it works
        console.log("This is working too");
    //Loop through each table row using .each method	
    $('tr').each(function(i){
		console.log(cityPop)
		// when i is in position 0, we want a table heading "city size"
    	if (i == 0){
			 //"append" originally spelled "apend", needed fix
    		$(this).append('<th>City Size</th>');
    	//otherwise, let's go through the rest of the rows
    	} else {
			// set variable 
    		var citySize;
			// take into account that the first row is a header
    		if (cityPop[i-1].population < 100000){
    			//classify local variable
    			citySize = 'Small';
    			//console.log(i);
    			//console.log(cityPop[i-1].population);

    		} else if (cityPop[i-1].population < 500000){
    			//"citySize" originally spelled "citysize", needed fix
    			//re-classify variable (local)
    			citySize = 'Medium';
    			//console.log(i);
    			//console.log(cityPop[i-1].population);

    		} else {
    			// re-classify 
    			citySize = 'Large';
    			//console.log(i);
    			//console.log(cityPop[i-1].population);
    		};
			//Missing parenthesis around $this, missing < ?
    		$(this).append('<td>' + citySize + '</td>');
    		
    	};
    });
};


//Call the function
addColumns(cityPop)
	
//this is the beginning of the color function

// Declare addEvents function
function addEvents(){
	// utlize mouseover method - function executed upon mouseover event
	$('table').mouseover(function(){
		// set color variable to rgb(some random colors here)
		var color = "rgb(";
		// do a loop through three random numbers
		for (var i=0; i<3; i++){
			// set a random variable
			var random = Math.round(Math.random() * 255);
			// add each iteration to color variable
			color += random;
			// when number is in first two positions, add comma
			if (i<2){
				color += ",";
			// if not, we know it's last, and close the parenthesis w/ quote
			} else {
				color += ")";
			};
		}
		// use 'this' method to set style using css style
		$(this).css('color', color);
		
	});
}

	

//this is the end of the color function
//let's call the addEvents function
addEvents()


//This is the beginning of the click function, with slightly edited syntax
// too many brackets in original debug.js
// when table clicked, execute one-time function (removed name)
$('table').on('click', function (){
		// function executes the alert command 
        alert('Hey, you clicked me!');
    });

//this is the end of the "clickme!" function
 };


//call the initialize function when the document has loaded
$(document).ready(initialize);



// this is me trying to figure out javascript
var btn = document.createElement("BUTTON");
var btn_text = document.createTextNode("Click me!");
btn.appendChild(btn_text);
document.body.appendChild(btn);
$(btn).append(" Please!");
 $(btn).on('click', function(){
        alert('This table is super dope');
    });

var para = document.getElementById("para1");
var node = document.createTextNode("This is text");
para.appendChild(node);
document.getElementById("para1").innerHTML = "Please enjoy it"
document.getElementById("list1").innerHTML = "This is Starr's Webpage,"

jQuery('#para1').html("Welcome.")
var list3 = document.createElement("li")
para1.appendChild(list3);
//goodbye
console.log("start of ajax")

//We'll call an AJAX function
function jQueryAjax(){
    //defining a variable to hold the data
    var mydata;

    //here is the jQuery ajax method, where we want to pull our data from a file
    $.ajax("data/MegaCities.GeoJSON", {
    	// dataType is first parameter: our data type
        dataType: "json",
        // success is our second parameter: success starts the callback function
        success: function(response){
        	// response is the first and most important parameter of callback function: your data
            mydata = response;

            //Here, we'll console.log the data - which will appear as an array of objects because it's read within the function
            //Array appears in the console, but only after the initial console log reads undefined 
            console.log(mydata);
       
        }
    });

    //will read "undefined" in console message- the variable written outside the function. 
    // This will be executed before callback function, so will appear empty!
    console.log(mydata);
};
//Let's call the function
jQueryAjax()
console.log("end of script")


//This is the debugAjax function
function debugAjax(){
	//This is the ajax query method.  We request the GeoJSON MegaCities file
	$.ajax("data/MegaCities.GeoJSON", {
		//first parameter dataType is set to JSON (file-type of MegaCites)
		dataType: "json",
		//success is the second parameter: this initiates the callback function
		success: function(response){
						
			//we nest the command within the callback function
			//the command tells us to append the GeoJSON file to the div, with line breaks
			$("#mydiv").append('<br>GeoJSON data:<br>' + JSON.stringify(response));
			
		}
	});
};

	
//Once the document is ready, we'll call the debugAjax function	
$(document).ready(debugAjax);

