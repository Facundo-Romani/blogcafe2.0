// SELECTORES DE JS

//**********************//

// querySelector // Selector Actual.
const heading = document.querySelector('.header__texto h2'); // retorna 0 o 1 Elementos.
// console.log(heading);


// querySelectorAll  // Retorna de 0 a todos los selecctores que le pasemos del archivo css.
const enlaces = document.querySelectorAll('.navegacion a'); // retorna 0 o 1 Elementos.
// enlaces[0].textContent = 'Nuevo texto para Enlace'; // le podemos pasar posiciones para modificar los textos en este caso.
// Podemos modificar links.
// Podemos borrar y agregar clases.

// getElementById // Selector antiguo.


// Generar un nuevo enlace // Crear código html en javascripts.
const nuevoEnlace = document.createElement('A')  // Se le pasa las etiquetas dentro del paréntesis, createElement recomienda pasar la etiqueta en Mayúscula.

// Agregar el href
nuevoEnlace.href = 'nuevo-enlace.html'; // el punto agrega la propiedad.

// Agregar el texto
nuevoEnlace.textContent = 'Tienda Virtual';

// Agregar la clase
nuevoEnlace.classList.add('navegacion__enlace');

//Agrergarlo al documento
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);   // Nos permite agregar una variable y poder incertarla en otro lugar.


// console.log(nuevoEnlace);




//**********************//

// EVENTOS 

// window es el documento global y tiene todas las  funciones dentro, document pertenece a window y es solo el html.

// Registros de eventos en document y window.

// console.log(1);       

// window.addEventListener('load', function(){
//     console.log(2);
// });  // Cuando ocurre el evento se ejecuta la función.
//     // Load espera a que el js y los archivos html,css estén listos y se descarguen. 

// window.onload = function(){  // Esta es Otra forma de realizar el evento en Js.
//     console.log(3);         
// };

// document.addEventListener('DOMContentLoaded', function() {  // DOMContentLoaded se escribe así respetando las mayúsculas.Sole espera la descarga del html y no espera css imagenes.
//     console.log(4);  // Es el más utilizado!!
// });

// console.log(5);

// window.onscroll = function(e){  // Ejecuta la función de scroll multiples veces al deslizar la ventana del navegador.
//     console.log(e)
// };


// Seleccionar un elemento html y asociarle un evento.
// Evento click se puede utilizar en imagenes,textos.
// const btnEnviar = document.querySelector('.boton--primario');
// btnEnviar.addEventListener('click', function(e){
//     console.log(e);  // e = evento
//     e.preventDefault(); // Validar formularios.
    
    
    // console.log('enviando formulario');
// });





// Eventos de los inputs y textarea. (Formulario)

const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

nombre.addEventListener('input', leerTexto);  
email.addEventListener('input', leerTexto);  
mensaje.addEventListener('input', leerTexto);  

// El  Evento de submit
formulario.addEventListener('submit', function(e){
    e.preventDefault();
    
    // validar el formulario

    const { nombre, email, mensaje } = datos;   // Lo extraemos del objeto con 

    if(nombre === '' || email === '' || mensaje === '' ) {
        mostrarError('Todos los campos son obligatorios');
        
        return; // corta la ejecución de un código.
    } 


   // Envio correcto
   mostrarMensaje('Mensaje enviado correctamente');


    
}); // En los formularios vamos a tener siempre el evento llamado submit.


function leerTexto(e){
    // console.log(e.target.value);

    datos[e.target.id] = e.target.value;

    // console.log(datos);

}

// Muestra alerta que se envio correctamente.

function mostrarMensaje(mensaje){
    const alerta = document.createElement('p');
    alerta.textContent = mensaje;
    alerta.classList.add('correcto');

    formulario.appendChild(alerta);

    // Desaparezca luego de 5 segundos
    setTimeout(() => {    
        alerta.remove();
    },5000);
    
    
}




// Muestra un error en pantalla 
function mostrarError(mensaje){
    const error = document.createElement('p');
    error.textContent = mensaje; 
    error.classList.add('error');

    formulario.appendChild( error );
    
// Desaparezca despúes de 5 segundos.
setTimeout(() => {     // Da el tiempo de alerta
    error.remove();
},5000);

};





  



