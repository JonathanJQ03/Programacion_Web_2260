//Temporizadores:
//Funciones para realizar acciones despues de x tiempo o reaalizarlas repetidas veces
//Set time out: recibe una callBack y un tiempo en milisegundos
//setTimeout(callback,tiempo); todo lo de dentro del callback se va ejecutar
setTimeout(function () {
    console.log("Esto se va a ejecutar despues de 5 segundos");
}, 5000) ;//Esto se ejecutara una sola vez

//Set interval: recibe una callBack y un tiempo en milisegundos
//Se ejecutara la callback o function cada cierto tiempo
const i = 0;
setInterval(function (i) {
    console.log(`Esto se ejecuta cada iteracion ${i}`);
    i++;
},1000)
