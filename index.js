const edad = Number(
    prompt('Dime tu edad'),
) /* asi es true, sin el number seria false */
console.log(edad)
console.log(typeof edad)
if (edad === 20) {
    console.log('Tienes 20 años')
} else {
    console.log('No tienes 20 años')
}
