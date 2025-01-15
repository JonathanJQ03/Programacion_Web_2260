class Inventario{
    //metodo que me va ayudar a instanciar mis objetos
    constructor(nombre,precio,categoria,cantidad){
        this._nombre = nombre;
        this._precio = precio;
        this._categoria = categoria;
        this._cantidad = cantidad
        //puedo instanciar atributos aun asi no los reciba como argumentos
        this._productosInventario = [];
    }
    //Implementar mis metodos que en teoria son mis funciones
    //Los metododos son funciones especiales de modo que 
    /*nombreFuncion(parametros){
        instrucciones;
    }*/
   agregarProducto(producto){
    //cuando agregue un producto se va a guardar en este array pero ya todo instancia
    //con lo del constructor
        this._productosInventario.push(producto);
   }
   //no necesito parametros pq usa lo q esta dentro de eta clase
   ordenarPorPrecio() {
    let n = this._productosInventario.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        // Compara los precios de dos productos consecutivos
        if (this._productosInventario[j]._precio > this._productosInventario[j + 1]._precio) {
          // Intercambia los productos si están fuera de orden
          let temp = this._productosInventario[j];
          this._productosInventario[j] = this._productosInventario[j + 1];
          this._productosInventario[j + 1] = temp;
                }
            }
        }
        return this._productosInventario;
    }
}

//instanciamos los productos cada producto es una entidad diferente
//solo hemos instanciado nada mas que el constructor
const producto1 =  new Inventario("Camiseta Negra", 20, "Ropa", 120);
const producto2 =  new Inventario("Iphone16", 1400, "Tecnología", 25);
const producto3 =  new Inventario("Zapatos Venus", 15, "Zapatos", 100);
const producto4 =  new Inventario("Papas Fritas", 1.50, "Comida", 1000);
const anaquel = new Inventario();
//Debemos agregar los productos al inventario: 
//llamamos al mismo objeto instancio.metodoAbuscas(parametros);
//lo llamamos dentro del mismo producto pq estamos haciendo una instancia hacia ese elemento
anaquel.agregarProducto(producto1)
anaquel.agregarProducto(producto2);
anaquel.agregarProducto(producto3);
anaquel.agregarProducto(producto4);

for(let i = 0; i < anaquel._productosInventario.length; i++){
    console.log(anaquel._productosInventario[i]);
}
console.log(anaquel.ordenarPorPrecio());