//Las funciones callBack son funciones que pasan como argumento a otras funciones 
//De modo que se ejecutan dentro de otra funcion sin interrumpir su flujo normal de ejecucion
/*Ejemplo:
function modify(array,callback){
    //hacemo algo...
    array.push("elemento");
    //despues de hacer algo...
    callback();
    //Al callback puedo pasarle argumentos tmb
}*/
function modify(array,callback){
    array.push("Nimu");
    callback(array);
};

const names = ["Jose", "Hernest", "Juan", "Pepe"];

modify(names,/*Vamos a pasarle un callback*/function(array){
    console.log(`Hemos modificado el Array... ademas es de ${array.length} elementos`);

});

//----------------------------------------------------------------------------------------------------------//
    //Parametro: Es la variable o el contenedor que tiene nuestro valor real
    //Argumento: El valor real o contenido 
    //Si los callBacks se pasan como argumentos entonce deben ser tal cual las funciones mas no una variable que contenga la función

//ejemplo
//La funcion principal va a recibir como argumento la funcionCB
//El argumento realmente es una referencia de la funcion original para usarla cuando la necesite
//Podemos ejecutarla en la parte que necesitemos en el codigo
//No olvidar que el callBack puede recibir parametros para funcionar
//Puedo pasar varios CAllBacks como yo desee

function main(funcionCB) {
    console.log("Primero hago algo y luego ejecuto el callBack");
    //necesitamos llamar a mi callBack
    funcionCB();
};

function funcionCB() {
    console.log("Ejecutando el callBack");
}

//aca llamamos a la funcion
//No olvidar que las funciones se ejecutan cuando yo las llamo 
//De otro modo no realizan nada por si solas, el codigoe xiste pero no interactua si hago el llamado de la funcion
main(funcionCB);

//puedo realizar validaciones de parametros para evitar errores y llamar callBacks

//1. creo mi funcion userName q va a recibir un callback
function userName(callBackUN) {
    var  name = "Juan";
    //hago el llamado del callBack y envio el parametro que va a necesitar el callback
    //el callback necesita un name para ejecutar su msj
    callBackUN(name);
};
//el callback imprime un msj acorde un parametro recibido
function callBackUN(name) {
    console.log("Tu nombre de usuario es: " + name);
};
//llamo a mi funcion
//hacer: userName(callBack("parametros")); no es valido ya q envio solo la referencia
//el callback recibe parametros cuando se lo invoca dentro de la funcion no en el llamado
userName(callBackUN)

//------Ejemplo 2--------//
function userName(callBackUN,name) {
    //aqui tmb aplica el sobreescribir datos
    name = "Juan";
    callBackUN(name);
};
function callBackUN(name) {
    console.log("Tu nombre de usuario es: " + name);
};
userName(callBackUN,"Pepe");

//------Ejemplo 3--------//
function mathematics(valor1, valor2,callbackMath) {
    var res = valor1 + valor2;
    callbackMath(res);
}
function callbackMath(res) {
    console.log("El resultado es: " + res);
}
mathematics(23,12,callbackMath);

//Nos sirven la funciones callBack para tener un codigo en torno a funciones mas reutilizable
