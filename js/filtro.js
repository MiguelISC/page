$(function(){
	$('.filter').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
		let valor = $(this).attr('data-nombre');
		if (valor == 'todos') {
			$('.cont-work').show('1000');
		}else{
			$('.cont-work').not('.'+ valor).hide('1000');
			$('.cont-work').filter('.'+ valor).show('1000');
		}
	});

	let equipo = $('#yo').offset().top,
		servicio = $('#conocimientos').offset().top,
		trabajo = $('#experto').offset().top,
		contacto = $('#contacto').offset().top;

	window.addEventListener('resize', function(){
		let equipo = $('#yo').offset().top,
		servicio = $('#conocimientos').offset().top,
		trabajo = $('#experto').offset().top,
		contacto = $('#contacto').offset().top;		
	});

	$('#enlace-inicio').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: 0
		},600);
	});

	$('#enlace-yo').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: equipo -100
		},600);
	});

	$('#enlace-conocimientos').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: servicio -100
		},600);
	});

	$('#enlace-experto').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: trabajo -100
		},600);
	});

	$('#enlace-contacto').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: contacto -100
		},600);
	});
});