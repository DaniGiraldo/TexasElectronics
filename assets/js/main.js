$('.container').load('pages/home.html');

function main (){
	/** */
	menu_options();
}

function menu_options(){
	/** Home */
	$('#home').on('click', function(){
		$('.container').load('pages/home.html');
	});

	$('.img_logo').on('click', function(){
		$('.container').load('pages/home.html');
	});

	/** Presaberes */
	$('#html').on('click', function(){
		$('.container').load('pages/presaberes/html_description.html');
	});

	$('#css').on('click', function(){
		$('.container').load('pages/presaberes/css_description.html');
	});

	/** Proposal */
	$('#proposal').on('click', function(){
		$('.container').load('pages/proposal/project_proposal.html');
	});

	$('#introduction').on('click', function(){
		$('.container').load('pages/proposal/introduction.html');
	});

	$('#conclusions').on('click', function(){
		$('.container').load('pages/proposal/conclusions.html');
	});

	$('#bibliography').on('click', function(){
		$('.container').load('pages/proposal/bibliography.html');
	});

	/** Utilities */
	$('#prices').on('click', function(){
		$('.container').load('pages/utilities/prices.html');
	});

	$('#resistors').on('click', function(){
		$('.container').load('pages/utilities/resistors.html');
	});

	$('#inventory').on('click', function(){
		$('.container').load('pages/utilities/inventory.html');
	});

	$('#sales').on('click', function(){
		$('.container').load('pages/utilities/sales.html');
	});

	$('#admin').on('click', function(){
		$('.container').load('pages/utilities/admin.html');
	});
}

function resistor_events(){
	
	$('#first_band').on('change', function(){
		var color = $(this).val();
		$('#i_first_band').attr('value', color);
	});

	$('#second_band').on('change', function(){
		var color = $(this).val();
		$('#i_second_band').attr('value', color);
	});

	$('#third_band').on('change', function(){
		var color = $(this).val();
		$('#i_third_band').attr('value', color);
	});
	
}

function inventory_events(){
	console.log('events loaded');

	$('#search').on('click', function(){
		console.log('entré');
		$('#search_form').removeClass('dn');
		$('#insert_form').addClass('dn');
		$('#update_form').addClass('dn');
	});

	$('#insert').on('click', function(){
		$('#insert_form').removeClass('dn');
		$('#search_form').addClass('dn');
		$('#update_form').addClass('dn');
	});

	$('#update').on('click', function(){
		$('#insert_form').addClass('dn');
		$('#search_form').addClass('dn');
		$('#update_form').removeClass('dn');
	});

	$('#delete').on('click', function(){
		confirm('Seguro desea eliminar?');
	});
}

console.log('main.js loaded');