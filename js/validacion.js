function validarn(e){
	var teclado = (document.all)?e.keyCode:e.which;
	if(teclado == 8)return true;
	var patron = /[0-9\d.-]/;
	var tec = String.fromCharCode(teclado);
	return patron.test(tec);
}
function validarente(e){
	var teclado = (document.all)?e.keyCode:e.which;
	if(teclado == 8)return true;
	var patron = /[0-9]/;
	var tec = String.fromCharCode(teclado);
	return patron.test(tec);	
}
function validardeci(e){
	var teclado = (document.all)?e.keyCode:e.which;
	if(teclado == 8)return true;
	var patron = /[0-9\d.]/;
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
	if (corec & punto>1 || guion >1) {
		corec = false;
		alert("Solo números")
		return(false);
	}
	if (corec &contador < num1.length) {
		alert("No, te equivocaste ):")

	}else if (num1.length>10) {
		alert("No tantos números")
		corec = false;
		return(false);
	}
	

//validar el campo de n2
	var checkOk2 = "1234567890.-"
	var contador2 = 0;
	var punto2 = 0;
	var guion2 = 0;
	var corec2 = true;

	for (var i = 0; i < num2.length;i++) {
		var ok2 = num2.charAt(i);
		for(var j = 0; j< checkOk.length; j++){
			if (ok2 == checkOk.charAt(j)) {
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
	if (corec2 & punto2>1 || guion2 >1) {
		corec2 = false;
		alert("Solo números")
		return(false);
	}
	if (corec2 & contador < num1.length) {
		alert("No, te equiovaste ):")
	}else if (num2.length>10) {
		alert("No tantos números")
		corec2 = false;
		return(false);
	}
	

	try{
		var n1 = parseFloat(num1);
		var n2 = parseFloat(num2);
		//Evaluamos si es NaH
		if (Number.isNaN(n1) || Number.isNaN(n2)) {
			throw alert("Uy, no es un número válido");
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
	}catch(e){
		
	}
}


function problema2(){
	var num1 = document.Ejercicio2.numero1.value;
	var num2 = document.Ejercicio2.numero2.value;
	var num3 = document.Ejercicio2.numero3.value;
	
	var checkOk = "1234567890.-"
	var contador = 0;
	var punto = 0;
	var guion = 0;
	var corec = true;

	//Validar el campo del n1
	for (var i = 0; i < num1.length;i++) {
		var ok = num1.charAt(i);
		for(var j = 0; j< num1.length; j++){
			if (ok == num1.charAt(j)) {
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
	if (punto>1 || guion >1) {
		corec = false;
		alert("Solo números")
		return(false);
	}
	if (num1.length>10) {
		alert("No tantos números")
		corec = false;
		return(false);
	}
	//Validar el campo de n2
	var checkOk2 = "1234567890.-"
	var contador2 = 0;
	var punto2 = 0;
	var guion2 = 0;
	var corec2 = true;

	for (var i = 0; i < num2.length;i++) {
		var ok2 = num2.charAt(i);
		for(var j = 0; j< num2.length; j++){
			if (ok2 == num2.charAt(j)) {
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
	if (punto2>1 || guion2 >1) {
		corec2 = false;
		alert("Solo números")
		return(false);
	}
	if (num2.length>10) {
		alert(" Que no tantos números ):")
		corec2 = false;
		return(false);
	}

	var checkOk3 = "1234567890.-"
	var contador3 = 0;
	var punto3 = 0;
	var guion3 = 0;
	var corec3 = true;

	for (var i = 0; i < num3.length;i++) {
		var ok3 = num3.charAt(i);
		for(var j = 0; j< num3.length; j++){
			if (ok3 == num3.charAt(j)) {
				contador3 +=1;
			}
		}
		if (ok3 == '.') {
			punto3 +=1;
		}
		if (ok3 == '-') {
			guion3 +=1;
		}
	}
	if (punto3>1 || guion3 >1) {
		corec3 = false;
		alert("Uy, por fa solo números aquí, ¿va?")
		return(false);
	}
	if (num3.length>10) {
		alert("Uy, espera, por fa no tantos números")
		corec3 = false;
		return(false);
	}
	try{
		var n1 = parseFloat(num1);
		var n2 = parseFloat(num2);
		var n3 = parseFloat(num3);
		if (Number.isNaN(n1) || Number.isNaN(n2)|| Number.isNaN(n3) ) {
			throw altert("No es un número valido");
		}else{
		if (n1>n2 & n1>n3) {
			document.all.Ejercicio2.resultado.value = n1;
		}else if(n2>n3){
			document.all.Ejercicio2.resultado.value = n2;
		}else{
			document.all.Ejercicio2.resultado.value = n3;
		}

		}
	}catch(e){
		alert("No es un número valido")
	}
}
function problema3(){
	/*Horas totales*/var hora_t = document.all.Ejercicio3.horas_t.value;	
	var pagas = document.all.Ejercicio3.paga.value;
	try{
	var ht = parseInt(hora_t);
	var pagar = parseFloat(pagas);	
		if (Number.isNaN(ht) || Number.isNaN(pagar)) {
			throw altert("No son horas validas");
		}else{
		if (ht<0 || ht>100) {
			alert("No son horas válidas")
		}else if (ht<=40) {
			var sueldo = ht*pagar;
			document.all.Ejercicio3.horas_extras.value = 0;
			document.all.Ejercicio3.horas_doble.value = 0;
			document.all.Ejercicio3.horas_triple.value = 0;
		}else if(ht>40 & ht<49){
			var sueldo = ((ht-40)*(2*pagar)) + (40*pagar);
			document.all.Ejercicio3.horas_extras.value = ht-40;
			document.all.Ejercicio3.horas_doble.value = ht-40;
			document.all.Ejercicio3.horas_triple.value = 0;
		}else{
			var sueldo = (((ht-48)*(3*pagar))+ (8*(2*pagar))+ (40*pagar));
			document.all.Ejercicio3.horas_extras.value = ht-40;
			document.all.Ejercicio3.horas_doble.value = 8;
			document.all.Ejercicio3.horas_triple.value = ht-48; 
		}

		document.all.Ejercicio3.total.value = "$"+sueldo;
		}
	}catch(e){
		alert("No son horas válidas")
	}
}



function alerta(){
	alert("Uy, no, si se puede, tu puedes :3")
}
