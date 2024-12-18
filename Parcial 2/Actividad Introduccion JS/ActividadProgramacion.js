//Actividad
console.log("Nomina de Calificaciones de los Estudiantes de la ESPE");
const estudiantes = [
    { nombre: "Juan Pérez", calificaciones: [15, 18, 20, 12, 17] },
    { nombre: "Kevin Amaguaña", calificaciones: [12, 17, 19, 20, 20] },
    { nombre: "Luis Torres", calificaciones: [8, 13, 14, 5, 17, 20] },
    { nombre: "Daniel Guaman", calificaciones: [19, 20, 18, 12, 20] },
    { nombre: "Carlos Ruiz", calificaciones: [7, 10, 12, 20, 20] },
    { nombre: "Jonathan Jaguaco", calificaciones: [20, 19, 18, 3, 4] },
    { nombre: "Miguel Ángel", calificaciones: [14, 16, 15, 12, 11] },
    { nombre: "Sofía Rojas", calificaciones: [11, 13, 12, 12, 12] },
    { nombre: "Pepe Pepito", calificaciones: [17, 18, 19, 10, 10] },
    { nombre: "Susana Morales", calificaciones: [16, 19, 17, 10, 20] }
];

let arrayNotas = [];

for (let i = 0; i < estudiantes.length; i++) {
    let sumatoria = 0;
    for (let j = 0; j < estudiantes[i].calificaciones.length; j++) {
        sumatoria += estudiantes[i].calificaciones[j];
    }
    const promedio = sumatoria / 5;
    arrayNotas[i] = { nombre: estudiantes[i].nombre, promedio: promedio };
}

console.log(arrayNotas);


console.warn("Calificación más alta");
let max = arrayNotas.reduce((acumular, estudiante) => (estudiante.promedio > acumular.promedio ? estudiante : acumular));
console.log(max);


console.warn("Calificación más baja");
let min = arrayNotas.reduce((acumular, estudiante) => (estudiante.promedio < acumular.promedio ? estudiante : acumular));
console.log(min);

for(let i = 0; i < arrayNotas.length; i++) {
    console.log("---------------------------------------------------------");
    console.log(arrayNotas[i].nombre );
    console.log({promedio: arrayNotas[i].promedio});
    if(arrayNotas[i].promedio >= 16 ){
        console.log("Excelente");
    }else if(arrayNotas[i].promedio >= 12 && arrayNotas[i].promedio < 16){
        console.log("Bueno");
    }else if(arrayNotas[i].promedio >= 8 && arrayNotas[i].promedio < 12){
        console.log("Aprobado");
    }else{
        console.log("Reprobado");
    }
}