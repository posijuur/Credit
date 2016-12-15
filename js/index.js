$(document).ready(function(){

	$('.bxslider').bxSlider({
	  minSlides: 2,
	  maxSlides: 2,
	  slideMargin: 10
	});
	
	$('.ii').data('action', '1');

	$('.accordion__header').click(function (e) {
        e.preventDefault();

        var data = $(this).data('action');
        
        if (data) {
        	return this;
        } else {
        	$('.accordion__header').removeData('action');
        	$(this).data('action', '1');
        	$('.accordion__link').removeClass('bgYellow');
	        $(this).find('.accordion__link').toggleClass('bgYellow');

          $('.accordion__header').removeClass('bgye');
          $(this).toggleClass('bgye');

	        $('.www').removeClass('accordion_sprite');
	        $(this).find('.www').toggleClass('accordion_sprite');	


	        
	        $(this).siblings('.accordion-body').slideToggle()
	            .parent().toggleClass('active')
	            .siblings().removeClass('active')            
	            .children('.accordion-body').slideUp(); 
        }       
  	});

  	$('.btnMenu').click(function(e) {
  		e.preventDefault();
  		$('.model').show(300);
      $('.header').hide()
  	});
  	$('.menu_x').click(function(e) {
  		e.preventDefault();
  		$('.model').hide(300);
      $('.header').show()
  	});

    $('.articleWrap_link').on('click', function(event) {
      event.preventDefault();
      var target = event.target;
      $('.articleWrap_bigText__mod').show('500');
      $(this).hide();
    });
  	
});