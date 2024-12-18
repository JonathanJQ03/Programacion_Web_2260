//declaración

const arr = new Array(10);
const arr1 = []
console.log(arr);
console.log(arr1);

const numeros = [1, 2, 3, 4, 5];
let colores = ["rojo", "verde", "azul"];
console.log(numeros);
console.log(colores);

//Ejercicio
let videoJuegos = ["Mario", "Zelda", "Metroid", "Donkey Kong", "Pokemon"];
console.log(videoJuegos[2]);
console.log(videoJuegos);
console.log({videoJuegos})

let arregloCosas = [
    true,
    123,
    "Fernando",
    1 + 3,
    function(){},
    ()=>{},
    ['S', 'Peliculas']
];
console.log(arregloCosas);
console.log(arregloCosas[1]);

//Metodos de los arreglos
//---Metodos Funcionales---
//map(), filter(), reduce()
 //map() transforma los elementos del arreglo
 let numeros2 = [1, 2, 3, 4, 5];
 //map itera dentro del arreglo para realizar algun tipo de operaciones DENTRO
 let cuadrados = numeros2.map(num => num * num);
 console.log({cuadrados});

 //filter() filtra los elementos del arreglo que cumplen algun tipo de condicion
 let numeros3 = [1, 2, 3, 4, 5];
 let pares = numeros3.filter(num => num % 2 == 0);
 console.log({pares});

 //reduce() reduce los elementos del arreglo a un solo valor
 let numeros4 = [1, 2, 3, 4, 5,6,7,8,9,0,10];
 let max = numeros4.reduce((acumular , num) =>(num > acumular ? num : acumular));
 console.log({max});

 //Ventajas
 // Ideales para trabajar con transformaciones y manipualaciones complejas dentro de datos de un array
 //Permiten un estilo de programacion funcional y mas limpio y facil de leer