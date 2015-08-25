/*
*/

var $overlay = $('<div id="overlay"><div></div></div>'); //creates jquery obj, $ is naming convention
var $image = $("<img>");
var $caption = $("<p></p>");
var $index= 0; //Will keep track of image endex from prev/next
var $galleryLength = $("#imageGallery li").length; //store total number of images

//Setup overlay
$overlay.children("div").append($image);//Adds image to the overlay jquery object
$overlay.children("div").append($caption); //Adds caption to the overlay, AFTER the image.
$overlay.children("div").append("<button id='btnPrev'><h4> < </h4></button>"); //create prev button
$overlay.children("div").append("<button id='btnNext'><h4> > </h4></button>"); //create next button
$("body").append($overlay); //adds tag to end of <body>, css for overlay contained in <div>

//updates the image
var updateImage = function(imageLoc, captionText){
	$image.attr("src", imageLoc); //sets $image object to loc of img so its added to overlay
	$caption.text(captionText); //Adds alt attribute text to caption so its displayed below img
};

//captures the click event, when an image is clicked
$("#imageGallery a").click(function(event){
	event.preventDefault(); //prevents browser frop opening img in new window
	var imageLoc = $(this).attr("href"); //stores attribute in var. ex: "images/space-juice.png"
	var captionText = $(this).children("img").attr("alt"); //Store text from alt attr of img's

	$index = $(this).parent().index(); //update index to current selected image
	console.log($index);
	updateImage(imageLoc, captionText); //Passes loc and caption info to update image
	$overlay.slideDown(imageLoc); //display overlay when img clicked	
});

//Button Click Events
$("#btnNext").click(function(event){
	button(true);
});

$("#btnPrev").click(function(event){
	button(false);
});

var button = function(next){

	if(next == true){ //if next is true move forward an image
		$index++;
	}
	else{ //otherwise go to previous image
		$index--;
	}

	//If index is out of bounds reset to first image or last image as needed
	if($index < 0){
		$index = $galleryLength - 1;
	}
	else if($index > $galleryLength - 1){ 
		$index = 0;
	}

	//selects the element by index and then gets the link to the image
	var newImage = $("#imageGallery li").get($index).getElementsByTagName("a");
	//Store link information in variables
	var imageLoc = $(newImage).attr("href");
	var captionText = $(newImage).children("img").attr("alt");
	//Update the current image with new image information
	updateImage(imageLoc, captionText);

};

//captures the click event, when the overlay is clicked
$overlay.click(function(event){
	if(event.target.id == "overlay"){
		$(this).slideUp("fast");
	}
});
