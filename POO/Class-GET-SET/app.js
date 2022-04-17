class Persona {
  constructor(nombre) {
    this.nombre = nombre;
  }

  get getNombre() {
    return this.nombre;
  }

  set setNombre(nombre) {
    this.nombre = nombre;
  }

  saludar() {
    return `${this.nombre} dice hola!!!`;
  }

  // Static

  static probarSaludo(nombre) {
    return `${nombre} esta probando saludo`;
  }
}

const pepe = new Persona("Pepe");

pepe.setNombre = "Juanito";

console.log(Persona.probarSaludo("Jose"));
console.log(pepe.getNombre);
console.log(pepe.saludar());
