/*
  DESCRIPTION: This is just an example of a simple drop down menu for a mobile device that I worked
  through in a TreeHouse course.  Didn't bother saving all the html files since this is just a code
  example.
*/
//create a select and append to menu
var $select = $("<select></select>");
$("#menu").append($select);

//cycle over menu links
$("#menu a").each(function(){
	var $anchor = $(this);
	var $option = $("<option></option>");

//Deal with selected options depending on the current page
	if($anchor.parent().hasClass("selected")){
		$option.prop("selected", true);

	}
//options value is the href
	$option.val($anchor.attr("href"));

//options text is the text of the link
	$option.text($anchor.text());
//Append option to select menu
	$select.append($option);
});

//When item on menu is selected go to that page
$select.change(function(){
	window.location = $select.val();
});
