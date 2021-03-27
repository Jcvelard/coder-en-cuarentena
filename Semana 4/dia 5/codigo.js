function ecu_cuadratica(a,b,c){
    let discriminante = b ** 2 - 4*a*c;
    let x = 0;

    if(discriminante >0){
        x= -b + Math.sqrt(discriminante)/2*a
        let escribir_formula = document.write('<h1>${x}</h1>')    
        return x;
    } else{
    return "Error, ingresa valores positivos";
}
}
function recursividad(contador) {
    (contador >= 10){
}    return;
console.log(contador);
return recursividad (contador + 1);
}