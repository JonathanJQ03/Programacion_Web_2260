//Tener en cuenta que javascript realiza una sola tarea a la vez independiente de los nucleos de mi computadora
//asincronia :Capacidad que tiene el lenguaje para ejecutar tareas sin bloquear el hilo principial de ejecución
//Debemos controlar el flujo  de tareas de modo que usamos asincronia
//Js es un lenguaje que trabaja de manera secuencial

//Callbacks: Son funciones que se pasan como argumentos a otras funciones es la forma mas común de controlar estos procesos asincronos
/*
function addToArray(data,array,callBack) {
    if(!arrayUsadas para verificar si noss pasan algun argumento con "!parametro"){
        callBack(new Error("Array inexistente"),null);
    }else{
        array.push(data);
        //El primero argumento de las funciones callback por definicion es si existe un error es decir un true o false
        callBack(null,array);
    }   
}

    -La funcion inserta un elemento al final del array de modo que usa un callback como parametro para hacer la impresion   
    - Si nos fijamos bien esta funcion es enviada a la hora de ser llamada la funcion principal
    - Del mismo modo podemos enviar un callback en la hora de ser llamada o como una referencia a la otra funcion
let array = [1,2,3];
addToArray(4,array,function(err) {
    console.log(array);
}); */

//Vamos a convertirla en un proceso asincrona
//es una operación asincrona ya que estamos controlando el tiempo que se ejecute una acción de modo que la otra esta realizandose
//No evitamos el flujo normal del programa 

/*function addToArray(data,array,callBack) {
    if(!array Usadas para verificar si noss pasan algun argumento con "!parametro"){
        callBack(new Error("Array inexistente"),null);
    }else{
        setTimeout(function () {
            array.push(data);
            callBack(null,array);
        },3000)
        
    }   
}

let array = [1,2,3];
console.log(array);
addToArray(4,array,function(err) {
    console.log(array);
});*/

//Tenemos un problema de esto y es que si encadenamos un callBack tras otro callBack llegamos a algo que llamamo CallBack Hell
//El callBack Hell se convierte en un problema de leer la sintaxis, entender y de depurar pero actualmente tenemos soluciones los cuales se llaman 

/*----------------Promesas en JS -----------------*/
//Una promesa es una forma mas elegante de llevar una asincronia 
//Una promesa trata de una operacion que aun no se a completado pero si se espera que se complete a futuro ya sea exitosa o no esa operacion

//Ejemplo de promesa

function añadirElementos (dato,arrayN) {
    //Usamos la palabra reservada promise
    //sintaxis promise (funcion(esta funcion tiene dos argumentos a su vez))
    const promise =  new Promise(function (resolve,reject) {
        //resolve: Cuando ha sido exitosa la promesa es exitosa y devolvemos los datos o mensaje exitoso
        //reject:Cuando la promesa ha sido rechazada
        setTimeout(function () {
            arrayN.push(dato);
            //resolvemos el array si todo ha sido exitoso
            resolve(arrayN);
        },1000);
    })
    if(!arrayN){
        reject(new Error("Array inexistente"));
    }
    return promise;
}
//funciones especiales que se encadenan a las promesas:

let arrayN = [1,2,3];
//Forma de llamara a una promesa en caso de todo salga bien
//usamos .then(arrow function) para indicar que vamos a realizar algo si la promesa es exitosa
añadirElementos(4,arrayN).then(function () {
    console.log(arrayN);
});
//podemos anexar .then de modo
añadirElementos(5,arrayN)
    .then(()=>{
        añadirElementos(6,arrayN);
        
    })
    .then(()=>{
        añadirElementos(7,arrayN);
    })
    .then(()=>{
        console.log(arrayN);
    })
    //el catch me ayuda a imprimir errores en caso de que algo salga mal
    .catch(function (error) {
        console.log(error);
    });

    /*---------------Async and Await---------------*/
    //Caracteristica que se introdujo en la version 7 (2016) de JS
    //Es como hacer lo mismo que las promesas pero escrito de otra forma aunque su funcionalidad es la misma
    //Async declara una función asincrona
    //Await espera que se cumpla esa promesa

    async function processData(data,array) {
        try {
            //indicamos que para obtener el resultado primero debemos esperar con el await
            //Es decir no podemos seguir al resultado de la siguiente linea hasta que añadirElementos se ejecute
            const resultado =  await añadirElementos(data,array);
            console.log(resultado);

        } catch (error) {
            return console.log(error);
        }
    }

    processData(8,arrayN);
//Nueva forma de escribir pero enviando los datos de manera mas facil y directa
    const resultado =  await añadirElementos(9,arrayN).catch(error => console.log(error));
    console.log(resultado);
