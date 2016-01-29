$(function() {

    var duracion = 200;
    var salto = "10";

    $('.icono').hover(function() {
        $(this).animate({ top : "-=" + salto }, duracion);            
    }, function() {
        $(this).animate({ top : "+=" + salto }, duracion);
    });

    $('#donativo').hover(function() {
        $(this).animate({ top : "-=" + 5 }, duracion);            
        $('#bocadillo').fadeIn(500);            
    }, function() {
        $(this).animate({ top : "+=" + 5 }, duracion);
        $('#bocadillo').fadeOut(500);            
    });




});

