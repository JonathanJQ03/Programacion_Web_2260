let nomina = [
    { nombre: "Kevin", calificaciones: [0,0, 0, 0, 0] },
    { nombre: "Juan", calificaciones: [12, 17, 19, 20, 20] },
    { nombre: "Luis", calificaciones: [8, 13, 14, 5, 17, 20] },
    { nombre: "Daniel", calificaciones: [19, 20, 18, 12, 20] },
    { nombre: "Carlos", calificaciones: [7, 10, 12, 20, 20] },
    { nombre: "Jonathan", calificaciones: [20, 19, 18, 3, 4] },
    { nombre: "Miguel", calificaciones: [14, 16, 15, 12, 11] },
    { nombre: "Sofía", calificaciones: [11, 13, 12, 12, 12] },
    { nombre: "Pepe", calificaciones: [17, 18, 19, 10, 10] },
    { nombre: "Susana", calificaciones: [16, 19, 17, 10, 20] }
];
let notaAgregada = 20;
let notaAgregada2 = 19;
let arrayPromedios = [];
for (let i = 0; i < nomina.length; i++) {
    nomina[i].calificaciones.push(notaAgregada,notaAgregada2)
}
for (let i = 0; i < nomina.length; i++) {
    console.log(nomina[i].calificaciones);
}
for(let i = 0;i < nomina.length; i++){
    let promedio = 0;
    for(let j = 0; j < nomina[i].calificaciones.length; j++){
        promedio = promedio + nomina[i].calificaciones[j];
    }
    promedio = promedio / 7;
    arrayPromedios[i] = promedio;
    if(promedio >= 16){
        nomina[i].nombre = "Excelente";
    }else if(promedio >= 12 && promedio < 16){
        nomina[i].nombre = "Bueno";
    }else if(promedio >= 8 && promedio < 12){
        nomina[i].nombre = "Aprobado";
    }
    else{
        nomina[i].nombre = "Reprobado";
    }
}
for (let i = 0; i < nomina.length; i++) {
    console.log(nomina[i].nombre);
}
let promedioInicial = 0;
let promedioAlto = arrayPromedios.reduce((promedioNota, promedioInicial) => (promedioNota > promedioInicial ? promedioInicial = promedioNota : promedioInicial = promedioInicial));
console.log(promedioAlto.toFixed(2));

let promedioMenor = arrayPromedios.reduce((promedioNota, promedioInicial) => (promedioNota < promedioInicial ? promedioInicial = promedioNota : promedioInicial = promedioInicial));
console.log(promedioMenor.toFixed(2));

console.log(nomina)
