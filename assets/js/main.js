$('.container').load('pages/home.html');

function main (){
	$('#home').on('click', function(){
		$('.container').load('pages/home.html');
	});

	$('.img_logo').on('click', function(){
		$('.container').load('pages/home.html');
	});

	$('#presaberes').on('click', function(){
		$('.container').load('pages/html_css_description.html');
	});
	
	$('.proposal').on('click', function(){
		$('.container').load('pages/project_proposal.html');
	});

	$('#cover_page').on('click', function(){
		$('.container').load('pages/cover_page.html');
	});

	$('#introduction').on('click', function(){
		$('.container').load('pages/introduction.html');
	});

	$('#conclutions').on('click', function(){
		$('.container').load('pages/conclutions.html');
	});

	$('#bibliography').on('click', function(){
		$('.container').load('pages/bibliography.html');
	});
}

console.log('main.js loaded');
