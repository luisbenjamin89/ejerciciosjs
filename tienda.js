
const valorProducto = 1000

function calcularSeguro(valorproducto) {
    const seguro = valorproducto > 50 && valorproducto < 300  ? valorproducto * 0.15 : valorproducto * 0.2
    return seguro
}

function importeTotal(valorProducto) {
    const total = valorProducto + calcularSeguro(valorProducto)
    return total
}
console.log(`El valor del seguro es ${calcularSeguro(valorProducto)}`)
console.log(`El valor total es ${importeTotal(valorProducto)}`)

module.exports = { calcularSeguro, importeTotal }