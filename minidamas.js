//Archivo JS del juego de Mini Damas personalizado

//funcion para cargar el tablero con parametros iniciales
function cargar_tablero() {
    
    //Arreglo de posicion de fichas
    var ArrayInicial = [
        [0,1,0,1,0,2,0,1],
        [1,0,1,0,1,0,0,0],
        [0,1,0,1,0,0,0,0],
        [2,0,0,0,0,0,0,0],
        [0,0,0,2,0,0,0,0],
        [0,0,2,0,0,0,0,0],
        [0,2,0,0,0,2,0,0],
        [2,0,2,0,2,0,2,0],
    ];

    //Parametro puntos Jugador 1
    puntosJugador1 = 23456;

    //Parametro puntos Jugador 2
    puntosJugador2 = 1000000;
    
    //Parametro proximo turno Jugador
    turnoJugador = 2;

    //dibujo el tablero en funcion del array de juego de partida
    dibujar_tablero(ArrayInicial, puntosJugador1, puntosJugador2, turnoJugador);

}


//funcion para dibujar el tablero recibiendo parametros iniciales
function dibujar_tablero(ArrayTablero, puntos1, puntos2, turnoj) {

    document.getElementById('puntos1').value = puntos1;

    document.getElementById('puntos2').value = puntos2;

    document.getElementById('turno-jugador').textContent = 'Le toca mover al jugador: ' + turnoj;

    // Crea un elemento <table> y un elemento <tbody>
    var tabla   = document.createElement("table");
    var tblBody = document.createElement("tbody");

    // Crea las celdas
    for (var i = 0; i < 8; i++) {
        // Crea las hileras de la tabla
        var hilera = document.createElement("tr");

        for (var j = 0; j < 8; j++) {
            // Crea un elemento <td> y un nodo de texto, haz que el nodo de
            // texto sea el contenido de <td>, ubica el elemento <td> al final
            // de la hilera de la tabla
            var celda = document.createElement("td");
            //Le asigno un nombre a la celda
            celda.id = i + "-" + j;

            // Crea una variable indice que me va a servir para verificar si la suma de i y j es par, para
            //establecer el color de fondo de la celda
            indice = i + j;

            //si el resto de la division de indice por 2 es cero, indice es par
            if (indice%2 == 0) {               
                celda.className = 'casilla-blanca';      //casilla blanca     
                
            } else {
                celda.className = 'casilla-negra';       //casilla negra    
            }
    
            //Ubico las fichas segun la posicion de la celda, si esta en alguno de los arreglos de posicion
            if ( ArrayTablero[i][j] == 1 ) {
                celda.classList.add("ficha-blanca");                
            }
            else if( ArrayTablero[i][j] == 2 ) {
                celda.classList.add("ficha-negra");
            }

            hilera.appendChild(celda);
        }

        // agrega la hilera al final de la tabla (al final del elemento tblbody)
        tblBody.appendChild(hilera);
    }

    // posiciona el <tbody> debajo del elemento <table>
    tabla.appendChild(tblBody);
    // appends <table> into 'marcoTablero'
    marcoTablero.appendChild(tabla);


}


