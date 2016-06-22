$(document).ready(function() {
	var chance = Math.floor(Math.random() * 10);
	if(chance == 1) {
		cenafy();
	}
});

var cenafy = function() {
	setTimeout(function(){
		window.location.replace('http://instantcena.com/');
	}, 5000);
};
