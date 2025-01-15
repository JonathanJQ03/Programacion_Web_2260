//Es como una plantilla para crear objetos, estos objetos creados a partir de aqui tendran las mismass caracteristicas "atributo y metodos"
//A pesar que sea una plantilla cada objeto puede tener atributos diferentes a loos demas objetos creados de esa clase
// una clase internamente tiene un CONSTRUCTOR Y METODOS ("FUNCIONES PARA OBJETOS")

//SINTAXIS DE UNA CLASE

class Personajes{
    //el constructor me ayuda a definir los atributos los objetos
    constructor(nombre,colorSombrero){
    //El constructor tiene los atributos
        this._nombre = nombre,
        this._colorSombrero = colorSombrero
    }
    saltar(){

    }
    correr(){

    }
    saludar(){
        //concatenar objetos con texto
        return `Hola soy ${this._nombre} y mi sombrero es de color ${this._colorSombrero}`;
    }
    //Metodos get y set: 
    //get muestra el valor del atributo
    //set modifica el valor del atributo

    get nombre(){
        return this._nombre;
    }
    set modificar(/*parametros*/nuevoNombre){
        this._nombre = nuevoNombre;
    }
}

let player1 = new personajes("Mario","Rojo");
let player2 = new personajes("Luigi","Verde");
//vista de los atributos del objeto
console.log(player1);
console.log(player2);
//vista de la funcion de la clase
console.log(player1.saludar());
console.log(player2.saludar());

console.log(player1.nombre);
player1.modificar = "Peach";
console.log(player1);

//Herencia de una clase padre a una clase hija (SUBCLASES): hereda atributos y metodos pero del mismo modo lo que hace es
//tener sus propios atributos y metodos
class Mascota extends Personajes{
    constructor(nombre,colorSombrero,colorPiel){
        //super: indiica los parametro q se crearan en la clase padre
        super(nombre,colorSombrero)
            this._colorPiel = colorPiel;
    }
}



