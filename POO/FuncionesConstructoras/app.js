// Funciones Constructoras = Plantilla

function Persona(nombre) {
  this.nombre = nombre;

  this.saludar = function () {
    return `${this.nombre} dice hola!!!`;
  };
}

Persona.prototype.saludarIngles = function () {
  return `${this.nombre} says hi!!!`;
};

const pepe = new Persona("Pepe");
const jose = new Persona("Jose");
console.log(pepe.saludarIngles());
console.log(jose.saludarIngles());
console.log(pepe.saludar());
console.log(jose.saludar());
