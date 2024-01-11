const fecha = new Date()
const año = fecha.getFullYear()
const añoNacimiento = 2008
const esMayorEdad = año - añoNacimiento >= 18
console.log(esMayorEdad)
const edad = año - añoNacimiento
if (esMayorEdad) {
    console.log('Puedes beber alcohol :)')
} else {
    console.log(`Tienes que esperar ${18 - edad} años para poder beber alcohol`)
}
