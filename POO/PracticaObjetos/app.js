const formulario = document.querySelector("#formulario-P-A");
const cardsEstudiantes = document.querySelector("#cards-Estudiantes");
const cardsProfesores = document.querySelector("#cards-Profesores");
const templateEst = document.querySelector("#template-Estudiante").content;
const templateProf = document.querySelector("#template-Profesor").content;

const estudiantes = [];
const profesores = [];

document.addEventListener("click", (e) => {
  if (e.target.dataset.nombre) {
    if (e.target.matches(".btn-success")) {
      estudiantes.map((item) => {
        if (item.nombre === e.target.dataset.nombre) {
          item.setEstado = true;
        }
        return item;
      });
    }
    if (e.target.matches(".btn-danger")) {
      estudiantes.map((item) => {
        if (item.nombre === e.target.dataset.nombre) {
          item.setEstado = false;
        }
        return item;
      });
    }
    Persona.pintarPersonaUI(estudiantes, "Estudiante");
  }
});

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  const datos = new FormData(formulario);
  const [nombre, edad, opcion] = [...datos.values()];

  if (opcion === "Estudiante") {
    const estudiante = new Estudiante(nombre, edad);
    estudiantes.push(estudiante);
    Persona.pintarPersonaUI(estudiantes, opcion);
  }
  if (opcion === "Profesor") {
    const profesor = new Profesor(nombre, edad);
    profesores.push(profesor);
    Persona.pintarPersonaUI(profesores, opcion);
  }
});

class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  static pintarPersonaUI(personas, tipo) {
    if (tipo === "Estudiante") {
      cardsEstudiantes.textContent = "";

      const fragment = document.createDocumentFragment();

      personas.forEach((item) => {
        fragment.appendChild(item.agregarNuevoEstudiante());
      });

      cardsEstudiantes.appendChild(fragment);
    }
    if (tipo === "Profesor") {
      cardsProfesores.textContent = "";

      const fragment = document.createDocumentFragment();
      personas.forEach((item) => {
        fragment.appendChild(item.agregarNuevoProfesor());
      });
      cardsProfesores.appendChild(fragment);
    }
  }
}

class Estudiante extends Persona {
  #estado = false;
  #estudiante = "Estudiante";

  set setEstado(estado) {
    this.#estado = estado;
  }

  get getEstudiante() {
    return this.#estudiante;
  }

  agregarNuevoEstudiante() {
    const clone = templateEst.cloneNode(true);

    clone.querySelector("h5 .text-primary").textContent = this.nombre;
    clone.querySelector(".lead").textContent = `${this.edad} años`;

    if (this.#estado) {
      clone.querySelector(".badge").className = "badge bg-success";
      clone.querySelector(".btn-success").disabled = true;
      clone.querySelector(".btn-danger").disabled = false;
    } else {
      clone.querySelector(".badge").className = "badge bg-danger";
      clone.querySelector(".btn-danger").disabled = true;
      clone.querySelector(".btn-success").disabled = false;
    }

    clone.querySelector(".badge").textContent = this.#estado
      ? "Aprobado"
      : "Reprobado";

    clone.querySelector(".btn-success").dataset.nombre = this.nombre;
    clone.querySelector(".btn-danger").dataset.nombre = this.nombre;

    return clone;
  }
}

class Profesor extends Persona {
  agregarNuevoProfesor() {
    const clone = templateProf.cloneNode(true);

    clone.querySelector("h5").textContent = this.nombre;
    clone.querySelector(".lead").textContent = this.edad;

    return clone;
  }
}
