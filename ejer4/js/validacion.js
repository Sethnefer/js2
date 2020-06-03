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

function problema4(){
	var sal = document.all.Ejercicio4.salario_mensual.value;
	var ano =document.all.Ejercicio4.años.value;
	try{
		var salario = parseInt(sal);
		var anti = parseInt(ano);
		if (Number.isNaN(salario) || Number.isNaN(anti)) {
			throw alert("No es un salario");
		}else{
		if (salario> 1000000 || salario<0) {
			alert("No es un salario válido")
		}else if (anti<0 || anti>65) {
			alert("No es una antiguedad valida")
		}else if (anti<1) {
			var sueldo = ((salario * .05)*12);
		}else if (anti>= 1 & anti<2) {
			var sueldo = ((salario * .07)*12);
		}else if (anti>= 2 & anti<5) {
			var sueldo = ((salario * .1)*12);
		}else if (anti>= 5 & anti<10) {
			var sueldo = ((salario * .15)*12);
		}else{
			var sueldo = ((salario * .2)*12);
		}

		document.all.Ejercicio4.total.value = "$" + sueldo;
		}
	}catch(e){
		
	}
}