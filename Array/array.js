const carrito = document.querySelector(".carrito");
const templateCarrito = document.querySelector(".template-carrito");
const fragment = document.createDocumentFragment();
const btnsAgregar = document.querySelectorAll("#btn-frutas");

/* Funciones */
const carritoArray = [];

const agregarAlCarrito = (e) => {
  console.log(e.target.dataset.fruta);

  const producto = {
    titulo: e.target.dataset.fruta,
    id: e.target.dataset.fruta,
    cantidad: 1,
  };

  const indice = carritoArray.findIndex((item) => item.id === producto.id);

  if (indice === -1) {
    carritoArray.push(producto);
  } else {
    carritoArray[indice].cantidad++;
  }
  pintarCarrito(carritoArray);
};

const pintarCarrito = (array) => {
  carrito.textContent = "";
  array.forEach((item) => {
    const clone = templateCarrito.content.firstElementChild.cloneNode(true);
    clone.querySelector(".carrito-producto").textContent = item.titulo;
    clone.querySelector(".carrito-numero").textContent = item.cantidad;

    fragment.appendChild(clone);
  });
  carrito.appendChild(fragment);
};

btnsAgregar.forEach((btn) => btn.addEventListener("click", agregarAlCarrito));
