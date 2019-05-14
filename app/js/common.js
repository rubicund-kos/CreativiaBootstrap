$(function() {

	$('.slider').slick({
		
		// autoplaySpeed: 2000,
		// autoplay: true,
		prevArrow: '<i class="fas fa-chevron-right"></i>',
		nextArrow: '<i class="fas fa-chevron-left"></i>'
	});

	$('.bars').on('click', function(event) {
		event.preventDefault();
		$('.navbar').toggleClass('navbar-active');		
	});
	$('.closeBtn').on('click', function(event) {
		event.preventDefault();
		$('.navbar').toggleClass('navbar-active');
	})

});
