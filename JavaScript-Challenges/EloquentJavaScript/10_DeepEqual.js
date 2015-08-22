/*
  DESCRIPTION: The == operator compares objects by identity. But sometimes, 
  you would prefer to compare the values of their actual properties.
  
  Write a function, deepEqual, that takes two values and returns true only if they
  are the same value or are objects with the same properties whose values are also 
  equal when compared with a recursive call to deepEqual.

  To find out whether to compare two things by identity (use the === operator for that)
  or by looking at their properties, you can use the typeof operator. If it produces 
  "object" for both values, you should do a deep comparison. But you have to take one 
  silly exception into account: by a historical accident, typeof null also produces "object".
*/

function deepEqual(obj1, obj2){
  var count1 = 0, count2 = 0;
  if(obj1 === obj2){
  	return true;
  }
  else if(obj1 == null || obj2 == null){
  	return false;
  }
  for(var x in obj1){
  	count1++;
  }
  for (var x in obj2){
  	count2++;
    if (!(x in obj1) || !deepEqual(obj1[x], obj2[x]))
      return false;
  }
  if(count1 != count2){
  	return false;
  }
  
  if(typeof obj1 === "object" && typeof obj2 === "object"){  
  	return true;
  }
  return false;
}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
