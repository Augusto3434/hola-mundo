/* EJECUCION CONDICIONAL IF
 IF SI PASA ESTO ENTONCES QUE SE EJECUTE ESTO SI NO ENTONCES QUE SE EJECUTE OTRA COSA
if (let === algo){
  codigo
} else if {
 codigo
} else {
 
}
*/

let nombre = "Nico";

if (nombre === "Diego") {
    console.log("Hola diego");
} else if (nombre === "Nico") {
    console.log("Hola Nico");
} else {
    console.log("Nombre no encontrado")
}
/* console.log("----------------------------------------------")
console.log("Juego Adivina el numero secreto")

const numeroSecreto = Math.floor(Math.random() * 10 + 1);

const numeroJugador = parseInt (
    prompt("Adivina el numero secreto entre el 1 al 10")
);

console.log(` Este es el numero con el que juegas ${numeroJugador}`)
if (numeroJugador === numeroSecreto) {
    console.log("!Felicidades, adivinaste el numero secreto")
} else if (numeroJugador < numeroSecreto){
     console.log("El numero es demasiado bajo, intenta de nuevo")
} else {
    console.log("El numero es muy alto, intenta de nuevo")
} */

    const readline = require("readline");

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    
    const numeroSecreto = Math.floor(Math.random() * 10 + 1); // Número que el jugador debe adivinar
    
    rl.question("Adivina el número secreto: ", (respuesta) => {
        const numeroJugador = parseInt(respuesta);
    
        if (numeroJugador === numeroSecreto) {
            console.log("¡Felicidades! Adivinaste el número secreto.");
        } else if (numeroJugador < numeroSecreto) {
            console.log("El numero es demasiado bajo.");
        } else {
            console.log("El numero es muy alto, intenta de nuevo")
        }
    
        rl.close();
    });


