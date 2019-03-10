$(document).ready(function (){
	var $overlay = $('<div id="overlay"></div>');
	var $image = $('<img>');
	var speed = 250;

	//An image to overlay
	$overlay.append($image);

	//Add overlay
	$("body").append($overlay);

	$("#gallery a").click(function (event) {
		event.preventDefault();
		var location = $(this).attr("href");

		$image.attr("src", location);

		$overlay.fadeIn();
	});

	$("#overlay").click(function (){
		$(this).fadeOut();
	});
});