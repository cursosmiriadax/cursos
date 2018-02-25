$(function(){
	var num = $("#num"), memoria = $("#memoria"), acc = NaN, op;

	function operacionConAcumulador(acumulador, funcion) {
		acc = acumulador;
		num.html().split(",").forEach(function(x){ acc = funcion(acc, +x);});
		num.html(acc);
	}
	// funciones que habilitan el arrastrar y soltar
	memoria.draggable({
		axis: "y",
		revert: true
	});

	memoria.droppable({
		accept: ".pantalla",
		drop: function(event, ui) {
			memoria.html(num.html());
		}
	});
	
	$("#buttonToM").on("click", function() {
		memoria.html(num.html());
	});
	
	$("#buttonFromM").on("click", function() {
		num.html(memoria.html());
	});

	num.draggable({
		revert: true
	});

	num.droppable({
		accept: ".operadorMemoria",
		drop: function(event, ui) {
			num.html(memoria.html());
		}
	});

	
	// funciones de la calculadora
	num.on("click", function() {
		num.html("");
	});

	$("#mas").on("click", function() { 
		acc = num.html();
		op = function(op1, op2) { return op1 + op2;};
	});

	$("#menos").on("click", function() {
		acc = num.html();
		op = function(op1, op2) { return op1 - op2;};
	});

	$("#multiplica").on("click", function() {
		acc = num.html();
		op = function(op1, op2) {return op1 * op2;};
	});

	$("#divide").on("click", function() {
		acc = num.html();
		op = function(op1, op2) {return op1 / op2;};
	});

	$("#exponente").on("click", function() {
		acc = num.html();
		op = function(op1, op2) {return Math.pow(op1, op2);};
	});

	$("#cuadrado").on("click", function() {
		num.html( +num.html() * +num.html());
	});

	$("#inversa").on("click", function() {
		num.html( 1 / +num.html());
	});

	$("#raizcuadrada").on("click", function() {
		num.html(Math.sqrt(+num.html()));
	});

	$("#parte_entera").on("click", function() {
		if(+num.html() >= 0)
			num.html( Math.floor(+num.html()));
		else
			num.html( Math.ceil(+num.html()));
	});

	$("#potencia2").on("click", function() {
		num.html(Math.pow(2, num.html()))
	});

	$("#factorial").on("click", function() {
		var result = 1, facto = +num.html();
		for( i = 1; i <= facto; i++) result *= i;
		
		num.html(result);
	});

	$("#sumatorio").on("click", function() {
		operacionConAcumulador(0, function(op1, op2){return op1 + op2})
	});

	$("#productorio").on("click", function() {
		operacionConAcumulador(1, function(op1, op2){return op1 * op2})
	});

	$("#calcular").on("click", function() {
		num.html(op(+acc, +num.html()));
	});
});
