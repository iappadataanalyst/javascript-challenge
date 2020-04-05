// Assigning the data from `data.js` to a descriptive variable - Table_Data
var Table_Data = data;

console.log(Table_Data);

// YOUR CODE HERE!

// Selecting the filter button
var Filter_Button = d3.select("#filter-btn");

// Selecting the Reset button
var Reset_Button = d3.select("#reset-btn");

// Selecting the Clear button
var Clear_Button = d3.select("#clear-btn");

// Getting a reference to the table body
var tbody = d3.select("tbody");


//Function for Retrieving Data 

function Retrieve_Data(data) {
	
	data.forEach((UFOData) => {
	  var row = tbody.append("tr");
	  Object.entries(UFOData).forEach(([key, value]) => {
		var cell = row.append("td");
		cell.text(value);
	  });
	});
}

//Function for Filtering Data 

function Filter_Data() {
	
	//Prevent page from refreshing in form
	d3.event.preventDefault();		
	
	// Getting the DateTime, City, State, Country & Shape Value
	var DateTime = d3.select("#datetime").property("value");
	var City = d3.select("#city").property("value");
	var State = d3.select("#state").property("value");
	var Country = d3.select("#country").property("value");
	var Shape = d3.select("#shape").property("value");
	
	//Filter Criteria
	var Filtered_Data = data;

	if (DateTime != ""){
    	Filtered_Data = Filtered_Data.filter(FilteredData => FilteredData.datetime === DateTime);
    }
	
	if (City !=""){
    	Filtered_Data = Filtered_Data.filter(FilteredData => FilteredData.city.toLowerCase() === City.toLowerCase());
    }
    if (State !=""){
        Filtered_Data = Filtered_Data.filter(FilteredData => FilteredData.state.toLowerCase() === State.toLowerCase());
        }
    if (Country !=""){
        Filtered_Data = Filtered_Data.filter(FilteredData => FilteredData.country.toLowerCase() === Country.toLowerCase());
        }
    if (Shape !=""){
        Filtered_Data = Filtered_Data.filter(FilteredData => FilteredData.shape.toLowerCase() === Shape.toLowerCase());
        }

    tbody.html("");
    Retrieve_Data(Filtered_Data);
}

//Function for Clearing Data 

function Clear_Data() {
	
	tbody.html("");
}

//Function for Resetting Data 

function Reset_Data() {
	
	
	tbody.html("");
	Retrieve_Data(Table_Data);
}


//Calling the Retrieve Data Function
Retrieve_Data(Table_Data);

//Calling Respective function based on CLick
Filter_Button.on("click", Filter_Data);
Reset_Button.on("click", Reset_Data);
Clear_Button.on("click", Clear_Data);