// LOS DATOS

// OBJETOS JSON

const Fernando = {
  nombre: 'Fernando',
  apellido: 'Martínez',
  profesión: 'mecánico',
  añoNacimiento: 1980,
  direccion: {
    calle: 'Calle 123',
    numero: 123,
    ciudad: 'Bogotá',
  },
}

const Ana = {
  nombre: 'Ana',
  apellido: 'Perez',
  profesión: 'abogada',
  añoNacimiento: 1985,
  direccion: {
    calle: 'Calle 123',
    numero: 123,
    ciudad: 'Madrid',
  },
}

const Belen = {
  nombre: 'Belen',
  apellido: 'Gonzalez',
  profesión: 'doctora',
  añoNacimiento: 1990,
  direccion: {
    calle: 'Calle 123',
    numero: 123,
    ciudad: 'Buenos Aires',
  },
}

const amigos = [Fernando, Ana, Belen]

console.log(Ana.apellido, Ana['apellido'])
