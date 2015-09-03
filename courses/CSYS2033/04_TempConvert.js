/*
	Description: Create a javascript script that will prompt a user to enter a temperature
	in either Fahrenheit or Celcius.  When user is prompted to enter temperature they
	should be told to enter the units following the temperature with either F or C.
	(For example: 98.6F)  Your program must then determine which was entered.  If they
	neglect to specify a unit an error can be displayed in place of the converted
	temperature.  
	Celcius to Fahrenheit: Multiply the Celsius temperature times
	 1.8 and add 32 (F = C * 1.8 + 32)
	Fahrenheit to Celcius: Subtract 32 from the Fahrenheit temperature
	  and then Multiply times .55 (C = (F - 32) * .55)
*/

var convert = function(){

	this.fToC = function(myTemp){
		var c = (myTemp -32) * .55;
		console.log(c + "c");
	};
	this.cToF = function(myTemp){
		var f = (myTemp * 1.8) + 32;
		console.log(f + "f");
	};
};

var conversion = new convert(); 

var temp = prompt("Please enter a temperature followed by C (Celcius) or F (Fahrenheit)");
var tempNum = parseInt(temp);
if(typeof temp === "string" && (temp.toLowerCase().charAt(temp.length-1) === 'c' || 
	temp.toLowerCase().charAt(temp.length-1) === 'f')){
	if(temp.toLowerCase().charAt(temp.length-1) === 'c'){
		conversion.cToF(tempNum);
	}
	else if(temp.toLowerCase().charAt(temp.length-1) === 'f'){
		conversion.fToC(tempNum);
	}
}
else{
	console.log("Format Error: Must have a C or F on the end of temperature");	
}
