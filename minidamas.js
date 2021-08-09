//Archivo JS del juego de Mini Damas personalizado


//funcion para cargar una nueva partida
function cargar_nuevaPartida() {

    //verifica si es la primera vez que se cargan fichas segun estado de la variable cargaInicial
    if (cargaInicial == 0) {
        
        //carga tablero en una partida nueva 
        cargar_tableroNuevo();
    
        window.alert("La partida se ha iniciado");

        //variable para indicar primera vez que se carga el tablero cambia a 1
        cargaInicial = 1;

    }
    else{

        if (window.confirm("Esta operación borrará la partida actual. Desea continuar?")) {

            //carga tablero en una partida nueva 
            cargar_tableroNuevo();
    
            window.alert("La partida se ha iniciado de nuevo");

            juegoFinalizado = 0;
        }
    }
}




//funcion para cargar el tablero en una nueva partida
function cargar_tableroNuevo() {
    
    nombre1 = prompt("Ingrese el nombre del Jugador 1","Jugador 1");
    nombre2 = prompt("Ingrese el nombre del Jugador 2","Jugador 2");

    //Arreglo de posicion inicial de fichas
    ArrayInicial = [
        [0,1,0,1,0,1,0,1],
        [1,0,1,0,1,0,1,0],
        [0,1,0,1,0,1,0,1],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [2,0,2,0,2,0,2,0],
        [0,2,0,2,0,2,0,2],
        [2,0,2,0,2,0,2,0],
    ];

    //Parametro puntos Jugador 1
    puntosJugador1 = 12;

    //Parametro puntos Jugador 2
    puntosJugador2 = 12;
    
    //Parametro proximo turno Jugador
    turnoJugador = 1;

    //dibujo el tablero en funcion del array de juego de partida
    dibujar_fichas(ArrayInicial, nombre1, nombre2, puntosJugador1, puntosJugador2, turnoJugador);

}



//funcion para cargar el tablero con parametros iniciales
function cargar_tablero() {
    
    nombre1 = "Jugador 1";
    nombre2 = "Jugador 2";

    //actualizo el panel de turno
    document.getElementById('turno-jugador').textContent = "";
    
    //Arreglo de posicion de fichas inicial
    ArrayInicial = [
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
    puntosJugador1 = 8;

    //Parametro puntos Jugador 2
    puntosJugador2 = 10;
    
    //Parametro proximo turno Jugador
    turnoJugador = 2;

    //dibujo el tablero en funcion del array de juego de partida
    dibujar_fichas(ArrayInicial, nombre1, nombre2, puntosJugador1, puntosJugador2, turnoJugador);

    juegoFinalizado = 0;

}



//funcion para dibujar el tablero recibiendo parametros iniciales
function dibujar_tablero() {

    //variable para indicar primera vez que se carga el tablero
    cargaInicial = 0;

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



//funcion para ubicar las fichas en el tablero
function dibujar_fichas(ArrayJuega, nombreJug1, nombreJug2, puntosJuega1, puntosJuega2, turnoJuega) {
    
    document.getElementById('nombreJugador1').textContent = nombreJug1;
    document.getElementById('nombreJugador2').textContent = nombreJug2;

    document.getElementById('puntos1').value = puntosJuega1;
    document.getElementById('puntos2').value = puntosJuega2;

    document.getElementById('turno-jugador').textContent = 'Le toca mover al jugador: ' + turnoJuega;

    // bucle para recorrer filas
    for (var i = 0; i < 8; i++) {
        // bucle para recorrer columnas
        for (var j = 0; j < 8; j++) {
            
            //nombre de la celda
            var nombreCelda = i + "-" + j;
            
            //me posiciono en la celda especifica en el tablero segun su nombre
            var celda = document.getElementById(nombreCelda);
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

            //blanqueo de fichas
            celda.classList.remove("ficha-blanca");
            celda.classList.remove("ficha-negra");

            //Ubico las fichas segun la posicion de la celda, si esta en alguno de los arreglos de posicion
            if ( ArrayJuega[i][j] == 1 ) {
                celda.classList.add("ficha-blanca");                
            }
            else if( ArrayJuega[i][j] == 2 ) {
                celda.classList.add("ficha-negra");
            }


        }   //fin bucle de columnas

    }    //fin bucle de filas

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
                document.getElementById('puntos2').value -= 1;
                return true;
            }
        }
    }   
    else if (colorFichas == 'negras') {
        console.log('mueven las negras');

        //para que las negras puedan avanzar, deben estar en una fila anterior a la 0 en descendente
        //y la fila nueva ser la proxima a la anterior posicion
        if(filaAnterior > 0 
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
        else if(filaAnterior > 1 
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
                document.getElementById('puntos1').value -= 1;
                return true;
            }
        }
    }
    
    //si la casilla no es valida, no se realiza el movimiento
    return false;

}



