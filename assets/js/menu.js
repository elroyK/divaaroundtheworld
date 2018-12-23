// DESKTOP
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
// left: 37, up: 38, right: 39, down: 40,
// (Source: http://stackoverflow.com/a/4770179)
var keys = [35,36,39,40];

function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault)
      e.preventDefault();
  e.returnValue = false;  
}

function keydown(e) {
    for (var i = keys.length; i--;) {
        if (e.keyCode === keys[i]) {
            preventDefault(e);
            return;
        }
    }
}

function wheel(e) {
  preventDefault(e);
}

$(".hamburger").click(function(){
    $(".hamburger").toggleClass("is-active");
    $("nav").toggleClass("visible");
});

$("#menu a").click(function(e){
    $(".hamburger").toggleClass("is-active");
    $("nav").toggleClass("visible");
});

var scrollCount = 0;

$("#instanext").click(function() {
    var scrollValue = ($("#instafeed").scrollLeft() + $("#instafeed").width() + 15);
    var numItems = $("#instafeed").children('a').length;
    
    $("#instafeed").animate({
        scrollLeft: scrollValue
    }, 500);
    
    scrollCount = (scrollCount + 1) < (numItems / 4 - 1) ? (scrollCount + 1) : (numItems / 4 - 1);
    
    if (scrollCount === (numItems / 4 - 1))
        $("#instanext").removeClass("active");

    $("#instaprev").addClass("active");
})

$("#instaprev").click(function() {
    var scrollValue = ($("#instafeed").scrollLeft() - $("#instafeed").width() - 15);
    
    $("#instafeed").animate({
        scrollLeft: scrollValue
    }, 500);
    
    scrollCount = (scrollCount - 1) >= 0 ? (scrollCount - 1) : 0;

    if (scrollCount === 0)
        $("#instaprev").removeClass("active");

    $("#instanext").addClass("active");
})

if ($("instafeed").addEventListener) {
  $("instafeed").addEventListener('DOMMouseScroll', wheel, false);
}
$("#instafeed").onmousewheel = wheel;
$("#instafeed").onkeydown = keydown;