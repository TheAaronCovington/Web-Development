/*
  Description:  Write a range function that takes two arguments, start and end,
  and returns an array containing all the numbers from start up to (and including) end.

  Next, write a sum function that takes an array of numbers and returns the sum of these
  numbers. Run the previous program and see whether it does indeed return 55.

  As a bonus assignment, modify your range function to take an optional third argument
  that indicates the “step” value used to build up the array. If no step is given, the 
  array elements go up by increments of one, corresponding to the old behavior. The 
  function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure it also works
  with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].
*/

function range(start, end, step){
  	var myArray = [];
  
  	if(step == undefined){
    	step = 1;
    }
  	else if(step == 0){
    	myArray.push(start, end);
      	return myArray;
    }
  	else if(step < 0){
    	step = Math.abs(step);
    }
  	
  	if(start < end){
		for(var i = start; i <= end; i = i+step){
    		myArray.push(i);
    	}
    }
  	else{
    	for(var i = start; i >= end; i = i-step){
        	myArray.push(i);
        }
    }
  	return myArray;
}

function sum(myArray){
	var total = 0;
  	for(var i = 0; i < myArray.length; i++){
    	total = total + myArray[i];
    }
  	return total;
}

console.log(sum(range(1, 10)));
// → 55
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
