/*La estructura de bloque for...of se usa en JavaScript para
iterar sobre elementos de objetos iterables, como arreglos, cadenas o Map y Set.
Por cada elemento de cada cierta cosa e iterar hasta que
se cumpla cierto loop que estamos buscando
for (variable of iterable) {
    // Bloque de código a ejecutar
}
  for(variable of objeto) {
      codigo 
  }
  
*/

let canasta = ["manzana", "pera", "naranja", "uva"];

for(fruta of canasta){
    console.log(fruta)
}