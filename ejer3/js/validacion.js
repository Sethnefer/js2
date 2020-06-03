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
function problema3(){
	/*Horas totales*/var hora_t = document.all.Ejercicio3.horas_t.value;	
	var pagas = document.all.Ejercicio3.paga.value;
	

	try{

	var ht = parseInt(hora_t);
	var pagar = parseFloat(pagas);	
		if (Number.isNaN(ht) || Number.isNaN(pagar)) {
			throw altert("No son horas válidas");

		}else{
		if (ht<0 || ht>500) {
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