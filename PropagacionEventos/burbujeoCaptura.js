// Propagación de eventos
/* const cajas = document.querySelectorAll(".border");

cajas.forEach((cajas) => {
  cajas.addEventListener("click", (e) => {
    e.stopPropagation();
  });
}); */

/* ****************************************************** 
const formulario = document.querySelector(".form");
formulario.addEventListener("submit", (e) => {
  //   console.log("Me diste click");
  e.preventDefault();
});
*/
/* ****************************************************** */
// Delegación de eventos
const contenedor = document.querySelector(".container");
contenedor.addEventListener("click", (e) => {
  if (e.target.id === "padre") {
    console.log("Diste click al padre");
  }

  if (e.target.matches(".border-secondary")) {
    console.log("Diste click al hijo");
  }

  if (e.target.dataset.div === "divNieto") {
    console.log("Diste click al nieto");
  }
});
