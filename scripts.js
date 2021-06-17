//*************** CONSTANTES ********************/




//*************** VARIABLES ********************/
//variable jugador actual ( 0: nueva partida , 1: blancas , 2: negras )
var turnoJugador = 0;

var posicionMarcada = "ninguna";

var mensaje = "";


//*************** LISTENER EN TABLERO ***********************/

// Obtener la referencia del elemento body
var marcoTablero = document.getElementById('tablero-marco');

//agrego un eventListener sobre el click en las caillas
marcoTablero.addEventListener('click', e => { seleccionCelda(e)})

var seleccionCelda = e => {

    console.log(e.target);

    // console.log(e.target.classList.contains('casilla-blanca'));
    // console.log(e.target.classList.contains('casilla-negra'));

    // console.log(e.target.classList.contains('ficha-blanca'));
    // console.log(e.target.classList.contains('ficha-negra'));

    
    console.log('posicion anterior: ' + posicionMarcada);

    if (e.target.classList.contains('ficha-blanca')){
        if (turnoJugador == 1) {
            if(e.target.classList.contains('casilla-seleccionada') !== true){
                e.target.classList.add("casilla-seleccionada");
                if (posicionMarcada !== "ninguna") {
                    var casillaDesmarca = document.getElementById(posicionMarcada);
                    casillaDesmarca.classList.remove("casilla-seleccionada");
                }
            }
            posicionMarcada = e.target.id;
        } else if (turnoJugador == 2) {
            mensaje = "Es el turno de mover al jugador 2, fichas negras!";
            window.alert(mensaje);
            return;
        }

    } else if (e.target.classList.contains('ficha-negra')){
        if (turnoJugador == 2) {
            if(e.target.classList.contains('casilla-seleccionada') !== true){
                e.target.classList.add("casilla-seleccionada");
                if (posicionMarcada !== "ninguna") {
                    var casillaDesmarca = document.getElementById(posicionMarcada);
                    casillaDesmarca.classList.remove("casilla-seleccionada");
                }
            }
            posicionMarcada = e.target.id;
        } else if (turnoJugador == 1) {
            mensaje = "Es el turno de mover al jugador 1, fichas blancas!";
            window.alert(mensaje);
            return;
        }
    }

    console.log('posicion nueva: ' + posicionMarcada);

}