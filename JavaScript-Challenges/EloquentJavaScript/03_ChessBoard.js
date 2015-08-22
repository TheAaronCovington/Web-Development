/*
  DESCRIPTION: Write a program that creates a string that represents an 8×8 grid,
  using newline characters to separate lines. At each position of the grid there
  is either a space or a “#” character. The characters should form a chess board.
  Passing this string to console.log should show something like this:
  
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #

*/
var temp = "";
var flag = 0;
for(var i = 1; i <= 64; i++){
  	if(flag == 0){
    	temp = temp + " ";
      	flag = 1;
    }
  	else if(flag == 1){
    	temp = temp + "#";
      	flag = 0;	
    }
    if(i % 8 == 0){
    	temp = temp + "\n";
      	if(flag == 0){
        	flag = 1;
        }
      	else{
        	flag = 0;
        }
    }	
}
	console.log(temp);
