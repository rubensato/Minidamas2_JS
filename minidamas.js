

function dibujar_tabla() {

    //Arreglo de posicion de fichas
    var ArrayTablero = [
        [0,1,0,1,0,2,0,1],
        [1,0,1,0,1,0,0,0],
        [0,1,0,1,0,0,0,0],
        [2,0,0,0,0,0,0,0],
        [0,0,0,2,0,0,0,0],
        [0,0,2,0,0,0,0,0],
        [0,2,0,0,0,2,0,0],
        [2,0,2,0,2,0,2,0],
    ];
    
    
    document.getElementById('puntos1').value = "23456";

    document.getElementById('puntos2').value = "1000000";

    // Obtener la referencia del elemento body
    var marcoTablero = document.getElementById('tablero-marco');

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
            
            console.log(ArrayTablero[i][j]);

            //Ubico las fichas segun la posicion de la celda, si esta en alguno de los arreglos de posicion
            if ( ArrayTablero[i][j] == 1 ) {
                var fichaBlanca = document.createElement('img');
                fichaBlanca.src = "./img/FichaGris.png";
                celda.appendChild(fichaBlanca);                
            }
            else if( ArrayTablero[i][j] == 2 ) {
                var fichaNegra = document.createElement('img');
                fichaNegra.src = "./img/FichaRojo.png";
                celda.appendChild(fichaNegra);
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

