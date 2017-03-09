$(function(){
	
	$('.slider3').mobilyslider();
	
	$('.slider2').mobilyslider({
		transition: 'vertical',
		animationSpeed: 500,
		autoplay: true,
		autoplaySpeed: 3000,
		pauseOnHover: true,
		bullets: false
	});
	
	$('.slider1').mobilyslider({
		transition: 'fade',
		animationSpeed: 800,
		autoplay: true,
		autoplaySpeed: 7000,
		bullets: true,
		arrowsHide: false
	});
	
	
});
