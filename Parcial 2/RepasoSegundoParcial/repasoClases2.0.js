//Clases: Plantillas -> constructores -> metodos

class Mascota{
    constructor(nombre,colorSombrero,colorPiel){
        this._nombre = nombre,
        this._colorSombrero = colorSombrero,
        this._colorPiel = colorPiel
    }
    //metodos para obtener valores ,modificar y camvbiar datos del objeto
    //get: obtener valor
    //set: asignar, cambiar o dar un nuevo valor

    //ambos metodos
    //un get no puede tener el mismo nombre que el atributo de la clase en la que me encuentro
    //es por ello que el constructor lelga en el this el "_" guion bajo
    get nombre(){
        //al solo obtener un dato no necesito q la función tenga parametros
        //dentro del bloque de codigo de lo que yo quiero obtener
        //me va a regresar un dato entonces uso el return
        return this._nombre;
    }
    //este valor si recibe un argumento que se le va a modificar
    set nombre(nombreRecibir){
        //el this._nombre es el atributo de la clase y se modifica con el nuevo nombre recibido por metodo set
        this._nombre = nombreRecibir
    }
    get obtenerTodoValor(){
        //puedo obtener todos los valores concatenandolos
        //return this._nombre + ", " + this._colorSombrero + ", " + this._colorPiel;
        return `${this._nombre}, ${this._colorSombrero}, ${this._colorPiel}`;
        //tmb puedo mandarlos como un string directamente
    }
}
//a la hora de llamar los metodos get y set no es necesairio poner las llavecitas()

let mascota1 = new Mascota("Luna","Negro","Blanco");
//metodo get el cual me devuelve el nombre de la mascota
console.log(mascota1.nombre);
// metodo set ya que estopy cambiando el nombre desde el atributo
//pero no es recomendable modificar asi los atributos del objeto
mascota1.nombre = "Peach";
console.log(mascota1.nombre);

console.log(mascota1.obtenerTodoValor)
