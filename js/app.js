const email = document.getElementById('email');
const comentario = document.getElementById('comentario');
const nombre = document.getElementById('nombre');
const btnSubmit = document.getElementById('btn-submit');
const spinner = document.querySelector('.loader');
const error = document.querySelector('.error');
const formulario = document.getElementById('enviar-coment')
const exito = document.querySelector('.exito');
const errorp = document.querySelector('.error-p');
const errorpn = document.querySelector('.error-p-n');
const errorpt = document.querySelector('.error-p-t');

eventListeners();
function eventListeners(){
    document.addEventListener('DOMContentLoaded', inicioApp);
    email.addEventListener('blur', validarEmail);
    comentario.addEventListener('blur', validarComentario);
    nombre.addEventListener('blur', validarNombre);
    btnSubmit.addEventListener('click', enviarComentario);
}
function inicioApp(){
    btnSubmit.disabled = true;
    spinner.style.display = 'none';
    error.style.display = 'none';
    exito.style.display = 'none';
    errorp.style.display = 'none';
    errorpn.style.display = 'none';
    errorpt.style.display = 'none';
}
function validarNombre(){
    if(nombre.value.length > 3){
        errorpn.style.display = 'none';
    }else {
        errorpn.style.display = 'block';
    }
}
function validarComentario(){
    if(comentario.value.length > 3){
        errorpt.style.display = 'none';
        btnSubmit.disabled = false;
    }else {
        errorpt.style.display = 'block';
    }
}

function validarEmail(){
   if(email.value.length > 3 && email.value.indexOf('@')){
        errorp.style.display = 'none'
   }else {
       errorp.style.display = 'block';
   }
}
function enviarComentario(e){

    
    e.preventDefault();
  
    spinner.style.display = 'block';
    
    setTimeout(()=>{
        spinner.style.display = 'none';
        exito.style.display = 'block';
        formulario.reset();
        btnSubmit.disabled = true;
        setTimeout(()=>{
            exito.style.display = 'none';
            
        }, 3000);
    }, 3000);

    e.preventDefault();
}