//funcion para verificar si se intentar ubicar en una casilla valida segun su posicion
function casillaValida(colorFichas, posicionAnterior, posicionNueva){
    
    //salida de control
    console.log('verifica, color fichas: ' + colorFichas);
    console.log('verifica, posicion anterior: ' + posicionAnterior);
    console.log('verifica, posicion nueva: ' + posicionNueva);

    //creo variables de comparacion de posicion fila y columna
    var filaAnterior = parseInt(posicionAnterior.substring(0,1));
    var columnaAnterior = parseInt(posicionAnterior.substring(2));
    var filaNueva = parseInt(posicionNueva.substring(0,1));
    var columnaNueva = parseInt(posicionNueva.substring(2));

    //salida de control
    console.log('verifica, fila anterior: ' + filaAnterior);
    console.log('verifica, columna anterior: ' + columnaAnterior);
    console.log('verifica, fila nueva: ' + filaNueva);
    console.log('verifica, columna nueva: ' + columnaNueva);


    //verifico segun el color de ficha que toca mover
    if (colorFichas == 'blancas'){       
        console.log('mueven las blancas');


        //verifico si se esta moviendo en diagonal 1 o 2 lugares
        //para que las blancas puedan avanzar, deben estar en una fila anterior a la 8 en ascendente
        //y la fila nueva ser la proxima a la anterior posicion
        if(filaAnterior < 8 
            && filaNueva == (filaAnterior+1) 
            && Math.abs(columnaAnterior-columnaNueva) == 1){
            //para que las blancas puedan avanzar, debe haber una casilla libre en diagonal 
            //en la proxima fila que la compararé con la posicion "target"
            return true;
        }
        else if(filaAnterior < 7 
            && filaNueva == (filaAnterior+2) 
            && Math.abs(columnaAnterior-columnaNueva) == 2){
            //para que las blancas puedan avanzar 2 casillas en diagonal, debe haber una casilla  
            //en la proxima segunda fila que la compararé con la posicion "target"
            //y debe haber una ficha negra en la casilla anterior para "comer"
            
            var posicionPosibleFicha = (filaAnterior+1) + "-" + (columnaAnterior + ((columnaNueva-columnaAnterior)/2));
            console.log(posicionPosibleFicha);

            //identifico la casilla intermedia
            var casillaVerificar = document.getElementById(posicionPosibleFicha);

            //si en la casilla intermedia hay una ficha negra, se mueve la ficha blanca
            //y "come" la ficha negra
            if (casillaVerificar.classList.contains('ficha-negra')){ 
                casillaVerificar.classList.remove("ficha-negra");
                return true;
            }
        }
    }   
    else if (colorFichas == 'negras') {
        console.log('mueven las negras');

        //para que las negras puedan avanzar, deben estar en una fila anterior a la 1 en descendente
        //y la fila nueva ser la proxima a la anterior posicion
        if(filaAnterior > 1 
            && filaNueva == (filaAnterior-1) 
            && Math.abs(columnaAnterior-columnaNueva) == 1){
            //para que las negras puedan avanzar, debe haber una casilla libre en diagonal 
            //en la proxima fila que la compararé con la posicion "target"

            //la casilla, si esta en la columna 1 o la 8, solo tendra posible una casilla de avance
            if (columnaAnterior > 1){
                console.log('se mueve desde la columna mayor a 1, hay celda libre avance columna anterior')
            }
            else if (columnaAnterior < 8){
                console.log('se mueve desde la columna menor a 8, hay celda libre avance columna siguiente')
            }
            return true;
        }
        else if(filaAnterior > 2 
            && filaNueva == (filaAnterior-2) 
            && Math.abs(columnaAnterior-columnaNueva) == 2){
            //para que las negras puedan avanzar 2 casillas en diagonal, debe haber una casilla  
            //en la proxima segunda fila que la compararé con la posicion "target"
            //y debe haber una ficha blanca en la casilla anterior para "comer"
            
            var posicionPosibleFicha = (filaAnterior-1) + "-" + (columnaAnterior + ((columnaNueva-columnaAnterior)/2));
            console.log(posicionPosibleFicha);

            //identifico la casilla intermedia
            var casillaVerificar = document.getElementById(posicionPosibleFicha);

            //si en la casilla intermedia hay una ficha blanca, se mueve la ficha negra
            //y "come" la ficha blanca
            if (casillaVerificar.classList.contains('ficha-blanca')){ 
                casillaVerificar.classList.remove("ficha-blanca");
                return true;
            }
        }
    }
    
    //si la casilla no es valida, no se realiza el movimiento
    return false;

}


//funcion para enviar datos a la API del servidor remoto 
function enviarDatosServidor(turnoj, posicionMarca) {
    var datosEnviar = {
        turnoj,
        posicionMarca
    }
    var servidor = 'https://jsonplaceholder.typicode.com/posts'


    //script de envio POST tomato del sitio API gratuita https://jsonplaceholder.typicode.com
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(datosEnviar)
    })
    .then((response) => response.json())
    .then((json) => console.log('Datos enviados al servidor: Movió el jugador: ' 
        + turnoj + ' a la casilla: '
        + posicionMarca))
    .catch(err => console.log('Error al enviar al servidor: ' + err));
    
}  