let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;


function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;

}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    let cantidadJuegos = 3;

    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
        document.getElementById('intentar').setAttribute('disabled','true');
    
    } else {
        //el usuario no acertó
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El número secreto es menor');
        } else{
            asignarTextoElemento('p','El número secreto es mayor');
        }
  
        limpiarCaja();
        if (intentos == cantidadJuegos) {
            asignarTextoElemento('p', `Llegaste a tu máximo de intentos ${cantidadJuegos}`);
            document.getElementById('reiniciar').removeAttribute('disabled');
            document.getElementById('intentar').setAttribute('disabled','true');
        } 

        intentos++;
    }
    return;
    
}

function generarNumeroSecreto() {
   let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;
   console.log(numeroGenerado);
   //si ya sorteamos todos los números
  /* if (listaNumerosSorteados == numeroMaximo) {
    asignarTextoElemento('p','Ya se sortearon todos los números posibles');
   } else {
   //si el número generado está incluido en la lista
   if (listaNumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();
   } else {
    listaNumerosSorteados.push(numeroGenerado);*/
    return numeroGenerado;
   }

function limpiarCaja() {
   document.querySelector('#valorUsuario').value = '';
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}, solamente tienes 3 intentos`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1; 
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalo de números
    //generar el número aleatorio
    //inicializar el número intentos
    condicionesIniciales();
    //deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    document.querySelector('#intentar').removeAttribute('disabled');
}


condicionesIniciales();




