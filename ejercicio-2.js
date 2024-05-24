for (let i=50; i <= 150; i++){
    if (i% 3==0 && i % 5 == 0){
        console.log("fizzbuzz");
    } else if (i % 3 == 0){
        console.log("fizz");
    } else if (i % 5 == 0){
        console.log("buzz");
    } else {
        console.log(i);
    }
}



// desafio modificar el programa para imprimir numeros pares del 100 al 600

for (let i =100; i<= 600; i +=2){
    if ( i % 3 === 0 && i % 5 === 0) {
        console.log("fizzbuzz");
    } else if (i % 3 === 0){
        console.log("fizz");
    }else if (i% 5 ===0){
        console.log("buzz");
    }else {
        console.log(i);
    }
}