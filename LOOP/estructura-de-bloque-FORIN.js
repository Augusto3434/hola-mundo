/*
El bloque for...in en JavaScript se usa para recorrer 
las propiedades (claves) de un objeto.
🔹 for...in es ideal para recorrer objetos, pero no es recomendable para arrays porque también recorre propiedades heredadas, lo que puede causar problemas.
Para arrays, es mejor usar for...of o forEach(). 🚀

for in -----> objetos(=propiedades= valor)

for ( variable in objeto) {
    codigo
}
*/


const listaDeCompras = {
    manzana: 5,
    pera: 3,
    naranja:2,
    uva: 1
}
for (fruta in listaDeCompras){
    console.log(fruta)
}

for (fruta in listaDeCompras){
    console.log(`${fruta} : ${listaDeCompras[fruta]}`);
}
