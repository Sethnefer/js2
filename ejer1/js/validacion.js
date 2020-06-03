function validarn(e){
	var teclado = (document.all)?e.keyCode:e.which;
	if(teclado == 8)return true;
	var patron = /[0-9\d.-]/;
	var tec = String.fromCharCode(teclado);
	return patron.test(tec);
}

function numero(){


	var num1 = document.Ejercicio1.numero1.value;
	var num2 = document.Ejercicio1.numero2.value;

	var checkOk = "1234567890.-"
	var contador = 0;
	var punto = 0;
	var guion = 0;
	var corec = true;

	//Validar el campo del n1

	for (var i = 0; i < num1.length;i++) {
		var ok = num1.charAt(i);
		for(var j = 0; j< checkOk.length; j++){
			if (ok == checkOk.charAt(j)) {
				contador +=1;
			}
		}
		if (ok == '.') {
			punto +=1;
		}
		if (ok == '-') {
			guion +=1;
		}		
	}

	if (corec &contador < num1.length) {
		alert("Solo numeros en el espacio 1")

	}else if (num1.length>10) {
		alert("No tantos números en el primer número plox")
		corec = false;
		return(false);
	}else if (corec & punto>1) {
		corec = false;
		alert("No más de un punto en el primer número")
		return(false);
	}else if (corec & guion>1) {
		corec = false;
		alert("No más de un guión en el primer número");
	}
	
	
	

//validar el campo de n2
	var checkOk2 = "1234567890.-"
	var contador2 = 0;
	var punto2 = 0;
	var guion2 = 0;
	var corec2 = true;

	for (var i = 0; i < num2.length;i++) {
		var ok2 = num2.charAt(i);
		for(var j = 0; j< checkOk2.length; j++){
			if (ok2 == checkOk2.charAt(j)) {
				contador2 +=1;
			}
		}
		if (ok2 == '.') {
			punto2 +=1;
		}
		if (ok2 == '-') {
			guion2 +=1;
		}
	}
	if (corec2  &contador2 < num2.length) {
		alert("Solo números en el espacio 2")

	}else if (num2.length>10) {
		alert("No tantos números en el segundo numero")
		corec2 = false;
		return(false);
	}else if (corec2 & punto2>1) {
		corec2 = false;
		alert("No más de un punto en el segundo número")
		return(false);
	}else if (corec2 & guion2>1) {
		corec2 = false;
		alert("No más de un guión en el segundo número");
	}
	

	
		var n1 = parseFloat(num1);
		var n2 = parseFloat(num2);
		//Evaluamos si es NaH
		if (Number.isNaN(n1) || Number.isNaN(n2)) {
			throw alert("Uy,no es un número válido");
		}else if (n1.length > 10 || n2.length>10) {
			alert("No tantos valores")
		}
		else{
			if (n1 == n2) {
				var operacion = n1*n2;
			}else if(n1 > n2){
				var operacion = n1-n2;
			}else{
				var operacion = n1+ n2;
			}
			document.Ejercicio1.resultado.value = operacion;
		}
	
}