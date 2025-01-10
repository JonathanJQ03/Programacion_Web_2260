//Metodos Get en JS
//Metodos que permiten usar a manera de buenas practicas de programación
//Permiten acceder y modificar objetos y a sus valores de las propiedades

let personaGet = {
    nombre : "Luis", 
    apellido : "Perez",
    email : "luisperez@espe.edu.ec",
    edad : 20,
    /*
    Forma que no es tan buena practica de programación
    nombreCompleto : function () {
        return this.nombre + " " + this.apellido;
    }*/
   //Forma alternativa pero usando el metodo GET el cual no ES UNA PROPIEDAD es un METODO
   get nombreCompleto() {
       return this.nombre + " " + this.apellido;
   }
}
console.log(personaGet);
console.log(personaGet.nombreCompleto)

//Metodos Set en JS
//Permiten modificar los valores de las propiedades de un objeto


//Validación 
let personaSet = {
    nombre : "Luis", 
    apellido : "Perez",
    email : "luisperez@espe.edu.ec",
    edad : 20,
    idioma: 'es',
    //Metodo que me permite modificar un valor preoviamente establecido dentro de mi metodo get
    get lang(){
        return this.idioma.toUpperCase();
    },
    get nombreCompleto() {
        return this.nombre + " " + this.apellido;
    }
}
console.log(personaSet.lang);

//Set
let personaSet1 = {
    nombre : "Luis", 
    apellido : "Perez",
    email : "luisperez@espe.edu.ec",
    edad : 20,
    idioma: 'es',
    //Metodo que me permite modificar un valor preoviamente establecido dentro de mi metodo get
    get lang(){
        return this.idioma.toUpperCase();
    },
    //Implemento el metodo set, envio un parametro el cual va a saer modificado
    set lang(lang){
        this.idioma = lang.toUpperCase();
    },
    get nombreCompleto() {
        return this.nombre + " " + this.apellido;
    }
}
//Se permite enviar un parametro para que pueda ser modificado a la hora de entrar a ese método
console.log(personaSet1.lang);

personaSet1.lang = 'en';

console.log(personaSet1.lang);

personaSet1.lang = 'fr';

console.log(personaSet1.lang);

//Constructores en JS
//Se se desea crear mas objetos del mismo tipo esto NO ES POSIBLE
//Es por ello que se usan constructores los cuales son funciones especiales que permiten trabajar con objetos en Js

//function constructora de tipo persona
function personaFC(nombre,apellido,correo,edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.correo = correo;
    this.edad = edad;
}
//Podemos reutilizar esto de esta forma:
// Sintaxis: variable identificador_variable = new name_constructor ("argumentos");
let padreFC =  new personaFC("Jose","White","josewhite@espe.edu.ec",50);//La variable ya no se hace variable
//Ahora es uun metodo que permite crear un objeto de tipo persona
console.log(padreFC);
//La finalidad de esto es para poder reutilizar el constructor

let madreFC = new personaFC("Maria","White","mariawhite@espe.edu.ec",49);
console.log(madreFC);

// Si deseo agregar una propiedad sin modificar los objetos ya creados entonces:

padreFC.telefono = "0412-123456";
console.log(padreFC);
//Agregue en tiempo de ejecucion una propiedad a un objeto sin modificar a los demás
console.log(madreFC);

//Agregar un metodo a una funcion constructora

function personaFCMetodos(nombre,apellido,correo,edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.correo = correo;
    this.edad = edad;
    this.nombreCompleto = function () {
        return this.nombre + " " + this.apellido;
    }
}
let padreFCMetodos = new personaFCMetodos("Jose","White","josewhite@espe.edu.ec",50);
//implemetación de una funcion dentro del constructor, a este si se lo llama con funcion con "()";
console.log(padreFCMetodos.nombreCompleto());
// Del mismo se permite usar esas funciones como plantillas
let madreFCMetodos = new personaFCMetodos("Maria","White","mariawhite@espe.edu.ec",49);
console.log(madreFCMetodos);

//Para crear una funcion dentro del objeto se usa la sintaxis:
// Uso del prototype: Sirve para agregar una propiedad a TODOS los objetos el mismo valor:propiedad
personaFCMetodos.prototype.telefono = "0412-123456";
console.log(padreFCMetodos);
console.log(madreFCMetodos);

//Uso de Call:
//Tenemos dos objetos los cuales
let personaCall1 = {
    nombre : "Luis", 
    apellido : "Perez",
    nombreCompleto: function () {
        return "Hola desde Call 1:" + this.nombre + " " + this.apellido;
    }
}

let personaCall2 = {
    nombre : "Jose",
    apellido : "White",
}

//Para usar el metodo de nombreCompleto de personaCall1 en personaCall2 se usa el metodo call
//con los datos de persona call 2

console.log(personaCall1)
console.log(personaCall2)

console.log(personaCall1.nombreCompleto.call(personaCall2));

//Como pasar parametros a traves del metodo call:
//
let personaCallParametros1 = {
    nombre : "Luis", 
    apellido : "Perez",
    nombreCompleto: function (titulo,telefono) {
        //this es para una propiedad dentro del objeto y los otros sin this. pq son parametros
        return this.nombre + " " + this.apellido + " " + titulo + " " + telefono;
    }
}
let personaCallParametros2 = {
    nombre : "Jose",
    apellido : "White",
}
console.log(personaCallParametros1.nombreCompleto("Ingeniero","0412-123456"));
console,log(personaCallParametros1.nombreCompleto.call(personaCallParametros2,"Ingeniero","0412-123456"));

//Uso de Apply:
let personaApply1 = {
    nombre: "Pepe",
    apellido: "Grillo",
    nombreCompleto: function (titulo,telefono) {
        return this.nombre + " " + this.apellido + " " + this.titulo + " " + this.telefono;
    }
}

let personaApply2 = {
    nombre : "Jose",
    apellido : "White",
}

console.log(personaApply1.nombreCompleto());
console.log(personaApply1.nombreCompleto.apply(personaApply2));

let arreglo = ["Ingeniero","0412-123456"];
//Envio los datos de un arreglo y del mismo modo del array
console.log(personaApply1.nombreCompleto.apply(personaApply2,arreglo));