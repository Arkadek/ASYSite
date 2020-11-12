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

/*var sections = $('section')
    , nav = $('nav')
    , nav_height = nav.outerHeight();
  
  $(window).on('scroll', function () {
    var cur_pos = $(this).scrollTop();
    
    sections.each(function() {
      var top = $(this).offset().top - nav_height,
          bottom = top + $(this).outerHeight();
      
      if (cur_pos >= top && cur_pos <= bottom) {
        nav.find('a').removeClass('class');
        div.removeClass('class');
        
        $(this).addClass('home');
        nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('home');
      }
    });
  });
  
  nav.find('a').on('click', function () {
    var $el = $(this)
      , id = $el.attr('href');
    
    $('html, body').animate({
      scrollTop: $(id).offset().top - nav_height
    }, 500);
    
    return false;
  });
*/

