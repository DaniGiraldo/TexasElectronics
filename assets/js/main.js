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

	$('#proposal_intro').on('click', function(){
		$('.container').load('pages/project_proposal.html');
	});

	$('#introduction').on('click', function(){
		$('.container').load('pages/introduction.html');
	});

	$('#conclusions').on('click', function(){
		$('.container').load('pages/conclusions.html');
	});

	$('#bibliography').on('click', function(){
		$('.container').load('pages/bibliography.html');
	});
}

console.log('main.js loaded');