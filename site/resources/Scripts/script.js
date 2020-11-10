$(function(){
    $('a[href=""]').click(function(){
      return false;
    });
  });

jQuery('document').ready(function(){
    
	$('#main').on('click',function(){
        $('body').append(str1);
        $('#order_page').remove();
        $('#projects_page').remove();
        $('#news_page').remove();
})
	$('#news').on('click',function(){
		$('body').append(str2);
        $('#order_page').remove();
        $('#projects_page').remove();
        $('#main_page').remove();
})
	$('#projects').on('click',function(){
		$('body').append(str3);
        $('#order_page').remove();
        $('#news_page').remove();
        $('#main_page').remove();
})
	$('#order').on('click',function(){
		$('body').append(str4);
        $('#projects_page').remove();
        $('#news_page').remove();
        $('#main_page').remove();
})
	
    });
