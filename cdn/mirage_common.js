// JavaScript Document


// FADEROLL

$(function(){
	$('a .faderoll').hover(
		function(){
			$(this).fadeTo(200, 0.7);
		},
		function(){
			$(this).fadeTo(200, 1.0);
		}
	);
});
