//Funciones: la idea es que sus valores sean constantes y no se modifiquen

//1. Funcion Declarada
// Los nombres de la funcion son en lowerCamelCase

function sumar (a,b/*Parametros*/) {
    console.log(arguments.length)
    console.log("La suma de lo dos numero es: " + (a + b));
}
sumar(10, 20);

//La palabra return dentro de la funcion sirve para retornar un valor
function myReturn(a,b) {
    return a + b;
}
// Al retornarme un valor no olvidarme de guardar ese retorno
let sumando = myReturn(10, 20);
console.log(sumando);

//Funcion de Tipo Expresión
let multiplicarFuncion = function (a,b) {return (a * b)};
let retorno = multiplicarFuncion(100,234);
console.log(retorno);
console.log(multiplicarFuncion(10, 20));
console.log(typeof multiplicarFuncion);

// Funcion de tipo Self - Invoking
//Son funciones q se llaman a si mismas tmb conocidas como funciones anonimas no son muy comunes pero son utiles para algunos casos

(function (a,b) {
    console.log("Ejecucion de la funcion: " + (a + b));
})(3,4);
//Se pueden usar en programas o aplicaciones q se cargan por primera vez

//Por ejemplo setTimeout es anonima ya q no tiene un nombre en especifico
setTimeout(function () {
    console.log("Hola desde una funcion anonima...");
}, (10000));

const persona = {
    nombre: 'Javier',
    saludar(){
        return 'Hola ' + this.nombre;
    },
    apellido: 'Jaguaco',
    miApellido(){
        return 'Mi apellido es ' + this.apellido;
    }
}

console.log(persona.saludar());
console.log(persona.miApellido());

//Funciones tipo flecha o arrow functions
//Se mantiene como una forma concisa de declarar funciones y es ampliamente utilizados
//En este tipo de funciobnes se elimina la palabra function
const sumarValores = (a,b) => a + b
//declarar nombreFuncion = (parametros) => {instrucciones}
console.log(sumarValores(10,20));
console.log(typeof sumarValores);

//Manejo de multiple funciones dentro de una misma funcion
const operaciones = {sumar : (a, b) => a + b, restar : (a, b) => a - b,multiplicarFuncion : (a, b) => a * b, dividirFuncion : (a, b) => a / b};
console.log(operaciones.sumar(10,20));
console.log(typeof operaciones.sumar);
console.log(operaciones.restar(12,2));
console.log(typeof operaciones.restar);
console.log(operaciones.multiplicarFuncion(40,20));
console.log(typeof operaciones.multiplicarFuncion);
console.log(operaciones.dividirFuncion(100,89));
console.log(typeof operaciones.dividirFuncion);