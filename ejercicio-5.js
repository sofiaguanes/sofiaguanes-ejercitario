function compararPalabras (palabra1,palabra2){
    if (palabra1<palabra2){
        return `${palabra1} viene antes que ${palabra2} en orden alfabetico.`;

    } else if (palabra1> palabra2){
        return `${palabra1} viene despues que ${palabra2} en orden alfabetico`;
    } else{
        return `${palabra1} y ${palabra2} son iguales.`;
    }
}

//uso 
let palabra1 ="joel";
let palabra2 = "jose";



let resultado = compararPalabras(palabra1,palabra2);

console.log(resultado);

