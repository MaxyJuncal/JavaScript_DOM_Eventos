//querySelector                                            //da un valor de 0 o 1
//nueva forma que se usa son las querySelector
// const heading = document.querySelector('.header__texto h2')//Elementos.
// heading.textContent = 'Nueva Heading';// textContent--modifica el elemento en el html
// console.log(heading);

// //querySelectorAll
// const enlaces = document.querySelectorAll('.navegacion a');
// enlaces[0].textContent = 'Nuevo Texto para Enlace';//modifica el texto
// enlaces[0].href = 'https://www.google.com/';//modifica el href
// enlaces[0].classList.add('nueva-clase'); //crea una clase nueva
// enlaces[0].classList.remove('navegacion__enlace');//borra una clase

// //getElementById  ---- sintaxis que ya no se utiliza es igual que querySelector

// const heading2 = document.getElementById('heading');
// console.log(heading2);

//Generar un Nuevo Enlace

// const nuevoEnlace = document.createElement('A');

// //Agreagar el href
// nuevoEnlace.href = 'nuevo-enlace.html';

// //Agregar el texto
// nuevoEnlace.textContent = 'Tienda Virtual';

// //Agreagar la Clase
// nuevoEnlace.classList.add('navegacion__enlace')
// // Agregar al Documento
// const navegacion = document.querySelector('.navegacion');
// navegacion.appendChild(nuevoEnlace);

// console.log(nuevoEnlace);


// //Eventos

// console.log(1)

// window.addEventListener('load',function(){
//     console.log(2)
// })

// window.onload = function(){  //<---Esto hace los mismo que window.addEventListener('load',function()  
//     console.log(3)
// }

// document.addEventListener('DOMContentLoaded', function(){ //DOMContentLoaded Solo espera que cargue el 
//     console.log(4)                                        // HTML, pero no espera CSS o imagenes.
// })                                                           

// console.log(5)

// window.onscroll = function(){
//     console.log('scrolling...')
// }


//Seleccionar Elementos y asosiarles un Eventos

// const btnEnviar = document.querySelector('.boton--primario');
//  btnEnviar.addEventListener('click',function(evento){
//     console.log(evento);
//     evento.preventDefault();

// //Validar un formulario

//     console.log('enviando formulario');
//  })

 //Eventos de los Inputs y Testarea

 const datos = {
    nombre:'',
    email:'',
    mensaje:''
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');
//con queryselector selecciona una clase una id ...addEventListener agrega un evento.
nombre.addEventListener('input',leerTexto);
email.addEventListener('input',leerTexto);
mensaje.addEventListener('input',leerTexto);
//Evento de Submit
formulario.addEventListener('submit',function(evento){
   evento.preventDefault();
//validar Formulario
const {nombre, email, mensaje} = datos;
if(nombre === ''|| email === ''|| mensaje === ''){
    mostrarAlerta('Todos los campos son obligatorios', 'error')
    return;
}
//enviar formulario
    mostrarAlerta('Formulario Enviado')

});

function leerTexto(e) {       //este evento "e" se agrega automaticamente cuando
                             // se agrega un addEventlistener.
   //  console.log.target.value    
   datos[e.target.id] = e.target.value;  
    // console.log(datos);
}

//mostrar alerta de formulario enviado o formulario mejorado(refactoring)
function mostrarAlerta(mensaje, error = null){
    const alerta = document.createElement('P');
    alerta.textContent = mensaje
    
    if(error){
        alerta.classList.add('error');
    }else{
        alerta.classList.add('correcto')
    }
        formulario.appendChild(alerta)
    
    setTimeout(() => {
        alerta.remove();
    }, 5000);
}
//codigo simple
// //muestra un error en pantalla
// function mostrarError(mensaje){
//     const error = document.createElement('P');
//     error.textContent = mensaje
//     error.classList.add('error');

//    formulario.appendChild(error);

//    //Desaparesca despues de 5 segundos

//      setTimeout(() => {
    //      alerta.remove();
    //  }, 5000);

// };
// //muentra que se envio el formulario

// function mostrarMensaje (mensaje){
    // const alerta = document.createElement('P');
//     alerta.textContent = mensaje
//     alerta.classlist.add('corrercto')

//     formulario.appendChild(alerta);

//     setTimeout(() => {
//         alerta.remove();
//     }, 5000);
// }

