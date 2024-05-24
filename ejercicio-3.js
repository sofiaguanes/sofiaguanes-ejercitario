
//function calcularAreaTriangulo(base,altura){
 //   return(base*altura)/2;
//}

//uso
//let base=5;
//let altura= 10;
//console.log("Area del triangulo:",calcularAreaTriangulo(base,altura));

//modificacion para calcular el area de un cuadrado 

function calcularArea(tipo,dimension1,dimension2){
    if(tipo==="triangulo"){
        return(dimension1*dimension2)/2;
    } else if (tipo==="cuadrado"){
        return dimension1*dimension1;
    } else{
        return "tipo de figura no soportado";
    }
}

//uso
let base = 5;
let altura = 10;
console.log("Area del triangulo:",calcularArea("triangulo",base,altura));

let lado = 4;
console.log("area del cuadrado:",calcularArea("cuadrado",lado));