//Funcion para verificar si solo quedan fichas de un color y resulta ganador
function verSiHayGanador() {

    var cantidadBlancas = 0;
    var cantidadNegras = 0;
    
    // bucle para recorrer filas y actualizar array fichas pára guardar
    for (var i = 0; i < 8; i++) {
        // bucle para recorrer columnas
        for (var j = 0; j < 8; j++) {
            
            //nombre de la celda
            var nombreCelda = i + "-" + j;
            
            //me posiciono en la celda especifica en el tablero segun su nombre
            var celda = document.getElementById(nombreCelda);

            //si el resto de la division de indice por 2 es cero, indice es par
            if ( celda.classList.contains('ficha-blanca') ) {               
                ArrayInicial[i][j] = 1;      //ficha blanca     
                cantidadBlancas += 1;
                
            } 
            else if ( celda.classList.contains('ficha-negra') ) {
                ArrayInicial[i][j] = 2;      //ficha negra 
                cantidadNegras += 1;
            }
            else {
                ArrayInicial[i][j] = 0;      //no hay ficha 
            }
        }   //fin bucle de columnas
    }    //fin bucle de filas

    console.log('cantidad de fichas blancas: ' + cantidadBlancas);
    console.log('cantidad de fichas negras: ' + cantidadNegras);

    if (cantidadBlancas == 0) {
        mensaje = "FELICITACIONES, HA GANADO JUGADOR 2 CON LAS FICHAS NEGRAS!!!";
        console.log(mensaje);
        window.alert(mensaje);

        //actualizo el panel de turno
        document.getElementById('turno-jugador').textContent = "HA GANADO EL JUGADOR 1!!!";

        juegoFinalizado = 1;
    }
    else if (cantidadNegras == 0) {
        mensaje = "FELICITACIONES, HA GANADO JUGADOR 1 CON LAS FICHAS BLANCAS!!!";
        console.log(mensaje);
        window.alert(mensaje);

        //actualizo el panel de turno
        document.getElementById('turno-jugador').textContent = "HA GANADO EL JUGADOR 2!!!";

        juegoFinalizado = 1;
    }

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




// funcion para guardar los datos de la partida a traves del uso de LocalStorage
function guardar_partida() {
    
    // bucle para recorrer filas y actualizar array fichas pára guardar
    for (var i = 0; i < 8; i++) {
        // bucle para recorrer columnas
        for (var j = 0; j < 8; j++) {
            
            //nombre de la celda
            var nombreCelda = i + "-" + j;
            
            //me posiciono en la celda especifica en el tablero segun su nombre
            var celda = document.getElementById(nombreCelda);

            //si el resto de la division de indice por 2 es cero, indice es par
            if ( celda.classList.contains('ficha-blanca') ) {               
                ArrayInicial[i][j] = 1;      //ficha blanca     
                
            } 
            else if ( celda.classList.contains('ficha-negra') ) {
                ArrayInicial[i][j] = 2;      //ficha negra 
            }
            else {
                ArrayInicial[i][j] = 0;      //no hay ficha 
            }
        }   //fin bucle de columnas
    }    //fin bucle de filas

    console.log(ArrayInicial);

    //ENSAYO DE CONVERSION PARA ALMACENAR Y RECUPERAR DATOS CONVIRTIENDO ARRAY A STRING
    var ArrayInicialString = JSON.stringify(ArrayInicial);
    console.log('ArrayInicial convertido a string para almacenar partida: ' + ArrayInicialString);

    var ArrayJuego = JSON.parse(ArrayInicialString);
    console.log('string almacenado del array de posiciones convertido a array: ');
    console.log(ArrayJuego);
    //FIN DEL ENSAYO - SE USA EL STRING CONVERTIDO

    //GUARDO LOS DATOS AL LOCAL STORAGE
    localStorage.setItem("Partida1.Nombre1", document.getElementById('nombreJugador1').textContent);
    localStorage.setItem("Partida1.Nombre2", document.getElementById('nombreJugador2').textContent);
    localStorage.setItem("Partida1.Puntos1", document.getElementById('puntos1').value);
    localStorage.setItem("Partida1.Puntos2", document.getElementById('puntos2').value);
    localStorage.setItem("Partida1.Juego", ArrayInicialString);
    localStorage.setItem("Partida1.TurnoJugador", turnoJugador);

    window.alert("La partida se ha guardado correctamente");

}




//funcion para recuperar datos de una partida anterior almacenado en LocalStorage y cargarla
function recuperar_partida_guardada() {

    //verifica si es la primera vez que se cargan fichas segun estado de la variable cargaInicial
    if (cargaInicial == 0) {
    
        //recupero los 4 parametros almacenados de la partida: puntos jugador 1 y 2, 
        //posiciones de fichas, y turno proximo jugador
        var nomJugador1 = localStorage.getItem("Partida1.Nombre1");
        var nomJugador2 = localStorage.getItem("Partida1.Nombre2");
        var puntosJugador1 = localStorage.getItem("Partida1.Puntos1");
        var puntosJugador2 = localStorage.getItem("Partida1.Puntos2");
        var ArrayInicial =  JSON.parse(localStorage.getItem("Partida1.Juego"));
        var turnoJugador = localStorage.getItem("Partida1.TurnoJugador");

        
        //dibujo el tablero en funcion del array de juego de partida
        dibujar_fichas(ArrayInicial, nomJugador1, nomJugador2, puntosJugador1, puntosJugador2, turnoJugador);

        window.alert("La partida se ha cargado correctamente");

        //variable para indicar primera vez que se carga el tablero cambia a 1
        cargaInicial = 1;

        juegoFinalizado = 0;

    }
    else{

        if (window.confirm("Esta operación borrará la partida actual. Desea continuar?")) {

            //recupero los 4 parametros almacenados de la partida: puntos jugador 1 y 2, 
            //posiciones de fichas, y turno proximo jugador
            var nomJugador1 = localStorage.getItem("Partida1.Nombre1");
            var nomJugador2 = localStorage.getItem("Partida1.Nombre2");
            var puntosJugador1 = localStorage.getItem("Partida1.Puntos1");
            var puntosJugador2 = localStorage.getItem("Partida1.Puntos2");
            var ArrayInicial =  JSON.parse(localStorage.getItem("Partida1.Juego"));
            var turnoJugador = localStorage.getItem("Partida1.TurnoJugador");
    
            
            //dibujo el tablero en funcion del array de juego de partida
            dibujar_fichas(ArrayInicial, nomJugador1, nomJugador2, puntosJugador1, puntosJugador2, turnoJugador);
    
            window.alert("La partida se ha cargado correctamente");

            juegoFinalizado = 0;
        }
    }

}





