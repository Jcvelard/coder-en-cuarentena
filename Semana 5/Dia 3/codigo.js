const ahora = new Date();

console.log(ahora)

const milisegundos = ahora.getTime();

console.log(milisegundos)

const fechaCero = new Date(0); 

console.log(fechaCero)

const fechaCeroConMilisegundos = new Date (31557600000*51)

console.log(fechaCeroConMilisegundos)

const fechaString = new Date ("July 28 1821 12:00");

console.log(fechaString)

const ejercicio = ((ahora - fechaString))

console.log(ejercicio/31557600000)

console.log(ejercicio/31557600000*12)

console.log(ejercicio/31557600000*12*30)

function fechaCompleta (fechaNacimiento) {
    let cumple = {
        dia:0,
        mes:0,
        anho:0,
    };
const fechaActual = new Date ();
fechaNacimiento = new Date (fechaNacimiento); 

const anho = Math.abs(+(fechaActual.getFullYear() - fechaNacimiento.getFullYear()))

const mes = fechaNacimiento.getMonth() + 1;
const dia = fechaNacimiento.getDate();

cumple.anho = anho
cumple.mes = mes
cumple.dia = dia

return
dia: ${cumple.dia},
mes: ${cumple.mes},
año: ${cumple.anho} 
`;
}









