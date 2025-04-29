/*
Estructura de datos

key / value

objeto{
   propiedad: valor,
   propiedad: valor,
   propiedad: valor
   Metodos
}


*/ 


const persona = {
    nombre: "Jhon",
    edad: 30,
    direccion: {
        calle: "Av Insurgentes 187",
        ciudad: "CDMX"
    },
    saludar(){
        console.log(`Hola, mi nombre es ${persona.nombre}`)
    }
}