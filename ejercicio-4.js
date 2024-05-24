function cualesMayor(num1,num2){
    if(num1>num2){
        return "el primer numero es mayor";
    }else if (num1< num2){
        return "el segundo numero es mayor";
    } else{
        return "ambos numeros son iguales"
    }
}

//uso 

let numero1=40;
let numero2= 20;

let resultado= cualesMayor(numero1,numero2);

console.log(resultado);