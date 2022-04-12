const formulario1 = document.querySelector("#formulario1");

formulario1.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputs = new FormData(formulario1);

  for (let item of inputs) {
    console.log(item);
  }

  console.log(inputs.get("userName"));
  console.log(inputs.get("userEmail"));

  console.log("Formulario enviado");
});
