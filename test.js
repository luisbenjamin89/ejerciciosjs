const { calcularMedia, mostrarGanador } = require('./gimnastas.js');

describe('calcularMedia', () => {
  test('debería calcular la media correctamente', () => {
    const puntuaciones = [80, 95, 123]
    expect(calcularMedia(puntuaciones)).toBe(99.33) // Cambia este valor con la media real
  })
})

describe('mostrarGanador', () => {
  test('debería mostrar "Gana Francia"', () => {
    const mockCalcularMedia = jest.fn(() => 105) // Cambia este valor con la media para que Francia gane
    jest.spyOn(global, 'console').mockImplementation(() => {})

    mostrarGanador()

    expect(console.log).toHaveBeenCalledWith('Gana Francia')
    global.console.mockRestore()
  })

  // Similarmente, puedes escribir pruebas para los otros casos (Gana España, Empate, No hay ganador).
})

// Asegúrate de cambiar './tu-archivo-con-el-codigo' con la ruta correcta a tu archivo con el código.

Reaccionar

Responder
