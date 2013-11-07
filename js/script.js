$(document).ready(function(){
	$('#main').load('main.html');
	var currPage = $('#info'); 	// открытая страница
	var index = 0; 				// номер пагинации
	
	$('.nav a').click(function(){
		currPage.parent().removeClass('active');
		openPage($(this).attr('data-target'));
		currPage = $(this);
		currPage.parent().addClass('active');
	});
	// НЕ РАБОТАЕТ!!!!!!
	$('.pagination a').click(function(){
		alert('fff');
		var i = $('.pagination a').index(this);
		$('.pag').css('display', 'none');
		$('.pag:eq('+i+')').css('display', 'block');
	});
});

function openPage(url){
	$('#main').fadeOut(function(){
		$('#main').load(url, function(){
			$('#main').fadeIn();
		});
	});
	
}
