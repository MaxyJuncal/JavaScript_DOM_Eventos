//querySelector                                            //da un valor de 0 o 1
//nueva forma que se usa son las querySelector
const heading = document.querySelector('.header__texto h2')//Elementos.
heading.textContent = 'Nueva Heading';// textContent--modifica el elemento en el html
console.log(heading);

//querySelectorAll
const enlaces = document.querySelectorAll('.navegacion a');
enlaces[0].textContent = 'Nuevo Texto para Enlace';//modifica el texto
enlaces[0].href = 'https://www.google.com/';//modifica el href
enlaces[0].classList.add('nueva-clase'); //crea una clase nueva
enlaces[0].classList.remove('navegacion__enlace');//borra una clase

// //getElementById  ---- sintaxis que ya no se utiliza es igual que querySelector

// const heading2 = document.getElementById('heading');
// console.log(heading2);

//Generar un Nuevo Enlace

const nuevoEnlace = document.createElement('A');

//Agreagar el href
nuevoEnlace.href = 'nuevo-enlace.html';

//Agregar el texto
nuevoEnlace.textContent = 'Tienda Virtual';

//Agreagar la Clase
nuevoEnlace.classList.add('navegacion__enlace')
// Agregar al Documento
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);

console.log(nuevoEnlace);


//Eventos

console.log(1)

window.addEventListener('load',function(){
    console.log(2)
})

window.onload = function(){  //<---Esto hace los mismo que window.addEventListener('load',function()  
    console.log(3)
}

document.addEventListener('DOMContentLoaded', function(){ //DOMContentLoaded Solo espera que cargue el 
    console.log(4)                                        // HTML, pero no espera CSS o imagenes.
})                                                           

console.log(5)

window.onscroll = function(){
    console.log('scrolling...')
}