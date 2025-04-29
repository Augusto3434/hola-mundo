//Funciones puras
/*
  SIDE EFFECTS
  1.- Modificar variables globales
  2.- Modificar parametros
  3.- Solicitudes HTTP
  4.- Imprimir mensajes en pantalla o consola
  5.- Manipulacion del DOM
  6.- Obtener la  hora actual

*/

function sum (a, b){
    return a + b
}

// Funciones impuras
function sum (a, b){
    console.log('A: ', a)
    return a + b
}

//Funcion impura con variables globales
let total = 0

function sumWhitSideEffect ( a) {
    //total = total + a
    total += a
    return total
}


// Funciones puras
function square (x){
    return x * x
}

function addTen ( y){
    return y + 10
}

const number = 5
const finalResult = addTen(square(number))
console.log(finalResult)
