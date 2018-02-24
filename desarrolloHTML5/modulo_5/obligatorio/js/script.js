$(function(){
	var num = $("#num"), acc = NaN, op;

	function operacionConAcumulador(acumulador, funcion) {
		acc = acumulador;
		num.val().split(",").forEach(function(x){ acc = funcion(acc, +x);});
		num.val(acc);
	}

	num.on("click", function() {
		num.val("");
	});

	$("#mas").on("click", function() { 
		acc = num.val();
		op = function(op1, op2) { return op1 + op2;};
	});

	$("#menos").on("click", function() {
		acc = num.val();
		op = function(op1, op2) { return op1 - op2;};
	});

	$("#multiplica").on("click", function() {
		acc = num.val();
		op = function(op1, op2) {return op1 * op2;};
	});

	$("#divide").on("click", function() {
		acc = num.val();
		op = function(op1, op2) {return op1 / op2;};
	});

	$("#exponente").on("click", function() {
		acc = num.val();
		op = function(op1, op2) {return Math.pow(op1, op2);};
	});

	$("#cuadrado").on("click", function() {
		num.val( +num.val() * +num.val());
	});

	$("#inversa").on("click", function() {
		num.val( 1 / +num.val());
	});

	$("#raizcuadrada").on("click", function() {
		num.val(Math.sqrt(+num.val()));
	});

	$("#parte_entera").on("click", function() {
		if(+num.val() >= 0)
			num.val( Math.floor(+num.val()));
		else
			num.val( Math.ceil(+num.val()));
	});

	$("#potencia2").on("click", function() {
		num.val(Math.pow(2, num.val()))
	});

	$("#factorial").on("click", function() {
		var result = 1, facto = +num.val();
		for( i = 1; i <= facto; i++) result *= i;
		
		num.val(result);
	});

	$("#sumatorio").on("click", function() {
		operacionConAcumulador(0, function(op1, op2){return op1 + op2})
	});

	$("#productorio").on("click", function() {
		operacionConAcumulador(1, function(op1, op2){return op1 * op2})
	});

	$("#calcular").on("click", function() {
		num.val(op(+acc, +num.val()));
	});
});
