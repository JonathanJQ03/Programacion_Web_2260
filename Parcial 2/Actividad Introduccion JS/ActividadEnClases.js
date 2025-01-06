//Funcion para Validar
const validarValores = (num1, num2, num3) => {return typeof num1 === 'number' && typeof num2 === 'number' && typeof num3 === 'number'};
//Funcion Declarada
function calcularPromedio(num1,num2,num3) {
    return (num1+num2+num3)/3;
}

//Funcion Expresada
const determinarMayor = (num1, num2) => {return num1 > num2};

//Funcion Flecha
const esPar = (valor) => valor % 2 === 0 ?  true  :  false;

//Funcion Anonima
(function(num1, num2, num3){
    if (validarValores(num1, num2, num3)) {
        console.log(calcularPromedio(num1, num2, num3));
        console.log(determinarMayor(num1, num2));
        console.log(esPar(num1));
    }else{
        console.log("Existen valores no numericos");
    }
})(95,67,30);

