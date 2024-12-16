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
