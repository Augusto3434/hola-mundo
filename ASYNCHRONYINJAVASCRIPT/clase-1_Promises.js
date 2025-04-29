/*
promise()
Estados:
pending
fullfilled
Rejected

callback:
resolve
reject

then()
catch()

*/

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let operationSuccessful = true
        if(operationSuccessful){
        resolve("La operacion fue existosa")
    } else {
        reject("Fallo la operacion")
    }
    }, 2000)
    
})
promise
  .then((succesMessage)=> {
    console.log("Exito")
  })
  .catch((errorMessage) => {
    console.log(errorMessage)
  })