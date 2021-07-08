//Archivo JS de la  pagina de contacto del juego de Mini Damas personalizado

//funcion para enviar datos del formulario de consulta
function enviarDatosContacto() {
    
    //me posiciono en el campo nombre del formulario
    var campoNombre = document.getElementById('nombre');
    //me posiciono en el campo mail del formulario
    var campoMail = document.getElementById('mail');
    //me posiciono en el campo consulta del formulario
    var campoConsulta = document.getElementById('consulta');

    console.log('el nombre de coontacto es: ' + campoNombre.value);
    console.log('el mail de coontacto es: ' + campoMail.value);
    console.log('la consulta es: ' + campoConsulta.value);

    var contactoNombre = campoNombre.value;
    var contactoMail = campoMail.value;
    var contactoConsulta = campoConsulta.value;

    var datosEnviar = {
        contactoNombre,
        contactoMail,
        contactoConsulta
    }
    var servidor = 'https://jsonplaceholder.typicode.com/posts'


    //script de envio POST tomato del sitio API gratuita https://jsonplaceholder.typicode.com
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(datosEnviar)
    })
    .then((response) => response.json())
    .then((json) => console.log('Datos enviados al servidor: Nombre: ' 
        + contactoNombre + ' cuyo mail es: '
        + contactoMail + ' ,y su consulta es: '
        + contactoConsulta))
    .then((json) => window.alert('Los datos de la consulta fueron enviados'))
    .catch(err => console.log('Error al enviar al servidor: ' + err))
    .catch(err => window.alert('Error al enviar al servidor: ' + err));

}
