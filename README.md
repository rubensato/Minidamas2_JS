# Juego de MiniDamas 2 con JS - Practica de JS - LPPA 2021

Ejercicios de codificacion de archivo JavaScript basico para aplicación del lenguaje

---
-- Version de prueba --

## Trabajo practico JS 3: Generando las Damas

- Trabajo de la materia Lenguajes de Programacion Para la Administracion, de la carrera Ingenieria en Sistemas Informaticos de la Universidad Abierta Intermerica, UAI, sede Rosario.

- Se propone que se reescriba el juego propuesto en el TP2, Mini Damas 2, utilizando flexbox y media queries, de manera que la pagina sea responsive

- Se propone como consigna que el tablero sea dibujado por medio de una funcion JS

- Git y Github

- Publicacion en Github Pages


---
### -- Consigna completa: Clase 08 - 27may2021 --

Generando las Damas

Continuar el proyecto desarrollado en la Clase 04, agregandole funcionalidad básica de JavaScript al juego de "Damas".

El tablero no generarse desde HTML, sino que debe generarse en base a una matriz bidimensional precargada utilizando JavaScript.

Ademas, el juego debe mostrar el estado de una partida en progreso. No es necesario capturar eventos del navegador dado que lo haremos en la Clase 09, pero el tablero debe mostrar una partida avanzada estática, y la web debe indicar los nombres de los jugadores, puntajes actuales, y de quien es el turno.

El codigo HTML, CSS y JavaScript desarrollado debe ser subido a Github con sus commits correspondientes.

El repositorio debe ser el mismo que se utilizó para la Clase 04, actualizando el Readme y los cambios deben ser visibles utilizando Github Pages.

Esta semana se evaluará:

- Correcta funcionalidad de JavaScript/
- Responsividad del contenido, visible correctamente en celulares, tablets y monitores.
- Cumplimiento de la consigna y los contenidos.
- Contenido completo y prolijo del Readme.
- Prolijidad del codigo realizado, tanto HTML, CSS como JS. Prestar atención a la indentacion, puntuacion, etc.
- Correcto y frecuente uso de commits de Git.
- Correcta visualizacion del sitio en Github Pages.
- Colaboración con los compañeros de clase para mejorar los conocimientos y avanzar como grupo.


---
### -- Consigna completa: Clase 09 - 03jun2021 --

Generando las Damas - Contenido de la tarea

Continuar el proyecto desarrollado en la Clase 08, agregandole el manejo de eventos para poder mover Damas. No es necesario implementar reglas de juego ni turno de jugador. El objetivo de esta semana es poder seleccionar una ficha, resaltarla mientras esta seleccionada, y al presionar un casillero vacio, mover la ficha a dicho casillero.


El codigo HTML, CSS y JavaScript desarrollado debe ser subido a Github con sus commits correspondientes.

El repositorio debe ser el mismo que se utilizó para la Clase 08, actualizando el Readme y los cambios deben ser visibles utilizando Github Pages.

Esta semana se evaluará:

- Correcta funcionalidad de JavaScript.
- Correcto manejo de Eventos del navegador.
- Responsividad del contenido, visible correctamente en celulares, tablets y monitores.
- Cumplimiento de la consigna y los contenidos.
- Contenido completo y prolijo del Readme.
- Prolijidad del codigo realizado, tanto HTML, CSS como JS. Prestar atención a la indentacion, puntuacion, etc.
- Correcto y frecuente uso de commits de Git.
- Correcta visualizacion del sitio en Github Pages.
- Colaboración con los compañeros de clase para mejorar los conocimientos y avanzar como grupo.


---
### -- Consigna completa: Clase 10 - 10jun2021 --

Primeras Reglas del Juego - Contenido de la tarea

Continuar el proyecto desarrollado en la Clase 098, agregandole las primeras reglas del juego de Damas. El objetivo de esta semana es poder seleccionar fichas por turno, es decir que se debe detectar el jugador actual, y solo se pueden seleccionar casilleros correspondientes al color de ficha de dicho jugador. No es necesario crear reglas de movimiento de fichas diagonales, solo turnos.


El codigo HTML, CSS y JavaScript desarrollado debe ser subido a Github con sus commits correspondientes.

El repositorio debe ser el mismo que se utilizó para la Clase 09, actualizando el Readme y los cambios deben ser visibles utilizando Github Pages.

Esta semana se evaluará:

