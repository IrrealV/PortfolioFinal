//hacer que un div ocupe toda la pantalla
$(document).ready(function () {
    var altura = $(window).height();
    $('#carga').height(altura)
});

//Hacer desaparecer la vista una vez cargado el contenido
window.onload = function () {
    var contenedor = document.getElementById('carga');
    var barra = document.getElementById('barra');
    var imagen = document.getElementById('img-responsive');
    barra.style.width = '100%';
    imagen.style.rotate = '0%';

    setTimeout(() => {
        contenedor.style.visibility = 'hidden';
        contenedor.style.opacity = '0';
        setTimeout(() => {
            contenedor.style.display = 'none';
        },"1000")
    }, "2000")
    
};

//Copiar url al portapaeles
var compartir = document.getElementById('compartir');
var notificacion = document.getElementById('notificacion');
notificacion.style.opacity = 0
compartir.addEventListener('click', function(evento){
    var dummy = document.createElement('input'),
    text = window.location.href;

    try{
    document.body.appendChild(dummy);
    dummy.value = text;
    dummy.select();
    document.execCommand('copy'); //Está en deshuso pero igualmente sigue funcionando
    document.body.removeChild(dummy);
    }catch{
        console.log('No se ha copiado bien'+ Error)
    }

    notificacion.style.transition = 'all 1s ease';
    notificacion.style.animation = 'popup 0.5s linear ';
    notificacion.style.opacity = 100
    notificacion.style.transform= 'translate(100%, 20%)';
   
    setTimeout(() => {
        notificacion.style.transition = 'all 1s ease-out';
        notificacion.style.transform= 'translate(100%, -100%)';
        notificacion.style.opacity = 0
    }, "1500")

    
})

//cambiar una imagen por otra cuando hace hover
const anchoOriginal = document.getElementById('imageIcono').width;
const imagenOriginal = document.getElementById('imageIcono').getAttribute('src');
function hover(imagen){
    imagen.setAttribute('src', '../resources/profile.png');
    imagen.width = anchoOriginal;
};

function unHover(imagen){
    imagen.setAttribute('src', `../${imagenOriginal}` )
}

//alternar colores cuando hover
function colorHover(color){
    color.style.animation='suaveCambio 0.5s linear'
    setTimeout(() => {
        color.style.filter= 'invert(100%)';
    }, "400")
}
function colorNotHover(color){
    color.style.animation='suaveDesCambio 0.5s linear'
    setTimeout(() => {
        color.style.filter= 'invert(0%)';
    }, "400")
}