//Sentencias de control
//if - else

let numero = 10
if(numero == 1){
    console.log("El numero es 1");
}else if(numero ==2){
    console.log("El numero es 2");
}else{
    console.log("El numero no es 1 ni 2, es 10");
}


//Ejercicio:
//Calcular la hora del dia 

//Switch
let mes =  8;
let estacionI = "Estacion Desconocida";
switch(mes){
    case 1: case 2: case 3:
        estacionI = "Invierno";
        break;
    case 4: case 5: case 6:
        estacionI = "Otoño";
        break;
    case 7: case 8: case 9:
        estacionI = "Primavera";
        break;
    case 10: case 11: case 12:
        estacionI = "Verano";
        break;
    default:
        estacionI = "Estacion Desconocida";
}
console.log(estacionI);

//otra forma de usar el if es no usar llaves por los if anidados
