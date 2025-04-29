// Explicit Type Casting

const string = '42'
const integer = parseInt(string)
console.log(integer)
console.log(typeof integer)

const stringDecimal = '3.14'
const float = parseFloat(stringDecimal)
console.log(float)
console.log(typeof float)

const binary = '1010'
const decimal = parseInt(binary, 2)
console.log(decimal)
console.log(typeof decimal)

// Implicit Type Casting

const sum = '5' + 3
console.log(sum)

const sumWhitBoolean = '3' + true
console.log(sumWhitBoolean)

const sumWhitNumber = 2 + true
console.log(sumWhitNumber)

const stringValue = '10'
const numberValue = 10
const booleanValue = true
console.log('------------------------------')
console.log(stringValue + stringValue) //Concatena
console.log(stringValue + numberValue) //Concatena
console.log(stringValue + booleanValue) //Concatena
console.log(numberValue + stringValue) //Concatena
console.log(numberValue + numberValue) //suma
console.log(numberValue + booleanValue) //suma
console.log(booleanValue + stringValue) //concatena
console.log(booleanValue + numberValue) //suma
console.log(booleanValue + booleanValue) //suma

const numero = '596'
const numeroConvertido = parseInt(numero)
console.log('--------------------------------')
console.log(typeof numero)
console.log(typeof numeroConvertido)