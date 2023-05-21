$(document).ready(function(){
	$('.carousel__inner').slick({
		speed: 1200,
		adaptiveHeight: true,
		prevArrow: '<button type="button" class="slick-prev"><img src="icons/leftArrow.png"></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="icons/rightArrow.png"></button>',
		responsive: [
			{
				breakpoint: 1024,
				settings: {
				  slidesToShow: 1,
				  slidesToScroll: 1,
				  infinite: true,
				  dots: true
			  }
			},
			{
				breakpoint: 600,
				settings: {
				  slidesToShow: 1,
				  slidesToScroll: 1
				}
			  },
			  {
				breakpoint: 480,
				settings: {
				  slidesToShow: 1,
				  slidesToScroll: 1
				}
			  }
		]
	  
	});
  });