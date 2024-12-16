//Tipos de datos string
// var --> undeprecated
// let --> moderno
// const --> moderno
var nombre = "Javier";
let apellido = "Jaguaco";
const edad = 21;
console.log("nombre");

//Tipos de datos string
// Variables con valores definidos
let nombre1 = "Jonathan";
let apellido1 = "Quituisaca";
console.log(nombre1);
// Variables con valores a definirse
let nombre2;
nombre2 = "Javier";
console.log(nombre2);

let numero = 1000;
console.log(numero);

//tipos de dato tipo funcion
function saludar() {}
console.log(typeof saludar);

//tipo de dato symbol
let simbolo = Symbol("Mi Simbolo"); // Puede ser usado como identificador unico
console.log(typeof simbolo);

// Tipo de dato clase

class Persona {
  //Declaracion de la clase
  constructor(nombres, apellidos, edades) {
    //atributos, constructor
    this.nombres = nombres;
    this.apellidos = apellidos;
    this.edades = edades;
  }
}

consolo.log(typeof Persona);

//Tipo de dato undefined se puede utilizar como un valor
let variable;
console.log(variable);
console.log(typeof variable);
// si no asigno valores a mi variable entonces son undefined

//tipo de dato null
let variableNull = null;
console.log(variableNull);
console.log(typeof variableNull);

//Tipos de datos en arreglos de JS
let autos = ["BMW", "Chevrolet"];
console.log(autos);
console.log(typeof autos);

//Tipos de datos generados por cadenas vacias
let cadenaVacia = ";";
console.log(cadenaVacia);

//Reglas de JS para Variables
// no inician en numeros,simbolos o mayusculas

//Formas Correctas de una variable
let nombresCompletos = "";
let nombres_completos = "";
let a1nombresCompletos = "";

//Existen palabras reservadas en JS
// var, let, const, abstract, break

/*--------------------------------------------------------
            Operadores en JS
--------------------------------------------------------*/
//Operadores aritmeticos
let num1 = 45;
let num2 = 78;
console.log;

//Precedencia de operadores
//1. Parentesis
//2. Exponente
//3. Multiplicacion y division
//4. Suma y resta
//Se ejecutan de izquierda a derecha O DE DERECHA A IZQUIERDA segun sea el caso
let pre1 = 2,
  pre2 = 3,
  pre3 = 4,
  pre4 = 5;

let pre5 = (pre1 + pre2) * pre3;
console.log(pre5);

let pre6 = (pre1 + pre2) * pre3;
console.log(pre6);

//Operadores de asignacion
//asignacion =
//Suma +
//Resta -
//Multiplicacion *
//Division /
//Modulo %
//Exponente **

let operador1 = 3,
  operador2 = 2;
operador1 += operador2;
console.log(operador1);

//Operadores de comparacion
//Igual == :  se utiliza para comparar si dos vartiables son iguales en valor no es estricto
//Distinto !=
//Menor que <
//Mayor que >
//Menor o igual <=
//Mayor o igual >=
// Triple igual === :  se usa para comparar si dos vartiables son iguales en valor y del mismo tipo de  dato si es estricto
let operador3 = 3,
  operador4 = 3;
let operador10 = operador3 == operador4;
console.log(operador10);

let operador11 = operador3 === operador4;
console.log(operador11);

//Determinar si un numero es par o impar
let numeroD = 5;
if (numeroD % 2 == 0) {
  console.log("Es par");
} else {
  console.log("Es impar");
}
//Determinar si una persona es mayor de edad
let numeroEdad = 12;
if (numeroEdad > 18) {
  console.log("Es mayor de edad");
} else {
  console.log("Es menor de edad");
}
//De un conjunto de valores de 10 valores , determinar cuandos son pares y cuantos son impares
let conjunto = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let pares = 0;
let impares = 0;
for (let i = 0; i < conjunto.length; i++) {
  if (conjunto[i] % 2 == 0) {
    pares++;
  } else {
    impares++;
  }
}
console.log(pares);
console.log(impares);
//Operadores logicos
//AND &&
//OR ||
//NOT !

let s = 12;
let valMin = 12,
  valMax = 20;
if (s >= valMin && s <= valMax) {
  console.log("Esta dentro del rango");
} else {
  console.log("No esta dentro del rango");
}

//operadores ternarios
let edad = 10;
let mensaje = edad >= 18 ? "Es mayor de edad" : "Es menor de edad";
console.log(mensaje);
