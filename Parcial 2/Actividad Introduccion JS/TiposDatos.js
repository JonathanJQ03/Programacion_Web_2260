/**
 * - `var` declara una variable global, pero no es una buena práctica usarla, 
 *   ya que puede generar errores debido a la falta de restricción en su alcance.
 * 
 * - `let` se utiliza para variables cuyo valor será modificado más adelante, 
 *   como en los bucles, donde el valor puede ser reasignado, o en funciones callbacks.
 * 
 * - `const` es para valores únicos que no cambiarán. Se usa cuando el valor de la variable 
 *   debe permanecer constante durante la ejecución, como en las funciones.
 */
 
//typeof: indica el tipo de dato de una variable o valor
// = : operador de asignación, asigna un valor
// == : operador de igualdad, compara dos valores y devuelve un booleano
// === : operador de igualdad de valor y tipo de dato, compara dos valores y devuelve un booleano
// != : operador de desigualdad, compara dos valores y devuelve un booleano
// !== : operador de desigualdad de valor y tipo de dato, compara dos valores y devuelve un booleano

let number = 16;
let n = 8;
let number2 = 10;
let number3 = "16";
let number4 = "cinco";
console.log(number);
console.log(typeof number);
console.log(number == number2);
console.log(n == number);
console.log(number == number3);
console.log(number === number3);
console.log(typeof number);

function validarNumero(a) {
    if (typeof a === 'number') {
      console.log('Es un número válido');
    } else {
      console.log('No es un número');
    }
  }
  validarNumero(true);  
  validarNumero(23);

  //symbol:  tipo de dato que representa un identificador unico
  let simbolo = Symbol("mi simbolo"); 

//nombramos variables como upperCamelCase e inician en una letra minuscula

/*
  OPERADORES ARITMETICOS: 
  +, -, *, /, %. **
  %: me da el residuo de un numero
*/

/*
  OPERADORES DE INCREMENTO Y DECREMENTO:
  ++, -- :  aumentan en 1 o quitan 1 al valor asignado
  - Si estan despues de la variable se llama post-incremento
  - Si estan antes de la variable se llama pre-incremento
  ponerlo antes o despues hace que primero incrementa y luego devuelva el valor
  ponerlo despues hace devolver el valor y luego incrmentar
*/

let a =77;
let b = a++;
let c= ++a;
console.log(a);
console.log(b);
console.log(c);
console.log(a);

//Operadores Logicos
//AND &&
//OR ||
//NOT !

//Operador ternario: forma abreviada de un if y un else
function verificarPar(num){
    num % 2 === 0 ? console.log("Es par") : console.log("Es impar"); 
}
verificarPar(11);

//Conversion de datos:  se convierte un tipo de dato a otro sin
// que el programador lo indique
/*
Convertir un string a numero solo hace la parte numero
    - parseInt() convierte un string a un numero entero
    - number() convierte un string a un numero pero si este es totalmente un numero

*/
 
//Sentencias de control: Control del flujo de ejecución es decir toma de decisiones durante la ejecucion
//1. condicionales: if else y swich
// If - else: Usado tal cual un if else
// swich: Usado para evaluar multiples condiciones
// tiene a los case como valores a recibir para la condicion
//puede ser valor numerico o string
let dia = 4
switch(dia){
    case 1: 
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miercoles");
        break;
    case 4:
        console.log("Jueves");
        break;
    case 5:
        console.log("Viernes");
        break;
    default:
        console.log("No es un dia de la semana");
        break;
}

//2. Ciclos:
//Tenemos al for, do while y al while
 // 3 formas de un for
 //1. for tradicional: control total de los indices del array
 const array1 = [1,2,3,4,5];
 for(let i = 0; i < array1.length; i++){
    console.log(array1[i]);
 }
 //2.  for in: usado en objetos e imprime las claves :valor del objeto

 const persona = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Madrid"
  };
  
  for (let propiedad in persona) {
    console.log(propiedad + ": " + persona[propiedad]);
  }
  
  //3. for of: Imprime directamente los valores
  //una variable recibe los valores e itera sucesivamente
  let heroes = ["Batman", "Superman", "Flash", "Aquaman", "Spiderman"];
  for (let h of heroes){
    console.log(h);
  }

  //continue y break en un ciclo for
  //continue: salta a la siguiente iteracion del ciclo
// break se sale del bucle
let numerosArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let n of numerosArray){
    if (n % 2 ===0){
        continue;
    }
    else{
        console.log(n);
    }
}


//Arrays: Colecciona datos DE UN MISMO TIPO DE DATO
//Estructuras dinamicas no es necesario definir el tamaño
//El indice comienza desde 0
const arrayVacio = [];
console.log(arrayVacio)
let arrayNombres = ["Jose", "Luis", "Pedro"];
//Metodos funcionales en los arreglos: Crean arreglos no modifican
//1. map(): itera los elementos y realiza alfun calculo

