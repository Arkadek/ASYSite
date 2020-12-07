$(document).ready(function(){
  $("ul li > a").click(function(){$("ul li > a").removeAttr("class");
  $(this).addClass("home")});
  $("ul li a").click(function(){var e=$(this.hash);
    $("body,html").animate({scrollTop:e.offset().top},700);
    return false
  });

  $(window).scroll(function(){if($(this).scrollTop()>500){
    $(".top").fadeIn()}else{$(".top").fadeOut()}});
    $(".top").click(function(){
      $("body,html").animate({scrollTop:0},500);
      return false
    })})

    function parallaxScroll(evt) {
      if (isFirefox) {
        //Set delta for Firefox
        delta = evt.detail * (-120);
      } else if (isIe) {
        //Set delta for IE
        delta = -evt.deltaY;
      } else {
        //Set delta for all other browsers
        delta = evt.wheelDelta;
      }
    
      if (ticking != true) {
        if (delta <= -scrollSensitivitySetting) {
          //Down scroll
          ticking = true;
          if (currentSlideNumber !== totalSlideNumber - 1) {
            currentSlideNumber++;
            nextItem();
          }
          slideDurationTimeout(slideDurationSetting);
        }
        if (delta >= scrollSensitivitySetting) {
          //Up scroll
          ticking = true;
          if (currentSlideNumber !== 0) {
            currentSlideNumber--;
          }
          previousItem();
          slideDurationTimeout(slideDurationSetting);
        }
      }
    }
    
    var mousewheelEvent = isFirefox ? "DOMMouseScroll" : "wheel";
    window.addEventListener(mousewheelEvent, _.throttle(parallaxScroll, 60), false);

/* Функция отвечающая за подчеркивание раздела
if (cur_pos >= top && cur_pos <= bottom) {
      nav.find('a').removeClass('active');
      sections.removeClass('active');
      
      $(this).addClass('active');
      nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
    }
  }
*/


