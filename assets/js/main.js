$('.container').load('pages/home.html');

function main (){
	/** */
	menu_options();
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
		$('.container').load('pages/utilities/inventory/views/insert_inventory.html');
	});

	$('#search_inventory').on('click', function(){
		$('.container').load('pages/utilities/inventory/views/search_inventory.html');
	});


	$('#sales').on('click', function(){
		$('.container').load('pages/utilities/sales.html');
	});

	$('#database').on('click', function(){
		scripts('database');
	});

	$('#table').on('click', function(){
		scripts('table');
	});

	$('#report').on('click', function(){
		scripts('report');
	});

	$('#backup').on('click', function(){
		scripts('backup');
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

		var code = $('#update_form').attr('code');
		var name = $('#update_form').attr('namep')
		var brand = $('#update_form').attr('brand')
		var price = $('#update_form').attr('price')
		var quantity = $('#update_form').attr('quantity')
		
		$('#u_code').attr('value',code);
		$('#u_name').attr('value',name);
		$('#u_brand').attr('value',brand);
		$('#u_price').attr('value',price);
		$('#u_quantity').attr('value',quantity);
	});

	$('#delete').on('click', function(){

		var table_results = $('#table_results'); 

		$answer = confirm('Seguro desea eliminar?');

		if($answer == true){
			data = {
				'function' 	: 'delete',
				'code' 		: $('#code').val()
			}
	
			$.ajax({
				url			: 'http://cied/pages/utilities/inventory/actions.php',
				cache		: false,
				data		: data,
				type		: 'POST',
				success		: function(result){
					if(result == 'success'){
						alert('Producto eliminado');
					}else if(result == 'error'){
						alert('Producto no eliminado');
					}
					table_results.hide();
				},
				error 		: function(){
					alert('Producto no encontrado');
				}	
			});
		}
	});
}

function scripts(type = ''){
	
	$.ajax({
		url			: 'http://cied/pages/admin/execute_scripts.php',
		cache		: false,
		data		: {
			'type'	: type
		},
		type		: 'POST',
		success		: function(result){
			console.log(result);
			alert('Script ejecutado');
		},
		error 		: function(){
			alert('Script no ejecutado');
		}	
	});
}

function insert_products(){

	data = {
		'function' 	: $('#function').val(),
		'code' 		: $('#code').val(),
		'name' 		: $('#name').val(),
		'brand' 	: $('#brand').val(),
		'price' 	: $('#price').val(),
		'quantity' 	: $('#quantity').val(),
	}

	$.ajax({
		url			: 'http://cied/pages/utilities/inventory/actions.php',
		cache		: false,
		data		: data,
		type		: 'POST',
		success		: function(result){
			
			if(result == 'success'){
				alert('Producto ingresado');
			}else if(result == 'error'){
				alert('Producto no ingresado, es posible que intente ingresar un código ya existente.');
			}
		},
		error 		: function(){
			alert('Producto no ingresado, puede ser que intenta ingresar un código ya existente.');
		}	
	});
}

function search_products(){
	var table_results = $('#table_results'); 
	
	if($('#code').val() == ''){
		alert('Es necesario enviar un código.')
	}else{
		data = {
			'function' 	: $('#function_s').val(),
			'code' 		: $('#code').val()
		}

		$.ajax({
			url			: 'http://cied/pages/utilities/inventory/actions.php',
			cache		: false,
			data		: data,
			type		: 'POST',
			success		: function(html){
				table_results.append(html);

				var code = $('#td_code').text();
				var name = $('#td_name').text();
				var brand = $('#td_brand').text();
				var price = $('#td_price').text();
				var quantity = $('#td_quantity').text();

				$('#update_form').attr('code', code);
				$('#update_form').attr('namep',name);
				$('#update_form').attr('brand',brand);
				$('#update_form').attr('price',price);
				$('#update_form').attr('quantity',quantity);
			},
			error 		: function(){
				alert('Producto no encontrado');
			}	
		});
	}
}

function update_products(){
	
	data = {
		'function' 	: $('#function_u').val(),
		'code' 		: $('#u_code').val(),
		'name' 		: $('#u_name').val(),
		'brand' 	: $('#u_brand').val(),
		'price' 	: $('#u_price').val(),
		'quantity' 	: $('#u_quantity').val(),
	}

	$.ajax({
		url			: 'http://cied/pages/utilities/inventory/actions.php',
		cache		: false,
		data		: data,
		type		: 'POST',
		success		: function(result){
			if(result == 'success'){
				alert('Producto actualizado');
			}else if(result == 'error'){
				alert('Producto no actualizado');
			}
		},
		error 		: function(){
			alert('Producto no actualizado');
		}	
	});
}

console.log('main.js loaded');