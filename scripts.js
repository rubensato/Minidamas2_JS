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

    //consola: salida de control si hay status de posicion anterior anterior
    console.log('posicion anterior: ' + posicionMarcada);

    if (e.target.classList.contains('ficha-blanca')){          //----->>>>> seleccion de ficha blanca
        if (turnoJugador == 1) {
            if(e.target.classList.contains('casilla-seleccionada') !== true){
                e.target.classList.add("casilla-seleccionada");
                if (posicionMarcada !== "ninguna") {
                    var casillaDesmarca = document.getElementById(posicionMarcada);
                    casillaDesmarca.classList.remove("casilla-seleccionada");
                }
            }
            posicionMarcada = e.target.id;                       //Guardo la nueva posicion marcada actual
        } else if (turnoJugador == 2) {                          //----->>>>> si le toca mover a las negras
            mensaje = "Es el turno de mover al jugador 2, fichas negras a una casilla vacía!";
            window.alert(mensaje);
        }

    } else if (e.target.classList.contains('ficha-negra')){     //----->>>>> seleccion de ficha negra
        if (turnoJugador == 2) {
            if(e.target.classList.contains('casilla-seleccionada') !== true){
                e.target.classList.add("casilla-seleccionada");
                if (posicionMarcada !== "ninguna") {
                    var casillaDesmarca = document.getElementById(posicionMarcada);
                    casillaDesmarca.classList.remove("casilla-seleccionada");
                }
            }
            posicionMarcada = e.target.id;                       //Guardo la nueva posicion marcada actual
        } else if (turnoJugador == 1) {                          //----->>>>> si le toca mover a las blancas
            mensaje = "Es el turno de mover al jugador 1, fichas blancas a una casilla vacía!";
            window.alert(mensaje);
        }
    } else {                                            //----->>>>> seleccion de ficha casilla vacia

        if (posicionMarcada !== "ninguna") {            //----->>>>> verifica si hay una casilla con ficha marcada
            var casillaDesmarca = document.getElementById(posicionMarcada);
            
            //Ubico las fichas segun la posicion de la celda, si esta en alguno de los arreglos de posicion
            if ( casillaDesmarca.classList.contains('ficha-blanca') 
                    && turnoJugador == 1 
                    && casillaValida('blancas', posicionMarcada, e.target.id)) { 
                //si verifico que hanía una casilla seleccionada con ficha blanca y es turno de las blancas
                //muevo la ficha a la nueva casilla
                e.target.classList.add("ficha-blanca");     
                
                //quito la fichan de la casilla anterior
                casillaDesmarca.classList.remove("ficha-blanca");  
                //quito la marca de seleccion de casilla
                casillaDesmarca.classList.remove("casilla-seleccionada");  
                
                //asigno turno al otro jugador
                turnoJugador = 2;         

                //actualizo el panel de turno
                document.getElementById('turno-jugador').textContent = 'Le toca mover al jugador: ' + turnoJugador;

                posicionMarcada = e.target.id;                       //Guardo la nueva posicion marcada actual
            }
            else if(casillaDesmarca.classList.contains('ficha-negra') 
                    && turnoJugador == 2 
                    && casillaValida('negras', posicionMarcada, e.target.id) ) {
                //si verifico que hanía una casilla seleccionada con ficha negraa y es turno de las negras
                //muevo la ficha a la nueva casilla
                e.target.classList.add("ficha-negra"); 

                //quito la fichan de la casilla anterior
                casillaDesmarca.classList.remove("ficha-negra");  
                //quito la marca de seleccion de casilla
                casillaDesmarca.classList.remove("casilla-seleccionada"); 
                
                //asigno turno al otro jugador
                turnoJugador = 1; 

                //actualizo el panel de turno
                document.getElementById('turno-jugador').textContent = 'Le toca mover al jugador: ' + turnoJugador;
                
                posicionMarcada = e.target.id;                       //Guardo la nueva posicion marcada actual
            }
        }
    }


    console.log('posicion nueva: ' + posicionMarcada);

}