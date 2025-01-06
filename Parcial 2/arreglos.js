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

 // metodo push() agregar elementos al final de un arrary
 let p = [1,2,3,4];
 p.push(5);
 console.log(p);

 //metodo unshift() agrega elementos al inicio de un array
 let q = [1,2,3,4];
 q.unshift(0);
 console.log(q);

 //metodo splice() agrega elementos o elimina elementos en cualquier posición dentro del array
 let r = [1,2,3,4];
 r.splice(1, 0, 5); // Agrega el numero 5 en la posicion 1 sin eliminar elementos eso nos indica el valor 0
 console.log(r);

 r.splice(3,0,8);
 console.log(r);

 // Modificar elementos dentro de un array

 //Podemos acceder a un elemento directamente por su índice y modificarlo
 let s = ['Ana', 'Luis', 'Maria', 'José'];
 //Para acceder directamente a un elemento debemos acceder a su indice directamente para modificarlo
 s[2] = 'Fernando';
 console.log(s);

 //Si deseamo modificar el arreglo de forma inmutable se puede usar el metodo map() => Crea un nuevo arreglo pero modificado 
 //todo el arreglo original no se modifica sino crea uno NUEVO

// let mapArreglo = ['Azul', 'Rojo', 'Verde', 'Amarillo'];
let mapArregloNumeros = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// Operador Ternario : ? funciona como un if  y : funciona como un else
let nuevoArregloMap = mapArregloNumeros.map(num => num === 99 ? 5: num);
console.log(nuevoArregloMap); 

//splice() tambien se puede utilizar
let z = [1, 2, 3, 4, 5];
z.splice(2,1, 7); // En la posicion 2 se modifique el valor por el 7
console.log(z);

//Metodo pop() elimina el ultimo elemento de un array
let a = [1, 2, 3, 4];
a.pop();
console.log(a);

//Metodo shift() elimina el primer elemento de un array
let b = [1, 2, 3, 4];
b.shift();
console.log(b);

//splice() tmb sirve para eliminar cualquier elemento dentro de un arreglo
let nombresE = ['Ana', 'Luis', 'Maria', 'José'];
nombresE.splice(3,1); //Elimina el elemento en la posicion 1 y el otro numero indica cuantos elementos se van a eliminar
console.log(nombresE);
// Es decir (desde cual posicion, cuantos elemento a eliminar)