let numeros = [1, 2, 3, 4, 5];
// numeros es el elemento de cada arreglo que se va a iterar
// map() usa una funcion flecha
//funcion flecha dice: parametros => instrucciones
let cuadrados = numeros.map(valor => valor*valor);
console.log(cuadrados);

//2. filter(): filtro los elementos acorde una condicion

let onlyNumeros = [1,3,5,"jose",true,"23",67,0];
let soloNumeros = onlyNumeros.filter((datoNumerico) => (typeof datoNumerico === "number"));
console.log(soloNumeros);

//3. reduce(): reduce todos los elementos a un solo valor
//no olvidar q es mejor tener todo dentro de parentesis separados
let calificaciones =[15, 18, 20, 12, 17];
let notaMinima = 0;
let mayorCalificacion = calificaciones.reduce((notaMayor, notaMinima) =>( notaMayor > notaMinima ? notaMinima = notaMayor : notaMinima = notaMinima));
console.log(mayorCalificacion);

// push(): agrega elementos al final de un arreglo
// unshift(): agrega elementos al inicio de un arreglo
// como el array es un tipo de objeto entonces podemos acceder a esos metodos
let agregarArrays = [1, 2, 3, 4, 5];
agregarArrays.push(6);
agregarArrays.unshift(0);

console.log(agregarArrays);

//metodo splice(agregar o modificar un elemento dentro de un arreglo)
// idea : (posicion, 1:  elimnar 0: agregar, valor a agregar)

let agregarArrays2 = [1, 2, 3, 4, 5];
agregarArrays2.splice(0,1,"Cero");

console.log(agregarArrays2);
agregarArrays2.splice(4,0,"agregado");
console.log(agregarArrays2);
//Si se agrega un elemento todos los elemntos a la derecha recorren una posicion
//metodo map ayuda a interar y modificar un elemento acorde una funcion

//pop(): elimina el ultimo elemento de un arreglo
//shift(): elimina el primer elemento de un arreglo

//splice(): sirve para eliminar elementos de modo que
//(posicion , cuantos elementos se van a eliminar a la derecha)
let nombresE = ['Ana', 'Luis', 'Maria', 'José'];
nombresE.splice(1,2);
console.log(nombresE);

/*
-----   funciones      -----
Pedazos de codigo que me ayudan a resolvear tareas de modo que mejorar la legibilidad, modularidad
del codigo ademas permiten la reutilziacion de este mismo
*/
//1. funcion declarada: forma tradicional de una funcion, son reutilizables
/*function nombreDeLaFuncion(parámetros) {
    // Bloque de código
    // Acción que realiza la función
}*/
function triplicarValores (a,b,c){
    return a*a*a + b*b*b + c*c*c;
}
let valor1 = triplicarValores(1,2,3);
console.log(valor1);
/*
    2. funcion expresada: Tambien conocidas como anonimas
    No se declaran con function sino que son asignadas a una variable y pueden no tener nombre
    const nombreDeLaFuncion = function(parámetros) {
    // Bloque de código
    // Acción que realiza la función
};
es anonima cunado no tiene nombre despues de function
pueden ser callbacks: es decir una funcion q puede pasar como argumento a otra y esta ejecutarla cuando la necesite
*/ 

const promedioFuncion = function(a,b,c){
    let promedio = (a+b+c)/3;
    console.log(promedio);
    return promedio;
}
 
function sumaPromediosParciales(promedioFuncion){
    let promedio1 = promedioFuncion(1,2,3);
    let promedio2 = promedioFuncion(4,5,6);
    let promedio3 = promedioFuncion(7,8,9);
    let sumaPromedial = promedio1 + promedio2 + promedio3;
    console.log(sumaPromedial);    
    return sumaPromedial;
}
//Llamo a mi funcion y envio como parametro la funcion expresada
console.log(sumaPromediosParciales(promedioFuncion));

/*
    Funcion Self - Invoking
    Son funciones q se llaman a si mismas tmb conocidas como funciones anonimas no son muy comunes pero son utiles para algunos casos
    funciones que se aislan del resto del codigo pero pueden ser llamadas para su uso
    puede recibir parametros del exterior pero tmb enviar parametros al exterior
    (function() {
    // Código de la función
})();
*/
(function (a,b) {
    console.log("Ejecucion de la funcion: " + (a + b));
})(3,4);
 //4. funciones de tipo flecha
 //sintaxis: (parametros) => (instrucciones)
 /*
 Cuándo usarlas:

Para funciones cortas y simples
En callbacks
Para métodos de array (map, filter, reduce)
Cuando no necesitas el contexto de this
Para retornos inmediatos de valores

Cuándo NO usarlas:

Como métodos de objetos que necesitan acceder a this
En funciones constructoras (no pueden usar new)
Cuando necesitas la palabra clave arguments
 */
//Sirven para almacenar funciones separadas con ","
const sumarValores = (a,b) => (a + b);
console.log(sumarValores(10,20));
