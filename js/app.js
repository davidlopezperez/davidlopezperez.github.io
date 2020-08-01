const email = document.getElementById('email');
const comentario = document.getElementById('comentario');
const nombre = document.getElementById('nombre');
const btnSubmit = document.getElementById('btn-submit');
const spinner = document.querySelector('.loader');
const error = document.querySelector('.error');
const formulario = document.getElementById('enviar-coment')
const exito = document.querySelector('.exito');


eventListeners();
function eventListeners(){
    document.addEventListener('DOMContentLoaded', inicioApp);
    email.addEventListener('blur', validarCampos);
    comentario.addEventListener('blur', validarCampos);
    nombre.addEventListener('blur', validarCampos);
    btnSubmit.addEventListener('click', enviarComentario);
}
function inicioApp(){
    btnSubmit.disabled = true;
    spinner.style.display = 'none';
    error.style.display = 'none';
    exito.style.display = 'none';
}
function validarCampos(){
    validarLongitud(this);
    validarEmail(email);
    if(email.value !== '' && comentario.value !== '' && nombre.value !== ''){
        btnSubmit.disabled = false;
        
    }
}
function validarLongitud(campo){
    if(campo.value.length > 0){
        campo.style.borderBottomColor = 'green';
    }else {
        campo.style.borderBottomColor = 'red';
    }
}
function validarEmail(campo){
    const texto = campo.value;
    if(texto.indexOf('@')=== -1 ){
        error.style.display = 'block';
    }else {
        error.style.display = 'none';
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
