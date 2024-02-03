/*//desafio 1

function saludo() {
    console.log('Hola mundo!');
}
saludo();

//desafio 2

function mostrarNombre(nombre) {
    nombre = prompt('INGRESA TU NOMBRE');
    console.log(`¡Hola ${nombre}!`);
}

mostrarNombre();

//desafio 3

function devolverDobleNumero(numero) {
    numero = prompt('INGRESA UN NÚMERO');
    numero = numero * 2;
    console.log(numero);
    return;
}

devolverDobleNumero();

function promedioTresNumeros(valor1, valor2, valor3, promedio) {
    valor1 = 6;
    valor2 = 6.5;
    valor3 = 7.5;
    promedio = valor1 + valor2 + valor3;
    promedio = promedio / 3;

    console.log(promedio);

    return;

}

promedioTresNumeros();

function devolverNumeroMayor(numero1, numero2) {
    numero1 = 5;
    numero2 = 6;

    if (numero1 > numero2) {
        console.log(`El número mayor es: ${numero1}`);
    } else {
        console.log(`El número mayor es: ${numero2}`);
    }

    return;
}

devolverNumeroMayor();

function devolverNumeroMultiplicado(numero) {
    numero = 25;

    numero = numero * numero;
    console.log(numero);
    return;

}
devolverNumeroMultiplicado();

function indiceMasaCorp(altura, peso) {
       
    let IMC = peso / Math.pow(altura, 2);
    console.log(IMC) 
    return IMC;
}
indiceMasaCorp(1.80, 95);

function factorial(numero) {
    if (numero === 0 || numero === 1)
         {
        return 1;
    } else {
        return numero * factorial(numero - 1);
    }
}
let numero = 5;
let resultado = factorial(numero);
console.log(`el factorial de ${numero} es ${resultado}`);

function convertirDolares(valorDolar) {
    let real = 4.80;
    if (valorDolar == 1) {
        return real;
    } else {
        return valorDolar * real;
    }

}
let valorDolar = 0;
let conversion = convertirDolares(valorDolar);
console.log(`La conversión de $${valorDolar} en reales es: R$${conversion}`);

//otro metodo
function convertirDolaresAReales(dolares) {
    var cotizacionDolar = 4.80;
    var reales = dolares * cotizacionDolar;
    return reales;
  }
  // Ejemplo de uso
  let valorEnDolar = 2;
  let valorEnReales = convertirDolaresAReales(valorEnDolar);
  console.log(`${valorEnDolar} dólares  es R$ ${valorEnReales}`);

  function areaPerimetro(alto, ancho) {
    
    let area = alto * ancho;
    let perimetro = (alto + ancho)*2;
    console.log(`el area de la sala rectangular es  ${area}cm^2 y su perimetro ${perimetro}`);
    return area, perimetro;

  }

  areaPerimetro(2, 4);
 


  function areaPerimetroC(radio) {
    let pi = 3.14;
    let areaC = pi * (radio * radio);
    let perimetroC = 2 * pi * radio;
    console.log(`el area de la sala circular es ${areaC}cm^2 y su perimetro ${perimetroC}`);
    return;

  }
  areaPerimetroC(3);
    

  function tablaMultiplicar(numero) {
    let contador = 0; 
    let multiplicacion = 0;
    while (contador < 10) {
       
        contador++;
        multiplicacion = numero * contador;
        console.log(`${numero} x ${contador} = ${multiplicacion}`);
    }
    return;
    
  }

tablaMultiplicar(5);


//desafios array
// 1.
let listaGenerica = [];

console.log(listaGenerica);

// 2. y 3.
let lenguajesDeProgramacion = ['JavaScript', 'C','C++','Kotlin','Python'];

lenguajesDeProgramacion.push('Java','Ruby','GoLang');

// 4.
function mostrarLenguajes() {
    console.log(lenguajesDeProgramacion);
}
mostrarLenguajes();

// 5.
function mostrarLenguajesInversos() {
        let lenguajes = lenguajesDeProgramacion.reverse();
        console.log(lenguajes);
}
mostrarLenguajesInversos();

// 6.
function calcularPromedio() {     
    let numeros = [5,7,8,9,6];     
    let total = numeros.reduce((a, b) => a + b, 0);  
    let promedio = total/numeros.length;   
    console.log(promedio); 
    return; 
} 
    
    calcularPromedio();
// 7.
    function evaluarNumero() {
        let numeros = [5,7,8,9,6];  
        //numero máximo
        let numGrande = Math.max(...numeros);
        console.log(numGrande);
        //numero minimo
        let numPequenio = Math.min(...numeros);
        console.log(numPequenio);
    }
    evaluarNumero();

// 8.
function suma() {     
    let numeros = [5,7,8,9,6];     
    let total = numeros.reduce((a, b) => a + b, 0);
    console.log(total);
}
suma();
//9.
function devolverPosicion(numero) {
    let posicion = [];
    let listaNumeros = [7,10,2,4,6];
    let ubicarNumero = listaNumeros.indexOf(numero);
    
    posicion.push(ubicarNumero);

    console.log(posicion);

}
let numero = 5;
devolverPosicion(numero);
Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.

function sumaListas(lista1, lista2) {
    let nuevaLista = [];
    let sum = lista1


}
let listaNum1 = [5,6,2,4];
let listaNum2 = [7,1,9,3];

sumaListas(listaNum1, listaNum2);
Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.
*/

/*eliminar el último elemento de un array
frutas.pop();
console.log(frutas); // Salida: ["Manzana", "Uva", "Naranja"]*/