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

	$('#insert_inventory').on('click', function(){
		$('.container').load('pages/utilities/inventory/insert_inventory.html');
	});

	$('#search_inventory').on('click', function(){
		$('.container').load('pages/utilities/inventory/search_inventory.html');
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
		var fb = $(this).val();
		var color = $('option[value='+fb+']').attr('color');
		$('#i_first_band').attr('value', '#' + color);
	});

	$('#second_band').on('change', function(){
		var sb = $(this).val();
		var color = $('option[value='+sb+']').attr('color');
		$('#i_second_band').attr('value', '#' + color);
	});

	$('#third_band').on('change', function(){
		var tb = $(this).val();
		var color = $('option[value='+tb+']').attr('color');
		$('#i_third_band').attr('value', '#' + color);
	});

}

function calculate_prices(){
	var value  = $('#value').val();
	var utility  = $('#utility').val();
	var iva  = $('#iva').val();

	var percentage_i = iva/100;
	var iva = value * percentage_i;

	var percentage_u = utility/100;
	var gain = value * percentage_u;

	var sale = parseInt(value) + parseInt(gain) + parseInt(iva);

	$('.sale').text(sale).css({
		'margin-left' : '10%',
		'font-weight' : 'bold'
	});

	$('.gain').text(gain).css({
		'margin-left' : '10%',
		'font-weight' : 'bold'
	});
}

function calculate_resistor(){
	var first_band  = $('#first_band').val();
	var second_band = $('#second_band').val();
	var third_band  = $('#third_band').val();
	
	var value1 = $('option[value='+first_band+']').attr('calc');
	var value2 = $('option[value='+second_band+']').attr('calc');
	var value3 = $('option[value='+third_band+']').attr('calc');
	
	var num = value1+value2;
	var resistor = num * value3;

	$('.calculate').text(resistor).css({
		'margin-left' : '10%',
		'font-weight' : 'bold'
	});
}

function inventory_events(){

	$('#search').on('click', function(){
		$('#search_form').removeClass('dn');
		$('#insert_form').addClass('dn');
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