const typed = new Typed('.typed', {
	/*** strings: [
	'<i class="soyyo">Ingeniero.</i>', 
	'<i class="soyyo">Confiable.</i>', 
	'<i class="soyyo">Comprometido.</i>', 
	'<i class="soyyo">Tecnología.</i>'], FORMULA 1 ***/

	/// CONFIGURACION DE FalconMaster
    stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar. "ELIMINAR AL USAR LA FORMULA 1". 
	typeSpeed: 72, // Velocidad en mlisegundos para poner una letra,
	startDelay: 600, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 72, // Velocidad en milisegundos para borrrar una letra,
	smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto. "ELIMINAR AL USAR LA FORMULA 1".
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 1200, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: true, // Repetir el array de strings
	loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: true, // Mostrar cursor palpitanto
	cursorChar: '|', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato
});