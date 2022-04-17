class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar() {
    return `${this.nombre} está saludando`;
  }

  static probarSaludo(nombre) {
    return `${nombre} está probando el saludo`;
  }
}

// Heredación
class Estudiante extends Persona {
  // Super
  /* constructor(nombre, edad, calificaciones) {
    super(nombre, edad);
    this.calificaciones = calificaciones || [];
  } */
  // Propiedad privada
  #calificaciones = [];

  saludar() {
    return `El estudiante ${this.nombre} está saludando`;
  }

  set setCalificaciones(calif) {
    this.#calificaciones.push(calif);
  }

  get getCalificaciones() {
    return this.#calificaciones;
  }
}

const juanito = new Estudiante("Juanito", 18);
juanito.setCalificaciones = {
  Español: 9,
};
juanito.setCalificaciones = {
  Matematicas: 3,
};
juanito.setCalificaciones = {
  Fisica: 1,
};
juanito.setCalificaciones = {
  Geografia: 8,
};

console.log(juanito);
console.log(juanito.saludar());
console.log(juanito.getCalificaciones);
