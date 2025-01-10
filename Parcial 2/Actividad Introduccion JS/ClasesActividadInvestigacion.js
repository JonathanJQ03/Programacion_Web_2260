class Conductor {
    _nombre;
    _licencia;
    _rutas;

    constructor(nombre, licencia) {
        this._nombre = nombre;
        this._licencia = licencia;
        this._rutas = [];
    }

    getNombre() {
        return this._nombre;
    }

    getLicencia() {
        return this._licencia;
    }

    registrarRuta(ruta) {
        this._rutas.push(ruta);
        console.log(`Ruta registrada para ${this._nombre}: ${ruta}`);
    }

    verRutas() {
        return this._rutas;
    }
}

class Vehiculo {
    constructor(modelo, placa) {
        this.modelo = modelo;
        this.placa = placa;
        this.asignado = false;
    }

    asignar() {
        this.asignado = true;
    }

    desasignar() {
        this.asignado = false;
    }
}

class ConductorVIP extends Conductor {
    constructor(nombre, licencia) {
        super(nombre, licencia);
        this._vehiculoPreferido = null;
    }

    asignarVehiculoPreferido(vehiculo) {
        this._vehiculoPreferido = vehiculo;
        vehiculo.asignar();
        console.log(`Vehículo ${vehiculo.modelo} asignado a conductor VIP ${this._nombre}`);
    }

    getVehiculoPreferido() {
        return this._vehiculoPreferido;
    }
}
const conductor1 = new Conductor("Jonathan Jaguaco", "1756095228");
console.log("Nombre:", conductor1.getNombre());
console.log("Licencia:", conductor1.getLicencia());

conductor1.registrarRuta("Quito - Ambato por la E35");
console.log("Rutas del conductor:", conductor1.verRutas());

const vehiculo1 = new Vehiculo("Chevrolet Grand Vitara", "PCK-4563");
console.log("Modelo:", vehiculo1.modelo);
console.log("Placa:", vehiculo1.placa);
console.log("Estado inicial asignado:", vehiculo1.asignado);

const conductorVIP1 = new ConductorVIP("Ana Valencia", "LVIP1791234567");
console.log("Nombre:", conductorVIP1.getNombre());
console.log("Licencia:", conductorVIP1.getLicencia());;