$(document).ready(function() {
	var chance = Math.floor(Math.random() * 10);
	if(chance == 1) {
		cenafy();
	}
});

var cenafy = function() {
	$('body').append('<div style="width:100%;height:100%;top:0;left:0;background-color:#000;position: fixed;z-index: 999999999;opacity:0;" id="itsJohnCena"></div>');
	$('#itsJohnCena').animate({
		opacity: 1,
	}, 2000, function() {
		window.location.replace('http://instantcena.com/');
	});
};
