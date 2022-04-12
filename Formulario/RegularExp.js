/* DOM */
const formulario = document.querySelector("#formulario1");
const userName = document.querySelector("#userName");
const userEmail = document.querySelector("#userEmail");

/* Expreciones regulares */
const regUserName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
const regUserEmail =
  /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;

/* Funciones */
formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!regUserName.test(userName.value)) {
    console.log("Nombre de Usuario no valido");
    return;
  }
  if (!regUserEmail.test(userEmail.value)) {
    console.log("Correo no valido");
    return;
  }

  console.log("Formulario enviado");
});
