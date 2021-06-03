

function dibujar_tabla() {
    // Obtener la referencia del elemento body
    var marcoTablero = document.getElementById('tablero-marco');

    // Crea un elemento <table> y un elemento <tbody>
    var tabla   = document.createElement("table");
    var tblBody = document.createElement("tbody");

    tabla.id = "tablero-damas";

    // Crea las celdas
    for (var i = 1; i <= 8; i++) {
        // Crea las hileras de la tabla
        var hilera = document.createElement("tr");

        for (var j = 1; j <= 8; j++) {
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

                // //creo un elemento imagen de la ficha blanca
                // var fichaBlanca = document.createElement('img');
                // fichaBlanca.src = "./img/FichaGris.png";
                // celda.appendChild(fichaBlanca);

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




    //********************************************************************* */
    
    var blancas = ["1-2", "1-4", "1-6", "1-8", "2-1", "2-3", "2-5", "2-7", "3-2", "3-4", "3-6", "3-8"]; 

    var negras = ["6-1", "6-3", "6-5", "6-7", "7-2", "7-4", "7-6", "7-8", "8-1", "8-3", "8-5", "8-7"]; 
    
    var cantidadBlancas = blancas.length;
    var cantidadNegras = negras.length;

    //Ubico las celdas blancas
    for (var i = 0; i <= cantidadBlancas; i++) {

        //identifico cada celda por su id para asignarle una ficha blanca
        var casillaNombreB = blancas[i];
        var casillaB = document.getElementById(casillaNombreB);

        //creo un elemento imagen de la ficha blanca
        var fichaBlanca = document.createElement('img');
        fichaBlanca.src = "./img/FichaGris.png";
        casillaB.appendChild(fichaBlanca);
    }

    //Ubico las celdas negras
    for (var j = 0; j <= cantidadNegras; j++) {

        //identifico cada celda por su id para asignarle una ficha blanca
        var casillaNombreN = negras[j];
        var casillaN = document.getElementById(casillaNombreN);

        //creo un elemento imagen de la ficha blanca
        var fichaNegra = document.createElement('img');
        fichaNegra.src = "./img/FichaRojo.png";
        casillaN.appendChild(fichaNegra);
    }

}



function nueva_partida() {

    var blancas = ["1-2", "1-4", "1-6", "1-8", "2-1", "2-3", "2-5", "2-7", "3-2", "3-4", "3-6", "3-8"]; 

    var negras = ["6-1", "6-3", "6-5", "6-7", "7-2", "7-4", "7-6", "7-8", "8-1", "8-3", "8-5", "8-7"]; 
    
    var cantidadBlancas = blancas.length;
    var cantidadNegras = negras.length;

    // Lleno las celdas blancas
    for (var i = 0; i <= cantidadBlancas; i++) {

        //identifico cada celda por su id para asignarle una ficha blanca
        var casillaNombre = blancas[i];
        var casilla = document.getElementById(casillaNombre);

        //creo un elemento imagen de la ficha blanca
        var fichaBlanca = document.createElement('img');
        fichaBlanca.src = "./img/FichaGris.png";
        casilla.appendChild(fichaBlanca);

    }


    //pruebas para ver si puedo identificar una celda por su id para asignarle una ficha
    var casillaNombre = "4-5";
    var casilla = document.getElementById(casillaNombre);
    console.log(casilla);

    //creo un elemento imagen de la ficha negra
    var fichaBlanca = document.createElement('img');
    fichaBlanca.src = "./img/FichaRojo.png";
    casilla.appendChild(fichaBlanca);

}

