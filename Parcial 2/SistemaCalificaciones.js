var estudiantes = [
    { nombre: "María Pérez", calificaciones: [14, 16, 15] },
    { nombre: "Juan Gómez", calificaciones: [10, 11, 9] },
    { nombre: "Ana Rodríguez", calificaciones: [17, 18, 16] },
    { nombre: "Carlos López", calificaciones: [7, 6, 8] },
    { nombre: "Sofía Martínez", calificaciones: [13, 15, 14] },
    { nombre: "Pedro Sánchez", calificaciones: [9, 8, 10] },
    { nombre: "Laura Díaz", calificaciones: [16, 17, 15] },
    { nombre: "Miguel Ruiz", calificaciones: [11, 12, 10] },
    { nombre: "Elena Torres", calificaciones: [8, 9, 7] },
    { nombre: "Diego Navarro", calificaciones: [15, 16, 14] }
];

function calcularPromedio(calificaciones) {
    var suma = 0;
    
    for (var i = 0; i < calificaciones.length; i++) {
        suma = suma + calificaciones[i];
    }
    
    var promedio = suma / calificaciones.length;
    
    return promedio;
}

function clasificarEstudiante(promedio) {
    if (promedio >= 16) {
        return "Excelente";
    } else if (promedio >= 12 && promedio < 16) {
        return "Bueno";
    } else if (promedio >= 8 && promedio < 12) {
        return "Aprobado";
    } else {
        return "Reprobado";
    }
}

function encontrarMaxMin(calificaciones) {
    var maximo = calificaciones[0];
    var minimo = calificaciones[0];
    
    for (var i = 1; i < calificaciones.length; i++) {
        if (calificaciones[i] > maximo) {
            maximo = calificaciones[i];
        }
        
        if (calificaciones[i] < minimo) {
            minimo = calificaciones[i];
        }
    }
    
    return { maximo: maximo, minimo: minimo };
}

function procesarEstudiantes() {
    var mejorEstudiante = estudiantes[0];
    var peorEstudiante = estudiantes[0];
    
    console.log("=== RESULTADOS DE ESTUDIANTES ===");
    
    for (var i = 0; i < estudiantes.length; i++) {
        var estudiante = estudiantes[i];
        
        var promedio = calcularPromedio(estudiante.calificaciones);
        
        var clasificacion = clasificarEstudiante(promedio);
        
        var maxMin = encontrarMaxMin(estudiante.calificaciones);
        
        console.log("\nNombre: " + estudiante.nombre);
        console.log("Calificaciones: " + estudiante.calificaciones.join(", "));
        console.log("Promedio: " + promedio.toFixed(2));
        console.log("Clasificación: " + clasificacion);
        console.log("Calificación Máxima: " + maxMin.maximo);
        console.log("Calificación Mínima: " + maxMin.minimo);
        
        if (promedio > calcularPromedio(mejorEstudiante.calificaciones)) {
            mejorEstudiante = estudiante;
        }
        
        if (promedio < calcularPromedio(peorEstudiante.calificaciones)) {
            peorEstudiante = estudiante;
        }
    }
    
    console.log("\n=== RESUMEN ===");
    console.log("Mejor Estudiante: " + mejorEstudiante.nombre + 
                " (Promedio: " + calcularPromedio(mejorEstudiante.calificaciones).toFixed(2) + ")");
    console.log("Peor Estudiante: " + peorEstudiante.nombre + 
                " (Promedio: " + calcularPromedio(peorEstudiante.calificaciones).toFixed(2) + ")");
}

function agregarCalificacion(nombreEstudiante, nuevaCalificacion) {
    for (var i = 0; i < estudiantes.length; i++) {
        if (estudiantes[i].nombre === nombreEstudiante) {
            estudiantes[i].calificaciones.push(nuevaCalificacion);
            console.log("Calificación agregada a " + nombreEstudiante);
            return;
        }
    }
    console.log("Estudiante no encontrado");
}

procesarEstudiantes();

agregarCalificacion("María Pérez", 17);
agregarCalificacion("Carlos López", 9);

console.log("\n=== RESULTADOS DESPUÉS DE AGREGAR CALIFICACIONES ===");
procesarEstudiantes();