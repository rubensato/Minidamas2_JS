//Archivo JS para correr pruebas de codigo en consola para ver estructura del DOM

console.log(document);
console.log(document.head);
console.log(document.body);


var itemList = document.querySelector('#tablero-damas');
console.log(itemList.children);


var itemList2 = document.querySelectorAll('.casilla-blanca');
console.log(itemList2);


var itemList3 = document.querySelectorAll('td');
console.log(itemList3);



// //pruebas para ver si puedo identificar una celda por su id para asignarle una ficha
// var casillaNombre = "4-5";
// var casilla = document.getElementById(casillaNombre);
// console.log(casilla);

// //creo un elemento imagen de la ficha negra
// var fichaBlanca = document.createElement('img');
// fichaBlanca.src = "./img/FichaRojo.png";
// casilla.appendChild(fichaBlanca);


// document.getElementById('puntos1').value = "23456";

// document.getElementById('puntos2').value = "1000000";

