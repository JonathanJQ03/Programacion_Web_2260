console.log("Bienvenido al Gestor de Objetos");

class InventarioProductos{
    constructor(nombre,precio,cantidad){
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
        // Esta parte de aqui consulte para saber como usar seal en un objeto dentro de una clase
        Object.seal(this);
    }
}

let producto1 = new InventarioProductos("Coca Cola",2.35,100);
let producto2 = new InventarioProductos("Papitas",1,200);
let producto3 = new InventarioProductos("Chupetes Acidos",0.25,500);
let producto4 = new InventarioProductos("Bebida Energetica Monster",4,50);

function ventasProductos(nombre,cantidad){
    if(producto1.nombre === nombre){
        if(producto1.cantidad >= cantidad){ 
            console.log("El producto se encuentra disponible");
            producto1.cantidad -= cantidad;
            console.log("La cantidad disponible es: " + producto1.cantidad);
            console.log("Venta Exitosa :D");
        }else{
            console.log("El producto no cuenta con la suficiente cantidad disponible...");
        }
    }else{
        console.log("El producto no se encuentra dentro de el inventario");
    }
}
//Aqui se cambia el valor de descuento para los productos y se valida que no sean negativos los precios
let descuento = 0.10;
function descuentoProductos(nombre, precio,descuento){
    if(descuento > 1 || descuento < 0){
        console.log("El descuento no es valido");
    }else{
        const precioDescuento = precio - (precio * descuento);
        console.log("El producto es: " + nombre);
        console.log("El precio sin descuento es: " + precio);
        console.log("El precio con descuento es: " + precioDescuento);    
    }
}

console.log(InventarioProductos);   