- Correcta funcionalidad de JavaScript.
- Correcto manejo de Eventos del navegador.
- Responsividad del contenido, visible correctamente en celulares, tablets y monitores.
- Cumplimiento de la consigna y los contenidos.
- Contenido completo y prolijo del Readme.
- Prolijidad del codigo realizado, tanto HTML, CSS como JS. Prestar atención a la indentacion, puntuacion, etc.
- Correcto y frecuente uso de commits de Git.
- Correcta visualizacion del sitio en Github Pages.
- Colaboración con los compañeros de clase para mejorar los conocimientos y avanzar como grupo.


---
### -- Consigna completa: Clase 11 - 17jun2021 --

Continuar el proyecto desarrollado en la Clase 10, agregandole jugabilidad a las Damas. 

El objetivo de esta semana es poder comer fichas del oponente, es decir que se debe detectar el jugador actual, la ficha seleccionada y los casilleros disponibles para mover dicha ficha o comer una ficha contigua. Cuanto el jugador termina su movimiento, se debe pasar el turno al siguiente jugador. No es necesario crear la habilidad de comer mas de una ficha a la vez, ni detectar si se ha ganado la partida.


El codigo HTML, CSS y JavaScript desarrollado debe ser subido a Github con sus commits correspondientes.

El repositorio debe ser el mismo que se utilizó para la Clase 10, actualizando el Readme y los cambios deben ser visibles utilizando Github Pages.

Esta semana se evaluará:

- Correcta funcionalidad de JavaScript.
- Correcto manejo de Eventos del navegador.
- Responsividad del contenido, visible correctamente en celulares, tablets y monitores.
- Cumplimiento de la consigna y los contenidos.
- Contenido completo y prolijo del Readme.
- Prolijidad del codigo realizado, tanto HTML, CSS como JS. Prestar atención a la indentacion, puntuacion, etc.
- Correcto y frecuente uso de commits de Git.
- Correcta visualizacion del sitio en Github Pages.
- Colaboración con los compañeros de clase para mejorar los conocimientos y avanzar como grupo.


---
### -- Consigna completa: Clase 12 - 24jun2021 --
 
Continuar el proyecto desarrollado en la Clase 11, agregandole el envio de datos de la partida a un servidor. Cada vez que un jugador mueve una ficha, se debe enviar el nombre del jugador y la nueva posicion de la ficha a algun servidor mediante una llamada HTTP desde JavaScript. La url o API para hacer la consulta puede ser cualquiera, y no es necesario que devuelva una respuesta correcta, puede devolver un error, pero se debe capturar la respuesta o el error respondido por el API y mostrarlo por consola.


El codigo HTML, CSS y JavaScript desarrollado debe ser subido a Github con sus commits correspondientes.

El repositorio debe ser el mismo que se utilizó para la Clase 11, actualizando el Readme y los cambios deben ser visibles utilizando Github Pages.

Esta semana se evaluará:

- Correcta funcionalidad de JavaScript.
- Correcto manejo de Eventos del navegador.
- Responsividad del contenido, visible correctamente en celulares, tablets y monitores.
- Cumplimiento de la consigna y los contenidos.
- Contenido completo y prolijo del Readme.
- Prolijidad del codigo realizado, tanto HTML, CSS como JS. Prestar atención a la indentacion, puntuacion, etc.
- Correcto y frecuente uso de commits de Git.
- Correcta visualizacion del sitio en Github Pages.
- Colaboración con los compañeros de clase para mejorar los conocimientos y avanzar como grupo.


---
### -- Consigna completa: Clase 13 - 01jul2021 --

Continuar el proyecto desarrollado en la Clase 12, agregandole un formulario de contacto que se envie por metodo HTTP a alguna API pública. El formulario debe contener los campos Nombre Completo, email y Comentario, y al presionar el boton enviar se deben enviar dichos datos a algun servidor mediante una llamada HTTP desde JavaScript. La url o API para hacer la consulta puede ser cualquiera, y no es necesario que devuelva una respuesta correcta. El formulario de contacto debe visualizarse correctamente en cualquier dispositivo, y se recomienda hacerlo en una nueva pagina HTML, manteniendo la estetica del Layout del juego de Damas.


El codigo HTML, CSS y JavaScript desarrollado debe ser subido a Github con sus commits correspondientes.

El repositorio debe ser el mismo que se utilizó para la Clase 12, actualizando el Readme y los cambios deben ser visibles utilizando Github Pages.

Esta semana se evaluará:

