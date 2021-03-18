function clima(grados) {
    if (grados === undefined) {
        return "Debes intrudocir una temperatura";
      }
    if (grados === 12){
        return  "Hoy sera un dia muy frio"
    }
    if(grados === 18){
        return "Tendremos un dia calido"
    }
if (grados === 25){
        return  "Hoy sera un dia muy caluroso"
    }
}

    console.log(clima())
    console.log(clima(12))
    console.log(clima(18))
    console.log(clima(25))
