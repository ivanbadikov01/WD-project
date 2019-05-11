$(document).ready(function() {
    var gallery = $('#movingGallery');
    var images = ["../pictures/cat1.jpg", "../pictures/cat2.jpg", "../pictures/cat3.jpg"];
    var i = 1;

    $("#left").click(function(event) {
        console.log(i);
        if (i > 0) {
            i--;

            var img = "url('" + images[i] + "')";
            $(gallery).fadeOut('fast', function() {
            
                $(gallery).css("background-image", img);
            	$(gallery).fadeIn('fast');
            });

        }
    });

    $("#right").click(function(event) {
        console.log(i);
        if (i < 2) {
            i++;
            $(gallery).fadeOut('fast');
            var img = "url('" + images[i] + "')";
            console.log(img);
            $('#movingGallery').css("background-image", img);
            $('#movingGallery').fadeIn('fast');
        }
    });


});