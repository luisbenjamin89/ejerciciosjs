function sumar(operando1, operando2) {
    let suma = operando1 + operando2
    console.log(`La suma de ${operando1} y ${operando2} es ${suma}`)
}
function restar(operando1, operando2) {
    let suma = operando1 - operando2
    console.log(`La resta de ${operando1} y ${operando2} es ${suma}`)
}
function mostrarResultados(operando1, operando2) {
    sumar(operando1, operando2)
    restar(operando1, operando2)
}
mostrarResultados(20, 30)
mostrarResultados(2, 1)
