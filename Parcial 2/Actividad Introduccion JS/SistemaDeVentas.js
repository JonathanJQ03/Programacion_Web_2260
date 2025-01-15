class Producto {
    static contadorProductos = 0;
    
    constructor(nombre, precio, categoria, stock) {
        if(precio > 0) {
            this._idProducto = ++Producto.contadorProductos;
            this._nombre = nombre;
            this._precio = precio;
            this._categoria = categoria;
            this._stock = stock;
        } else {
            console.log("Los precios de los productos deben ser mayores a $0");
        }
    }

    get idProducto() {
        return this._idProducto;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }

    get precio() {
        return this._precio;
    }

    set precio(precio) {
        this._precio = precio;
    }

    get categoria() {
        return this._categoria;
    }

    set categoria(categoria) {
        this._categoria = categoria;
    }

    get stock() {
        return this._stock;
    }

    reducirStock(cantidad) {
        if (this._stock >= cantidad) {
            this._stock -= cantidad;
            return true;
        } else {
            console.log(`Stock insuficiente para ${this._nombre}. Stock actual: ${this._stock}`);
            return false;
        }
    }

    toString() {
        return `idProducto: ${this._idProducto}, Nombre: ${this._nombre}, Precio: $${this._precio}, Categoría: ${this._categoria}, Stock: ${this._stock}`;
    }
}

class Orden {
    static contadorOrdenes = 0;
    
    static get MAX_PRODUCTOS() {
        return 5;
    }

    constructor() {
        this._idOrden = ++Orden.contadorOrdenes;
        this._productos = [];
        this._contadorProductosAgregados = 0;
    }

    get idOrden() {
        return this._idOrden;
    }

    agregarProducto(producto, cantidad = 1) {
        if(this._productos.length < Orden.MAX_PRODUCTOS) {
            if (producto.reducirStock(cantidad)) {
                this._productos.push(producto);
                return true;
            }
        } else {
            console.log(`No se pueden agregar más productos a la Orden...`);
            return false;
        }
    }

    descuentosElectronicos() {
        let proporcionDescuento = 0.10;
        for (const producto of this._productos) {
            if(producto._categoria === "Electronica") {
                producto._precio = producto._precio - (producto._precio * proporcionDescuento);
            }
        }
    }

    calcularTotal() {
        let totalVenta = 0;
        for (const producto of this._productos) {
            totalVenta += producto._precio;
        }
        return totalVenta;
    }

    calcularImpuestos() {
        const TASA_IMPUESTO = 0.16; // 16% de impuesto
        const subtotal = this.calcularTotal();
        const impuesto = subtotal * TASA_IMPUESTO;
        return {
            subtotal: subtotal,
            impuesto: impuesto,
            total: subtotal + impuesto
        };
    }

    listarProductosDescendente() {
        return [...this._productos].sort((a, b) => b._precio - a._precio);
    }

    mostrarInformacionOrden() {
        let productosOrden = '';
        const productosOrdenados = this.listarProductosDescendente();
        
        for (const producto of productosOrdenados) {
            productosOrden += `${producto.toString()}\n`;
        }

        const calculoFinal = this.calcularImpuestos();
        
        console.log(`
Orden: ${this._idOrden}
Productos:
${productosOrden}
Subtotal: $${calculoFinal.subtotal.toFixed(2)}
Impuesto (16%): $${calculoFinal.impuesto.toFixed(2)}
Total con impuestos: $${calculoFinal.total.toFixed(2)}
        `);
    }
}

// Pruebas del sistema
console.log("=== Prueba del Sistema de Ventas ===");

// Crear productos
let prodc1 = new Producto("Laptop", 500, "Electronica", 30);
let prodc2 = new Producto("Mouse", 10, "Electronica", 50);
let prodc3 = new Producto("PC", 1250, "Electronica", 10);
let prodc4 = new Producto("Monitor", 100, "Electronica", 25);
let prodc5 = new Producto("Celular", 300, "Electronica", 30);
let prodc6 = new Producto("Tablet", 500, "Electronica", 80);
let prodc7 = new Producto("Teclado", 50, "Electronica", 120);

// Prueba de precio negativo
console.log("\n=== Prueba de validación de precio ===");
let prodc9 = new Producto("Laptop", -500, "Electronica", 340);

// Crear primera orden
console.log("\n=== Primera Orden ===");
let orden1 = new Orden();
orden1.agregarProducto(prodc1);
orden1.agregarProducto(prodc2);
orden1.descuentosElectronicos();
orden1.mostrarInformacionOrden();

// Crear segunda orden (prueba de límite de productos)
console.log("\n=== Segunda Orden (Prueba de límite de productos) ===");
let orden2 = new Orden();
orden2.agregarProducto(prodc3);
orden2.agregarProducto(prodc4);
orden2.agregarProducto(prodc5);
orden2.agregarProducto(prodc6);
orden2.agregarProducto(prodc7);
// Intentar agregar un sexto producto
orden2.agregarProducto(prodc1);
orden2.descuentosElectronicos();
orden2.mostrarInformacionOrden();

// Prueba de stock insuficiente
console.log("\n=== Prueba de stock insuficiente ===");
let orden3 = new Orden();
orden3.agregarProducto(prodc1, 31); // Intentar agregar más unidades que el stock disponible