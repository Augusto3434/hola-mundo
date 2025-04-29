/* EJECUCION CONDICIONAL SWITCH
 SI SE CUMPLE LA CONDICION SI ES TRUE ENTRA A UN ESENARIO PREVIO Y EL DEFAULT ES SI NO ENTRA A NINGUN ESCENARIO PREVIO
    switch(expresion){
    case valor1: 
        //Codigo a ejecutar
        break;
    case valor2: 
        //Codigo a ejecutar
        break;
    case valor3: 
        //Codigo a ejecutar
        break;
    case valor4: 
        //Codigo a ejecutar
        break;
        case valor5: 
        //Codigo a ejecutar
        break;
    default:
        //Codigo
    }
*/


let expresion = "Papayas"


switch(expresion){

    case "Naranjas":
        console.log("Las naranjas cuestan en $20 el kilo")
        break;
    case "Manzanas":
        console.log("Las manzanas cuestan $43 el kilo")
        break;
    case "Platanos":
        console.log("El platano esta en $30 el kilo")
        break;
    case "Mangos":
    case "Papayas":
        console.log("Los mangos y las papayas cuestan $25 c/u")
        break;
    default:
        console.log(`Lo siento, no contamos con ${expresion}`);

}
console.log("Hay algo mas que desees?")