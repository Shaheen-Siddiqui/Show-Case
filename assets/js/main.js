
$(document).ready(function () {
    "use strict";

/*----------------------------- Site Loader & Popup --------------------*/
$(window).on("load", function () { 
  $("#ms-overlay").fadeOut("slow"); 
});

/*----------------------------- Navigation section by section --------------------*/
$('.navs-link').on("click", function(){
  var section = $(this).attr('data-section');
  $('.header-overlay').fadeOut();
  $('header').removeClass("ms-open");
  setTimeout(
    function() 
    {
      $("."+section).siblings(".ms-slide").fadeOut().css({
        'z-index' : '11',
        'transform' : 'translateY(100%)'
      });
      $("#overlay_shine").fadeIn(50).css({
        'transform' : 'rotate(-30deg) translateY(-150%)',
        'display' : 'none',
        'z-index' : '0'
      });
    }, 1000);


  $("."+section).siblings(".ms-slide").fadeOut().css({
    'z-index' : '11',
    'transform' : 'translateY(-100%)'
  });    
  $("#overlay_shine").fadeIn(50).css({
    'transform' : 'rotate(-30deg) translateY(150%)',
    'z-index' : '0'
  });

  setTimeout(
    function() 
    {
  // $("."+section).css("display", "block");
    $("."+section).fadeIn().css({
      'transform' : 'translateY(0)',
      'display' : 'block !important',
      'z-index' : '12'
    });
    $("#overlay_shine").fadeIn(50).css({
      'transform' : 'rotate(-30deg) translateY(150%)',
      'z-index' : '1'
    });
    
  }, 500);

});

  /*--------------------- Mobile navigation sidebar JS -------------------------------- */
  $('.nav-toggle').on("click", function(){
    $('.header-overlay').fadeIn();
    $('header').addClass("ms-open");
  });

  $('.header-overlay, .nav-close').on("click", function(){
    $('.header-overlay').fadeOut();
    $('header').removeClass("ms-open");
  });

  /*--------------------- Potfolio for Mixit up -------------------------------- */
  var portfolioContent = $('.portfolio-content');
		portfolioContent.mixItUp();

  /*--------------------- Process bar for about skills -------------------------------- */
  $(document).ready(function() {
    startAnimation();
    function startAnimation(){
    $('.progress').each(function(){
    var width = $(this).attr('data-percent');
    // console.log(width);
    $(this).find('.progress-done').css('width', width); 
    });
    }                
  });

  /*--------------------- Replace all SVG images with inline SVG -------------------------------- */
  $(document).ready(function () {
    $('img.svg_img[src$=".svg"]').each(function () {
        var $img = $(this);
        var imgURL = $img.attr('src');
        var attributes = $img.prop("attributes");

        $.get(imgURL, function (data) {
            // Get the SVG tag, ignore the rest
            var $svg = $(data).find('svg');

            // Remove any invalid XML tags
            $svg = $svg.removeAttr('xmlns:a');

            // Loop through IMG attributes and apply on SVG
            $.each(attributes, function () {
                $svg.attr(this.name, this.value);
            });

            // Replace IMG with SVG
            $img.replaceWith($svg);
        }, 'xml');
    });
  });
  /*--------------------- Custom Cursor JS -------------------------------- */
  var ms_cursor = document.querySelector('.ms-cursor');
  var ms_cursorinner = document.querySelector('.ms-cursor-2');
  var a = document.querySelectorAll('a');

  document.addEventListener('mousemove', function(e){
    var x = e.clientX;
    var y = e.clientY;
    ms_cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
  });

  document.addEventListener('mousemove', function(e){
    var x = e.clientX;
    var y = e.clientY;
    ms_cursorinner.style.left = x + 'px';
    ms_cursorinner.style.top = y + 'px';
  });

  document.addEventListener('mousedown', function(){
    ms_cursor.classList.add('click');
    ms_cursorinner.classList.add('ms-cursorinnerhover')
  });

  document.addEventListener('mouseup', function(){
    ms_cursor.classList.remove('click')
    ms_cursorinner.classList.remove('ms-cursorinnerhover')
  });

  a.forEach(item => {
    item.addEventListener('mouseover', () => {
      ms_cursor.classList.add('ms-hover-cursor');
    });
    item.addEventListener('mouseleave', () => {
      ms_cursor.classList.remove('ms-hover-cursor');
    });
  })

  
});


