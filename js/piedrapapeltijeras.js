//Función para establecer el número aleatorio entre un mínimo y un máximo (ambos incluidos):
function aleatorio(min, max){
	var numero = Math.floor( Math.random() * (max - min + 1) + min);
	return numero;
};
//Variables del usuario para comparar elecciones:
var piedrau = 'piedra';
var papelu = 'papel';
var tijerasu = 'tijeras';
//Variables del ordenador para comparar elecciones:
var piedrao = 0;
var papelo = 1;
var tijeraso = 2;
//LLamada a función aletorio con las 3 opciones (0, 1 y 2):
var ordenador = aleatorio(0,2);
//Array con opciones del ordenador para mostrar por pantalla:
var opciones = ['piedra', 'papel', 'tijeras'];
//Estructura while infinita para evitar recargar la página:
while (1==1) {
  //Comienzo del juego, usuario y ordenador escogen:
var usuario = prompt('Escoge tu arma: piedra, papel o tijeras');
alert('ordenador ha elegido:'+ opciones[ordenador]);
//Estructura con la lógica del juego:
if(usuario == piedrau){
  alert('Has seleccionado piedra');
  if(ordenador == piedrao){
  	alert('Empate, nadie gana');
  }else if(ordenador == papelo){
    alert('Tú pierdes');
  }else if(ordenador == tijeraso){
    alert('Tú ganas');
  }
}else if(usuario == papelu){
    alert('Has seleccionado papel');
  if(ordenador == piedrao){
    alert('Tú ganas');
  }else if(ordenador == papelo){
    alert('Empate, nadie gana');
  }else if(ordenador == tijeraso){
    alert('Tú pierdes');
  }
}else if(usuario == tijerasu){
	 alert('Has seleccionado tijeras');
	if(ordenador == piedrao){
    alert('Tú pierdes');
  }else if(ordenador == papelo){
    alert('Tú ganas');
  }else if(ordenador == tijeraso){
    alert('Empate, nadie gana');
  }
}else{
	alert('No es correcto, elige piedra, papel o tijeras por favor');
}
}
