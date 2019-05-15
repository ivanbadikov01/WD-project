$(document).ready(function() {
    var position = $(window).scrollTop();
    var dimmer = $("#dimmer");
    var opac = 0.35;


    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll > position) {
            if (opac < 1) {
                opac += 0.01;
            }
            $("#dimmer").fadeTo(5, opac);

        } else {
            if (opac > 0 && $(this).scrollTop() < 746) {
                opac -= 0.01;
                $("#dimmer").fadeTo(5, opac);
                
            }
        }

        if ($(window).scrollTop() == 0) {
            opac = 0.35;
            $(dimmer).fadeTo(300, opac);
            
        }

        position = scroll;
    });


});