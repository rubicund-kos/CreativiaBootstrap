$(function() {

	//HEADER SLICK SLIDER
	$('.slider').slick({
		
		autoplaySpeed: 2000,
		autoplay: true,
		prevArrow: '<i class="fas fa-chevron-right"></i>',
		nextArrow: '<i class="fas fa-chevron-left"></i>'
	});

	//КНОПКА, ДЛЯ АКТИВАЦИИ МЕНЮ НА МОБИЛЬНЫХ УСТРОЙСТВАХ
	$('.bars').on('click', function(event) {
		event.preventDefault();
		$('.navbar').toggleClass('navbar-active');		
	});

	//КНОПКА ЗАКРЫТИЯ АДАПТИВНОГО МЕНЮ
	$('.closeBtn').on('click', function(event) {
		event.preventDefault();
		$('.navbar').toggleClass('navbar-active');
	});
	
	//ACCORDEON
	
	//оставляем активной только первую вкладку аккордеона
	// $('.accordeon_title:not(.accordeon_title-active)').next().slideUp(); 

	$('.accordeon_title').on('click', function() {
		$(this).next().slideToggle(); // Скрываем или раскрываем вкладку аккордеона
		$(this).toggleClass('accordeon_title-active'); // Добавляем/Удаляем active-класс, отвечающий за акцентный цвет и иконки +/-
		$('.accordeon_title').not(this).next().slideUp(); // Сворачиваем другие вкладки слайдера, кроме активной.
		$('.accordeon_title').not(this).removeClass('accordeon_title-active'); // У других вкладок удаляем акцентный цвет и меняем значек +/-
	});


});
