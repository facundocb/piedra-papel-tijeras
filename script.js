let opcion_jugador = prompt("piedra, papel o tijeras?").toUpperCase();
let resultado = document.getElementById('resultado');  

opcion_computadora = Math.floor( Math.random() * 3 + 1);

const lista = ['0','PIEDRA','PAPEL','TIJERAS']

opcion_j_num = lista.indexOf(opcion_jugador);

 
function jugar(opcion1, opcion2) {

  if(opcion1 == opcion2){ return('empate') }
  else if(opcion1 == 1 && opcion2 == 2){ return('Ganaste!') }
  else if(opcion1 == 1 && opcion2 == 3){ return('perdiste!') }
  else if(opcion1 == 2 && opcion2 == 1){ return('ganaste!') }
  else if(opcion1 == 2 && opcion2 == 3){ return('perdiste!') }
  else if(opcion1 == 3 && opcion2 == 1){ return('perdiste!') }
  else if(opcion1 == 3 && opcion2 == 2){ return('ganaste!') }
  else{
    return('invalidez.')
  }

}

console.log(opcion_j_num)
console.log(opcion_computadora);
resultado.innerHTML = jugar(opcion_j_num, opcion_computadora);



