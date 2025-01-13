//NOTA: Iniciando el quokka y mirando en la consola se aprencian mucho los detalles del sistema :)

//Definir la clase producto que me va ayudar a almacenar los productos e instanciar sus atributos
class Producto {  
    constructor(nombre, precio, categoria, cantidad) {  
        this.nombre = nombre;  
        this.precio = precio;  
        this.categoria = categoria;  
        this.cantidad = cantidad;  
    }  
}  
//clase inventario que me ayudara con los metodos del inventario
class Inventario {  
    constructor() {  
        this.productos = [];  
    }  
    //Agregramos un producto al final cada que ingresamos un nuevo producto
    agregarProducto(producto) {  
        this.productos.push(producto);  
    }  

    actualizarCantidad(nombre, cantidadVendida) {  
        for (let i = 0; i < this.productos.length; i++) {  
            if (this.productos[i].nombre === nombre) {  
                this.productos[i].cantidad -= cantidadVendida;  
                break;  
            }  
        }  
    }
    
    obtenerInventario() {  
        let inventarioActual = [];  
        for (let i = 0; i < this.productos.length; i++) {  
            let almecenarInmventario = this.productos[i];  
            inventarioActual.push({ nombre: almecenarInmventario.nombre, precio: almecenarInmventario.precio, categoria: almecenarInmventario.categoria, cantidad: almecenarInmventario.cantidad });  
        }  
        return inventarioActual;  
    }

}  

class Venta {  
    constructor() {  
        this.ventas = [];  
        this.totalIngresos = 0;  
        this.productoMasVendido = null;  
    }  

    realizarVenta(producto, cantidad) {  
        if (producto.cantidad >= cantidad) {  
            const total = producto.precio * cantidad; 
            //No tenia muy en claro como usar Object Date asi que simplemente le di una hora especifica de venta 
            const fecha = "13 de Enero del 2025" + "  " + "Hora: 12:35"; 
            this.ventas.push({ producto: producto.nombre, cantidad, fecha, total });  
            producto.cantidad -= cantidad;  
            this.totalIngresos += total;  
            if (!this.productoMasVendido || cantidad > this.productoMasVendido.cantidad) {  
                this.productoMasVendido = { nombre: producto.nombre, cantidad };  
            }  
        } else {  
            console.log(`No hay suficiente stock de ${producto.nombre}`);  
        }  
    }  
    obtenerReporteVentas() {  
        let reporte = {  
            totalIngresos: this.totalIngresos,  
            productoMasVendido: this.productoMasVendido,  
            ventas: []  
        };  
        for (let i = 0; i < this.ventas.length; i++) {  
            let venta = this.ventas[i];  
            reporte.ventas.push({  
                producto: venta.producto,  
                cantidad: venta.cantidad,  
                fecha: venta.fecha,  
                total: venta.total  
            });     
        }  
        return reporte;  
    }
}  

const inventario = new Inventario();  
const venta = new Venta();  
// Aquí es donde aplicó el principio de escalabilidad ya que se permite ingresar productos al inventario
const productos = [new Producto("Camiseta Negra", 20, "Ropa", 120), new Producto("Iphone16", 1400, "Tecnología", 25), new Producto("Zapatos Venus", 15, "Zapatos", 100), new Producto("Papas Fritas", 1.50, "Comida", 1000)];  
productos.forEach(p => inventario.agregarProducto(p));  
for (let i = 0; i < productos.length; i++) {  
    inventario.agregarProducto(productos[i]);  
}  
// Es más facil enviar los productos de la venta acorde el array en donde estan almacenads
venta.realizarVenta(productos[0], 20);  
venta.realizarVenta(productos[1], 4);  
venta.realizarVenta(productos[2], 30);  
venta.realizarVenta(productos[3], 700);  
const reporteVentas = venta.obtenerReporteVentas();  
const inventarioActualizado = inventario.obtenerInventario();  
//Despliegue del reporte de ventas e inventario final
console.log("--- Reporte Final Detallado ---");  
console.log("Inventario actualizado:", inventarioActualizado);  
console.log("Ventas realizadas:", reporteVentas.ventas);  
console.log("Total de ingresos:", reporteVentas.totalIngresos);  
console.log("Producto más vendido:", reporteVentas.productoMasVendido);  
