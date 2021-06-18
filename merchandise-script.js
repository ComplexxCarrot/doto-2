$(document).ready(function() {
    var slides1 = $('#skin-slides');
    var width1 = 250;
    var current1 = 1;
    if($(window).width() <= 800) {
        width1 = 125;
    }
    $('#next1').click(function(){
        if(current1 === 3) {    
            slides1.animate({'margin-left': -(width1 * 0)}, 1000);
            current1 = 1;
        } else {
            slides1.animate({'margin-left': -(width1 * current1)}, 1000)
            current1++;
        }
    })
    $('#prev1').click(function(){
        if(current1 === 1) {    
            slides1.animate({'margin-left': -(width1 * (2))}, 1000);
            current1 = 3;
        } else {
            // slides.animate({'margin-left': +(width * (2-current))}, 1000)
            if($(window).width() <= 800) {
                slides1.animate({'margin-left': '+=' +125}, 1000)
            } else {            
                slides1.animate({'margin-left': '+=' +250}, 1000)
            }
            current1--;
        }
    })
    var slides2 = $('#treasure-slides');
    var width2 = 250;
    var current2 = 1;
    if($(window).width() <= 800) {
        width2 = 125;
    }
    $('#next2').click(function(){
        if(current2 === 3) {    
            slides2.animate({'margin-left': -(width2 * 0)}, 1000);
            current2 = 1;
        } else {
            slides2.animate({'margin-left': -(width2 * current2)}, 1000)
            current2++;
        }
    })
    $('#prev2').click(function(){
        if(current2 === 1) {    
            slides2.animate({'margin-left': -(width2 * (2))}, 1000);
            current2 = 3;
        } else {
            // slides.animate({'margin-left': +(width * (2-current))}, 1000)
            if($(window).width() <= 800) {
                slides2.animate({'margin-left': '+=' +125}, 1000)
            } else {            
                slides2.animate({'margin-left': '+=' +250}, 1000)
            }
            current2--;
        }
    })
    var slides3 = $('#announcer-slides');
    var width3 = 250;
    var current3 = 1;
    if($(window).width() <= 800) {
        width3 = 125;
    }
    $('#next3').click(function(){
        if(current3 === 3) {    
            slides3.animate({'margin-left': -(width3 * 0)}, 1000);
            current3 = 1;
        } else {
            slides3.animate({'margin-left': -(width3 * current3)}, 1000)
            current3++;
        }
    })
    $('#prev3').click(function(){
        if(current3 === 1) {    
            slides3.animate({'margin-left': -(width3 * (2))}, 1000);
            current3 = 3;
        } else {
            // slides.animate({'margin-left': +(width * (2-current))}, 1000)
            if($(window).width() <= 800) {
                slides3.animate({'margin-left': '+=' +125}, 1000)
            } else {            
                slides3.animate({'margin-left': '+=' +250}, 1000)
            }
            current3--;
        }
    })
    var slides4 = $('#courier-slides');
    var width4 = 250;
    var current4 = 1;
    if($(window).width() <= 800) {
        width4 = 125;
    }
    $('#next4').click(function(){
        if(current4 === 3) {    
            slides4.animate({'margin-left': -(width4 * 0)}, 1000);
            current4 = 1;
        } else {
            slides4.animate({'margin-left': -(width4 * current4)}, 1000)
            current4++;
        }
    })
    $('#prev4').click(function(){
        if(current4 === 1) {    
            slides4.animate({'margin-left': -(width4 * (2))}, 1000);
            current4 = 3;
        } else {
            // slides.animate({'margin-left': +(width * (2-current))}, 1000)
            if($(window).width() <= 800) {
                slides4.animate({'margin-left': '+=' +125}, 1000)
            } else {            
                slides4.animate({'margin-left': '+=' +250}, 1000)
            }
            current4--;
        }
    })
})