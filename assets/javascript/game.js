var wins = 0;
var losses = 0;
var addition = 0;
var total = Math.floor((Math.random() * 100) + 19);

var blue = Math.floor((Math.random() * 12) + 1);
var pink = Math.floor((Math.random() * 12) + 1);
var purple = Math.floor((Math.random() * 12) + 1);
var white = Math.floor((Math.random() * 12) + 1);



var updateAddition = function () {
	$('.addition').empty();
	$('.addition').append(addition);

	$('#wins').empty();
	$('#wins').append(wins);

	$('#losses').empty();
	$('#losses').append(losses);
}


	var restart = function (){
		addition = 0;
		total = Math.floor((Math.random() * 100) + 19);

		$('.total').empty();
		$('.total').append(total);

		var blue = Math.floor((Math.random() * 12) + 1);
		var pink = Math.floor((Math.random() * 12) + 1);
		var purple = Math.floor((Math.random() * 12) + 1);
		var white = Math.floor((Math.random() * 12) + 1);
		updateAddition();
	}	

//still need to figure out why this function isn't updating wins and losses
var game = function (){
	if (addition === total) {
		wins++;
		alert("You won!!");
		restart();
	} 

	else if (addition > total) {
		losses++;
		alert("You lost!!");
		restart();
	} 

	else {
		updateAddition();
	}
}

$('.total').append(total);
$('.addition').append(addition);

$( document ).ready(function() {
	$('#blue').click(function(){
		addition = addition + blue;
		game();
	})

	$('#pink').click(function(){
		addition = addition + pink;
		game();
	})

	$('#purple').click(function(){
		addition = addition + purple;
		game();
	})

	$('#white').click(function(){
		addition = addition + white;
		game();
	})
});
