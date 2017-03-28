

// jQuery to collapse the navbar on scroll
function collapseNavbar() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
}

$(window).scroll(collapseNavbar);
$(document).ready(collapseNavbar);

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
  if ($(this).attr('class') != 'dropdown-toggle active' && $(this).attr('class') != 'dropdown-toggle') {
    $('.navbar-toggle:visible').click();
  }
});





TweenMax.to(".brand-heading", 3,{
  left:600, backgroundColor:"black",
  padding:20,
  borderColor:"blue",
  borderRadius:26,

 });
 TweenMax.to(".brand-heading", 3,{
   x:0,  rotation:360,
   scale:0.5, ease: Back.easeInOut.config(1.7), y: 0 ,
   opacity:0,
   });


  TweenMax.staggerFrom(".intro-text" , 1, { delay:2, scale:0,}, 1);


  TweenMax.staggerFrom(".intro-text2", 1, { delay:2.5, scale:0}, 1);


  $(".btn").click(function(){
    TweenMax.staggerTo(".intro-text , .intro-text2", 0.5, {opacity:0, y:-100, ease:Back.easeIn}, 0.1);
  });
