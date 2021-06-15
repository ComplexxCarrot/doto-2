$(document).ready(function() {
    var slides = $('#IS');
    var width = 800;
    var current = 1;
    
    $('#next').click(function(){
        if(current === slides.children().length) {    
            slides.animate({'margin-left': -(width * 0)}, 1000);
            current = 1;
        } else {
            slides.animate({'margin-left': -(width * current)}, 1000)
            current++;
        }
    })
    $('#prev').click(function(){
        if(current === 1) {    
            slides.animate({'margin-left': -(width * (slides.children().length-1))}, 1000);
            current = slides.children().length;
        } else {
            // slides.animate({'margin-left': +(width * (2-current))}, 1000)
            slides.animate({'margin-left': '+=' +800}, 1000)
            current--;
        }
    })
    $('#intelligence').hover(function(){
        $('#overlay4').fadeIn();
        $('#txt11').fadeIn();
    })
    $('#intelligence').mouseleave(function(){
        $('#overlay4').fadeOut();
        $('#txt11').fadeOut();
    })

    $('#Agility').hover(function(){
        $('#overlay5').fadeIn();
        $('#txt12').fadeIn();
    })
    $('#Agility').mouseleave(function(){
        $('#overlay5').fadeOut();
        $('#txt12').fadeOut();
    })

    $('#Strength').hover(function(){
        $('#overlay6').fadeIn();
        $('#txt13').fadeIn();
    })
    $('#Strength').mouseleave(function(){
        $('#overlay6').fadeOut();
        $('#txt13').fadeOut();
    })
})