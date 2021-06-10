

// Obtener la referencia del elemento body
var marcoTablero = document.getElementById('tablero-marco');

//agrego un eventListener cobre el click en las caillas
marcoTablero.addEventListener('click', e => { seleccionCelda(e)})

var seleccionCelda = e => {

    var posicionMarcada = "ninguna";

    console.log(e.target);

    // console.log(e.target.classList.contains('casilla-blanca'));
    // console.log(e.target.classList.contains('casilla-negra'));

    // console.log(e.target.classList.contains('ficha-blanca'));
    // console.log(e.target.classList.contains('ficha-negra'));

    if (e.target.classList.contains('ficha-blanca')){
        if(e.target.classList.contains('casilla-seleccionada') !== true){
            e.target.classList.add("casilla-seleccionada");
            posicionMarcada = e.target.id;
            console.log(posicionMarcada);
            // if (posicionMarcada !== "ninguna") {
            //     casillaDesmarca = e.target.getElementById(posicionMarcada);
            //     casillaDesmarca.classList.remove("casilla-seleccionada");
            // }
        }
    } else if (e.target.classList.contains('ficha-negra')){
        if(e.target.classList.contains('casilla-seleccionada') !== true){
            e.target.classList.add("casilla-seleccionada");
            posicionMarcada = e.target.id;
            console.log(posicionMarcada);
            // if (posicionMarcada !== "ninguna") {
            //     casillaDesmarca = e.target.getElementById(posicionMarcada);
            //     casillaDesmarca.classList.remove("casilla-seleccionada");
            // }
        }
    };
}