  
//CONDICIONALES

//1.CONDICION BASICA
// if(condicion es true){
//     // hago algo aca
// }else{
//     // hago otra cosa aca(si la condicion es falsa)
// }

//2.CONDICION MULTIPLE
// if(se cumple esta condicion){
//     //mi codigo que se ejecuta si mi condicion es verdadera
// }else if (si se cimple esta otra condicion){
//     //mi codigo si se ejecuta esta otra condicion
// } else if(si se cumple esta otra condicion){
//      //mi codigo si se ejecuta esta otra condicion
// }else{
//     // si ninguna condicion se cumple
// }

//PSEUDOCODIGO
// SI (una condicion es cierta) {
//     ejecuto un codigo aqui
// }SINO{
//     ejcuto aqui un codigo si mi condicion es falsa
// }

// if (condicion) {
//     //hago algo aca
// }else{
//     //hago otra cosa
// }

//PSEUDOCODIGO-MULTIPLE-CONDICIONAL

// SI(CONDICION1 ES VERDADERA){
//     HAGO ESTO QUE ESTA DENTRO DE ESTE PAR DE LLAVES
// }SINO SI(CONDICION2 ES VERDADERA){
//     HAGO ESTE OTRO CODIGO QUE ESTA DENTRO DE ESTE PAR DE LLAVES
// }SINO SI (CONDICION3 ES VERDADERA){
//     HAGO ESTE OTRO CODIGO
// }SINO SI (CONDICION3 ES VERDADERA){
//     HAGO ESTE OTRO CODIGO
// }SINO SI (CONDICION3 ES VERDADERA){
//     HAGO ESTE OTRO CODIGO
// }SINO SI (CONDICION3 ES VERDADERA){
//     HAGO ESTE OTRO CODIGO
// }SINO{
//     SI NINGUNA DE MIS CONDICIONES FUE VERDADERA ACA EJECUTO UN CODIGO
// }

let condicion = true;

if (condicion === true) {
  console.log("Hola amigos , bienvenidos a codiGo!!");
} else {
  console.log("Y que estas esperando ñ_ñ");
}

let a = 0;
let b = 0;

a = 4;
a = 6;
a = 9;

console.log(a);

b = 5;

let suma = a + b;
//  el === compara contenido y tipo
if (suma === "9") {
  //alert("Felicitaciones , adivinaste!!!");
} else {
  //alert("oh , lo siento , sigue intentando!! :)");
}

// == solo compara contenido
let lenguaje_de_programacion = "C++"

if(lenguaje_de_programacion ==="python"){
    console.log("Python es asombroso")
}else if(lenguaje_de_programacion === "javascript"){
    console.log("Javascript tambien lo es !")
}else if(lenguaje_de_programacion === "php"){
    console.log("mejor apaga tu computadora amigo/a xd")
}else if(lenguaje_de_programacion == "c++"){
    console.log("woow tu eres de los bravos ")
}else{
    console.log("que? aun no sabes ninguno ? ñ_ñ")    
}

let cancion="Welcome to the jungle"

if(cancion =="EnterSadman"){
    console.log("Say your prayers, little one Dont forget, my son To include everyone I tuck you in, warm within Keep you free from sin Till the sandman he comes")
}else if(cancion =="Welcome to the jungle"){
    console.log("We got fun and games ...")
}else if(cancion =="Wake me up when september ends"){
    console.log("Summer has come and passed The innocent can never last Wake me up when September ends")
}else
    console.log("No sabes ingles")    

    //* FUNCIONES
    
function imprimeMiNombre(nombre) {
    if (nombre === "") {
      return "Debes ingresar un nombre";
    }
  
    if (nombre === undefined) {
      return "Debes ingresar un valor valido";
    }
  
    return ` Mi nombre es ${nombre}`;
  }
  
  // y && -> si mi condicion1 es cierta Y mi condicion2 es cierta hago algo....
  
  // o  || -> si mi condicion1 es cierta O mi condicion2 es cierta hago algo....
  
  //con un parametro
  //imprimeMiNombre("Josue")
  
  //console.log(imprimeMiNombre("Josue"));
  
  //console.log(imprimeMiNombre(""));
  
  console.log(imprimeMiNombre());
  
  console.log(imprimeMiNombre("Josue"));
  
  console.log(imprimeMiNombre(""));

  
  