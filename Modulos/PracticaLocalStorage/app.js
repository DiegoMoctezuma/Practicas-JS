const formulario = document.querySelector("#formulario");
const pintarTareas = document.querySelector("#pintarTareas");
const templateTareas = document.querySelector("#templateTareas").content;
const alert = document.querySelector(".alert");

let tareas = [];

document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("tareas")) {
    tareas = JSON.parse(localStorage.getItem("tareas"));
    pintarT();
  }
});

document.addEventListener("click", (e) => {
  if (e.target.matches(".btn-danger")) {
    tareas = tareas.filter((item) => item.id !== e.target.dataset.id);
    pintarT();
  }
});

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  alert.classList.add("d-none");

  const data = new FormData(formulario);
  const [tarea] = [...data.values()];

  if (!tarea.trim()) {
    alert.classList.remove("d-none");
    return;
  }

  agregarTarea(tarea);
  pintarT();
});

const agregarTarea = (tarea) => {
  const objetoTarea = {
    nombre: tarea,
    id: `${Date.now()}`,
  };

  tareas.push(objetoTarea);
};

const pintarT = () => {
  localStorage.setItem("tareas", JSON.stringify(tareas));

  pintarTareas.textContent = "";

  const fragment = document.createDocumentFragment();

  tareas.forEach((item) => {
    const clone = templateTareas.cloneNode(true);
    clone.querySelector("p").textContent = item.nombre;
    clone.querySelector(".btn").dataset.id = item.id;

    fragment.appendChild(clone);
  });

  pintarTareas.appendChild(fragment);
};
