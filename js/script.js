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

function showTab(i){
	$('.inner_content>div').slideUp();
	$('.inner_content #in'+i).slideDown();
}
