
function CalcularPromedio(nota1,nota2,nota3) {
    let promedio = 0;
    promedio = (nota1 + nota2 + nota3) / 3;
    return promedio;
}

const determinarMayor = function(num1,num2){
    if(num1>num2){
        return num1;
    }else{
        return num2;
    }
}

const esPar = (a) => (a % 2 === 0 ? true : false);

(function(){
    let resultado1 = CalcularPromedio(20,12,16);
    console.log("El promedio es: " + resultado1);
    let resultado2 = determinarMayor(76,78);
    console.log("El mayor es: " + resultado2);
    let resultado3 = esPar(89);
    console.log("Es par: " + resultado3);

})(CalcularPromedio,determinarMayor,esPar);