$(document).ready(function(){
	$('#main').load('main.html');
	var currPage = $('#info'); 	// открытая страница
	
	$('.nav a').click(function(){
		currPage.parent().removeClass('active');
		openPage($(this).attr('data-target'));
		currPage = $(this);
		currPage.parent().addClass('active');
	});
});

function openPage(url){
	$('#main').fadeOut(function(){
		$('#main').load(url, function(){
			$('#main').fadeIn();
		});
	});
	
};

function showTab(i, t){
	$('.inner_content>div').slideUp().promise().done(function(){
		$('.inner_content #in'+i).slideDown();
		});
	//$('.inner_content #in'+i).slideDown({queue: true});
	//$('li .well').removeClass('well');
	//$('.thumbnails > li :eq('+(i-1)+')').addClass('well');
	}
