/*
DESCRIPTION: Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######

*/

var temp = "";
for (var i = 0; i < 7; i++) {
	var temp = temp + "#";
	console.log(temp);
}
