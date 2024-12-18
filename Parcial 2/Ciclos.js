//for
const heroes = ["Batman", "Superman", "Flash", "Aquaman", "Spiderman"];

//3 formas de declarar un for

console.warn("For tradicional");
//array.length: me da el tamaño total del array a partir del 0
for (let i = 0; i < heroes.length; i++) {
    console.log(heroes[i]);
}
console.log("Número de arreglos de heroes: " + heroes.length);

//Forma 2: for in
console.warn("-------For in---------");
for (let i in heroes) {
    console.log(heroes[i]);
}

//Forma 3: for of
console.warn("-------For of---------");
for (let heroe of heroes) {
    console.log(heroe);
}

//Uso de la declaracion for 
// usar for tradicional cuando necesitamos control total de los indices del array
// usar for in para el manejo de objetos es decir para iterar un objeto los indice del array
// usar for of para iterar los valores directamente de un iterable (array, cadenas de texto(string), arreglos)
//map,et,nodelist

//continue y break dentro de un ciclo for 

for(let contador = 0; contador <= 10; contador++){
    if(contador % 2 != 0){
        continue; // ir a la siguiente iteracion
    }
    console.log(contador);
}

const carros = ["BMW", "Audi", "Volvo" ,"Pichirilos"];

for(let contador = 0; contador <carros.length; contador++){
    if(contador == 2){ //si se cumple esta condicion entonces no cuenta esa iteracion y continua al otro
        continue; // ir a la siguiente iteracion
    }// por eso no se imprimio el volvo
    console.log(carros[contador]);
}

let i = 0;
while(carros[i]){
    if(i = 1){
        i++;
        continue;
    }
    console.log(carros[i]);
    i++;
}
