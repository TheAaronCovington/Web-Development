/*
  DESCRIPTION: Write a function countBs that takes a string as its only argument and returns
  a number that indicates how many uppercase “B” characters are in the string.

  Next, write a function called countChar that behaves like countBs, except it takes a second 
  argument that indicates the character that is to be counted (rather than counting only
  uppercase “B” characters). Rewrite countBs to make use of this new function.
*/

function countBs(myString){
  var count = 0;
	for(var i = 0; i < myString.length; i++){
    	if(myString.charAt(i) === 'B'){
        	count++;	
        }
    }
  return count;
}

function countChar(myString, myChar){
  var count = 0;
	for(var i = 0; i < myString.length; i++){
    	if(myString.charAt(i) === myChar){
        	count++;	
        }
    }
  return count;
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
