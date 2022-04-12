const formulario = document.querySelector("#formulario1");
const userName = document.querySelector("#userName");
const userEmail = document.querySelector("#userEmail");
const alertName = document.querySelector("#alertName");
const alerEmail = document.querySelector("#alertEmail");
const alertSuccess = document.querySelector("#alertSuccess");

/* Expreciones regulares */
const regUserName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
const regUserEmail =
  /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;

/* Funciones */
const printAlertSuccess = () => {
  alertSuccess.classList.remove("d-none");
};
const pintarAlertErrores = (errores) => {
  errores.forEach((item) => {
    item.tipo.classList.remove("d-none");
    item.tipo.textContent = item.msg;
  });
};

/* Formulario */
formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  alertSuccess.classList.add("d-none");

  const errores = [];

  if (!regUserName.test(userName.value) || !userName.value.trim()) {
    userName.classList.add("is-invalid");
    errores.push({
      tipo: alertName,
      msg: "Nombre no valido, solo letras",
    });
  } else {
    userName.classList.remove("is-invalid");
    userName.classList.add("is-valid");
    alertName.classList.add("d-none");
  }

  if (!regUserEmail.test(userEmail.value) || !userEmail.value.trim()) {
    userEmail.classList.add("is-invalid");
    errores.push({
      tipo: alerEmail,
      msg: "Correo no valido",
    });
  } else {
    userEmail.classList.remove("is-invalid");
    userEmail.classList.add("is-valid");
    alerEmail.classList.add("d-none");
  }

  if (errores.length !== 0) {
    pintarAlertErrores(errores);
    return;
  }

  printAlertSuccess();
});
