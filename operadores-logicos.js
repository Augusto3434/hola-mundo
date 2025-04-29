// OPERADORES LOGICOS
// && SI ESTE VALOR Y ESTE VALOR HACEN O SON ESTO ENTCONCES PASA ESTO
// ||  SI ESTE VALOR O VALOR SE CUMPLEN PODEMOS PASAR A ESTO
// ! SI ESTE VALOR NO ES ESTE VALOR ENTONCES PUEDE PASAR ESTA PARTE





const a = 10;
const b = 20;
const c = "10"
const operadorLogioSiSi = (a == b && a == c)
const operadorLogicoSiEsteOSiEste = (a != b || a == c )
const operadorLodigoNegacion = (!(a === c))
console.log(" && El resultado es " + operadorLogioSiSi)
console.log(" || El resultado es " + operadorLogicoSiEsteOSiEste)
console.log("! El resultado es " + operadorLodigoNegacion)