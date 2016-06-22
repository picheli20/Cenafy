$(document).ready(function() {
	var chance = Math.floor(Math.random() * 20);
	if(chance == 1 || chance == 7) {
		cenafy();
	}
});

var generateHTML = function() {
	var html = "<video autoplay loop style='height: 100vh; width: 100vw'><source src='https://raw.githubusercontent.com/Roystbeef/picheli20/master/cena.webm' type='video/webm'><source src='https://raw.githubusercontent.com/Roystbeef/picheli20/master/cena.mp4' type='video/mp4'></video>";
	return html;
};

var cenafy = function() {
	$('body').append('<div style="width:100%;height:100%;top:0;left:0;background-color:#000;position: fixed;z-index: 999999999;opacity:0;" id="itsJohnCena"></div>');
	$('#itsJohnCena').animate({
		opacity: 1,
	}, 5000, function() {
		var html = generateHTML();
		$('body').html(html);
		document.body.style.backgroundColor = "black";
		setTimeout(function() { // Wait 20 seconds for cena to finish
			window.location.replace(document.URL);
		}, 20000);
	});
};
