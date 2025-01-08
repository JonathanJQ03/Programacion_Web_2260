/*
OBJETOS
 
    Caracteritisticas:
        Claves: Cadenas con simbolos (únicos)
        Valores: Cualquier tipo de dato
    - Ofrecen un gran dinamismo es decir pueden mofidicarse en tiempo de ejecución(agregar, eliminar, modificar) las propiedades
    - Los objetos pueden incluir meotodos, estos metodos son funcionaes asociados a un objeto
    - Objetos ==> Objetos con propiedades y metodos
    */
   //Objeto que se crea en memoria
   let persona = {
       nombre: "Javier",
       apellido : "Jaguaco",
       edad: 20,
       email : "jjjaguaco@espe.edu.ec"
   }
// verificacion de las propiedades que contiene el objeto
   console.log(persona);

// Incluir metodos dentro de los objetos:
   let people = {
       name : "Andres",
       lastname : "Garcia",
       age : 20,
       //implentación de una funcion expresiva
       fullName : function () {
           return "Min nombres completo es: " + this.name + "  " + this.lastname
       }
    }

    console.log(people.fullName());

    const peopleTwo = {
        name : "John",
        lastname : "Alexis",
        age : 22,
        //implentación de una funcion expresiva
        saludar : function () {
            console.log(`Hola, my name is  ${this.name}`);
        }
     }
 
     console.log(peopleTwo.name);
     peopleTwo.saludar();
// instancio el objeto mas no reservo memoria:  const persona1 = new Object();

     const persona1 = new Object();
     persona1.nombre = "Kevin";
     persona1.apellido  = "Velez";
     persona1.saludar = function () {
        console.log(`Hola, mi nombre is  ${this.nombre}`);  
     }
     console.log(persona1.nombre);
     persona1.saludar();
    
     //Usando la clase Object.create() me permite crear un objeto basado en un prototipo
// No le damos aún algún valor para esta función pero le indicamos el prototipo con el cual queremos que se base
// Se puede reutilizar ese objeto 
     const prototipoPersona = {
        saludar : function () {
            console.log(`Hola, desde prototipo ni nombre es:  ${this.name}`);
        }
     }
     //creamos un objeto pero la diferencia al normal es que se crea
     //Aqui asigno memoria y le asocio un prototipo al objeto es decir es una maquetacion de lo q voy a necesitar
     const persona2 = Object.create(prototipoPersona);
     persona2.name = "Mike";
     persona2.saludar();

     //Usando clases (introducido desde ES6 ==> ES2024)
     //Proporcionar una sintaxis mas limpia, consisa y mas estructurada para crear objetos
     class personaClase {
        constructor(nombre,apellido) {
            this.nombre = nombre;
            this.apellido = apellido;
        }
        saludar() {
            console.log(`Hola, mi nombre es:  ${this.nombre} ${this.apellido}`);
        }
     }
     
     const persona3 = new personaClase("Anahi","Velez");
     persona3.saludar();

     //Usando funciones constructoras
     // Forma Clasica, utilizada no muy frecuente

     function personaFunction(nombre,apellido) {
        this.nombre = nombre;
        this.apellido = apellido;  
        this.saludar = function () {
            console.log(`Hola desde funciones constructoras mi nombre es:  ${this.nombre}`);
        } 
     }

     const persona4 = new personaFunction("José","Velez");
     persona4.saludar();

     //Manipulacion datos o propiedades de los objetos
     //1. Agregar o modificar propiedades

     const persona5 = {nombre: 'Pedro'};
     persona5.apellido = "Perez";
     persona5.edad = 25;
     //modificar accediendo a la propiedad y modificandolo 
     // Se modifica en torno a que toma el ultimo valor valido para darlo de atributo
     persona5.nombre = "Javier";
     console.log(persona5);

     //2. Eliminar propiedades
     delete persona5.apellido;
     console.log(persona5);

     //3. Iterar sobre las propiedades de un objeto
     for (nombrePropiedad in persona5) {
        console.log(nombrePropiedad)
        console.log(persona5[nombrePropiedad])
     }

     for (let clave in persona5){
        console.log(`${clave}: ${persona5[clave]}`);
     }

     //4. Verificar las propiedades de un objeto
     console.log('name' in persona5);
     console.log('nombre' in persona5);

     //Forma más USADA de verificar las propiedades de un objeto
     console.log(persona5.hasOwnProperty('nombre'));
     console.log(persona5.hasOwnProperty('apellido'));
     console.log(persona5.hasOwnProperty('edad'));
     console.log(persona5.hasOwnProperty('saludar'));

     //Metodos utiles para trabajar con objetos
     //1. Object.keys() ==> Devuelve un array con las claves de un objeto
     console.log(Object.keys(persona5));

     //2. Object.values() ==> Devuelve un array con los valores de un objeto     
     console.log(Object.values(persona5));

     //3. Object.entries() ==> Devuelve un array con las claves y los valores de un objeto     
     console.log(Object.entries(persona5));

     //4. Object.assign() ==> Copia las propiedades de un objeto a otro objeto     
     const persona6 = Object.assign({}, persona5);
     console.log(persona6);

     //5. Object.freeze() ==> Hace que un objeto sea inmutable     
     //Object.freeze(persona5);
     persona5.edad = 30;
     console.log(persona5);     

     //6. Object.seal() ==> Hace que un objeto sea inmutable pero permite agregar nuevas propiedades     
     Object.seal(persona5);
     persona5.ciudad = "quito";
     persona5.edad = 30;
     console.log(persona5);

     //NOTA: Impresion de los valores de las propiedades de un objeto
     // forma de imprimir todos los valores de un Objeto
     let personaArray = Object.values(persona5);
     console.log(personaArray);

     let personaString = JSON.stringify(persona5);
     //JSON es una notacion es un objeto y el stringfy lo q hace es convertir a cadena o string cada propiedad con su valor 
     console.log(personaString);