const greeting = function (name){
    return `Hi, ${name}`
}
// Arrow function - explicit return
const newGreeting = (name) =>{
    return `Hi, ${name}`
}

// Arrow function - implicit return
const newGreetingImplicit = name =>`Hi, ${name}`
const newGreetingImplicitWhitTwoParameters = (name, lastName) => `Hi, I'm ${name} ${lastName}`


// Lexical Binding

const finctionalCharacter = {
    name: 'Uncle Ben',
    messageWhitTraditionalFunction: function ( message){
        console.log(`${this.name} says: ${message}`)
    },
    messageWhitArrowFunction: (message) => {
        console.log(`${this.name} says: ${message}`)
    }

}
finctionalCharacter.messageWhitTraditionalFunction('Whit great power comes great responsability.')
finctionalCharacter.messageWhitArrowFunction('Beware of Doctor Octopus')