$(document).ready(function() {
    var gallery = $('#movingGallery');
    var slide1 = { img: "../pictures/cat1.jpg", heading: "Meet Kitty", innerText: "Kitty is the cuddliest kitten in Varna.", redirect: "../pages/kitty.html" };
    var slide2 = { img: "../pictures/cat2.jpg", heading: "Meet Neko", innerText: "Neko is a favorite among the locals in Tokyo, Japan.", redirect: "../pages/neko.html" };
    var slide3 = { img: "../pictures/cat3.jpg", heading: "Meet Garry", innerText: "Garry is the cuddliest kitten in Plovdiv.", redirect: "../pages/garry.html" };
    var slides = [slide1, slide2, slide3];
    var heading = $("#galleryHeading");
    var gText = $("#galleryText");
    var bttn = $(".redirect");
    var i = 1;

    $("#left").click(function(event) {
        if (i > 0) {
            i--;

            var slide = slides[i];
            var img = "url('" + slide.img + "')";

            $(gallery).fadeOut('fast', function() {
                $(gallery).css("background-image", img);
                $(heading).text(slide.heading);
                $(gText).text(slide.innerText);
                $(bttn).attr('href', slide.redirect);
                $(gallery).fadeIn('fast');
            });

        }
    });

    $("#right").click(function(event) {
        if (i < 2) {
            i++;

            var slide = slides[i];
            var img = "url('" + slide.img + "')";

            $(gallery).fadeOut('fast', function() {
                $(gallery).css("background-image", img);
                $(heading).text(slide.heading);
                $(gText).text(slide.innerText);
                $(bttn).attr('href', slide.redirect);
                $(gallery).fadeIn('fast');
            });
        }
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() > 0) {
            $(gallery).slideUp('slow');
        } else {
            $(gallery).slideDown('slow');
        }
    });
});