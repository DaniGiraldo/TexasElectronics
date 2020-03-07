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
	
	$('#proposal').on('click', function(){
		$('.container').load('pages/project_proposal.html');
	});
}

console.log('main.js loaded');
