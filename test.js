const { calcularSeguro, importeTotal } = require('./tienda.js')

describe('calculo de seguro', () => {

  test('si el producto vale entre 50 y 300', () => {
    const  valorproducto= 100
    expect(calcularSeguro(valorproducto)).toBe(15) // Cambia este valor con la media real
  })

  test('Si el producto vale menos de 50', () => {
    const valorProducto = 10
    expect(calcularSeguro(valorProducto)).toBe(2)
  })

  test('Si el producto vale más de 300', () => {
    const valorProducto = 1000
    expect(calcularSeguro(valorProducto)).toBe(200)
  })

})

describe('Calculo de Valores finales', () => {
  test('Si el producto vale entre 50 y 300', () => {
    const valorProducto = 100
    expect(importeTotal(valorProducto)).toBe(115)
  })
  test('Si el producto vale menos de 50', () => {
    const valorProducto = 10
    expect(importeTotal(valorProducto)).toBe(12)
  })

  test('Si el producto vale más de 300', () => {
    const valorProducto = 1000
    expect(importeTotal(valorProducto)).toBe(1200)
  })
})
