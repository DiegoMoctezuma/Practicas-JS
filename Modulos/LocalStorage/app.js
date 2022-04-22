// Guardar datos
localStorage.setItem("platano", "🍌");
localStorage.setItem("sandia", "🍉");

// Obtener datos
if (localStorage.getItem("platano")) {
  const platano = localStorage.getItem("platano");
  console.log(platano);
}

// Borrar datos
// localStorage.removeItem("platano");

// Eliminar todos los datos
// localStorage.clear();

// Guardar datos en JSON
const frutas = [
  {
    nombre: "🍌",
    color: "amarillo",
  },
  {
    nombre: "🍒",
    color: "rojo",
  },
  {
    nombre: "🍏",
    color: "verde",
  },
];

localStorage.setItem("frutas", JSON.stringify(frutas));
if (localStorage.getItem("frutas")) {
  const frutasLocal = JSON.parse(localStorage.getItem("frutas"));
  console.log(frutasLocal);
}