- Correcta funcionalidad de JavaScript.
- Correcto manejo de Eventos del navegador.
- Responsividad del contenido, visible correctamente en celulares, tablets y monitores.
- Cumplimiento de la consigna y los contenidos.
- Contenido completo y prolijo del Readme.
- Prolijidad del codigo realizado, tanto HTML, CSS como JS. Prestar atención a la indentacion, puntuacion, etc.
- Correcto y frecuente uso de commits de Git.
- Correcta visualizacion del sitio en Github Pages.
- Colaboración con los compañeros de clase para mejorar los conocimientos y avanzar como grupo.


---
### -- Consigna completa: Clase 15 - 15jul2021 --

Continuar el proyecto desarrollado durante la catedra, agregandole la funcionalidad de guardar partida. El objetivo es que exista un boton para guardar la partida actual y un boton de cargar ultima partida guardada, de forma tal que si cierro el navegador y vuelvo a abrirlo, pueda recuperar el estado de la partida donde la dejé, respetando posicion de las fichas, puntajes y turno del jugador.


El codigo HTML, CSS y JavaScript desarrollado debe ser subido a Github con sus commits correspondientes.

El repositorio debe ser el mismo que se utilizó para la Clase 13, actualizando el Readme y los cambios deben ser visibles utilizando Github Pages.

Esta semana se evaluará:

- Correcta funcionalidad de JavaScript.
- Correcto manejo de Eventos del navegador.
- Responsividad del contenido, visible correctamente en celulares, tablets y monitores.
- Cumplimiento de la consigna y los contenidos.
- Contenido completo y prolijo del Readme.
- Prolijidad del codigo realizado, tanto HTML, CSS como JS. Prestar atención a la indentacion, puntuacion, etc.
- Correcto y frecuente uso de commits de Git.
- Correcta visualizacion del sitio en Github Pages.
- Colaboración con los compañeros de clase para mejorar los conocimientos y avanzar como grupo.


---
## -- Consigna para el Final: Clase 16 - 22jul2021 --

Continuar el proyecto desarrollado durante la catedra.

`Consigna completa enviada por mail:`

_ Hola a todos, para aquellos que quieran rendir el final les comparto los requerimientos para el juego de Damas Online en Github: _

*** - Código prolijo ***
*** - Consistencia en comentarios, commits y estilos de código ***
*** - Responsividad y estética del juego y la web (usando Flexbox) ***
*** - Juego completamente funcional para dos jugadores permitiendo ingresar nombres de los jugadores al iniciar la partida ***
*** - Agregar funcionalidad de guardar y cargar partida en el juego usando LocalStorage ***
*** - Agregar puntaje por cada ficha comida y mostrar los puntos ***
*** - Detectar el momento en que  un jugador ha ganado la partida y mostrar un carrtel informativo. ***
*** - Detectar el momento en que no hay mas movimientos posibles y mostrar un cartel de empate. ***
*** - Crear una pagina de Contacto, con un formulario que permita ingresar nombre, mail y mensaje, y al enviar se abra la - herramienta de envío de emails predeterminada del sistema operativo. ***
*** - Validaciones del formulario de contacto (nombre alfanumérico, mail valido y mensaje con mas de 5 caracteres) ***
_ - Guardar el resultado de las partidas ganadas, fecha de partida y el puntaje obtenido. _
_ - Agregar un botón para mostrar un popup con la lista de partidas con jugadores, puntajes y fechas. _
_ - Agregar la opcion de ordenar la lista de partidas por fecha o puntaje. _
_ - Agregar un link a la pagina de Github donde se alojo el código del juego, que al apretarlo se abra en una nueva pestaña. _

*** En los puntos anteriores lo que esta resaltado en negrita es obligatorio para aprobar. Los demás puntos son opcionales y suman a la nota, siendo que si cumplen con todos los puntos a la perfección tienen un 10. ***
_ Si quieren que revise lo que hicieron antes de rendir, para saber si ya aprueban o no, me lo tienen que presentar al menos tres días antes de rendir enviandome el link del repositorio por email. _

_ Los que quieran venir a rendir el examen escrito no hay problema, deben repasar tanto la teoria como la practica. _

_ Cualquier duda me avisan. _

_Saludos_

_ Ing. David Curras _
_ Director TUDVJ _
_ UNIVERSIDAD ABIERTA INTERAMERICANA - UAI _
_ Sede Rosario _
_ david.curras@uai.edu.ar _



---
## Link en Github Pages:

https://rubensato.github.io/Minidamas2_JS/



---
## Licencia y Copyright

© Ruben Sato - Año 2021
