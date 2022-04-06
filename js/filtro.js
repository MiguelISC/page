$(function(){

	let yo = $('#yo').offset().top,
		conocimientos = $('#conocimientos').offset().top,
		experto = $('#experto').offset().top,
		contacto = $('#contacto').offset().top;

	window.addEventListener('resize', function(){
		let yo = $('#yo').offset().top,
		conocimientos = $('#conocimientos').offset().top,
		experto = $('#experto').offset().top,
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
			scrollTop: yo -100
		},600);
	});

	$('#enlace-conocimientos').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: conocimientos -100
		},600);
	});

	$('#enlace-experto').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: experto -100
		},600);
	});

	$('#enlace-contacto').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: contacto -100
		},600);
	});
});
