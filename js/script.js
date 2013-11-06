$(document).ready(function(){

	$('#main').load('main.html');
	
	$('.nav a').click(function()
	{
		$('#main').load($(this).attr('data-target'));
	});
});

