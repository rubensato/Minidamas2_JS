


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

        // Crea una variable indice que me va a servir para verificar si la suma de i y j es par, para
        //establecer el color de fondo de la celda
        indice = i + j;
        if (indice%2 == 0) {               //si el resto de la division de indice por 2 es cero, indice es par
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
    // appends <table> into <body>
    marcoTablero.appendChild(tabla);
    // modifica el atributo "border" de la tabla y lo fija a "2";
    tabla.setAttribute("border", "2");
  }