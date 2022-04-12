const carrito = document.querySelector(".carrito");
const templateCarrito = document.querySelector(".template-carrito");
const fragment = document.createDocumentFragment();
const btnsAgregar = document.querySelectorAll("#btn-frutas");

/* Funciones */
const carritoObjeto = {};

const agregarAlCarrito = (e) => {
  const producto = {
    titulo: e.target.dataset.fruta,
    id: e.target.dataset.fruta,
    cantidad: 1,
  };
  if (carritoObjeto.hasOwnProperty(producto.titulo)) {
    producto.cantidad = carritoObjeto[producto.titulo].cantidad + 1;
  }
  carritoObjeto[producto.titulo] = producto;
  pintarCarrito();
};

const pintarCarrito = () => {
  carrito.textContent = "";
  Object.values(carritoObjeto).forEach((item) => {
    const clone = templateCarrito.content.firstElementChild.cloneNode(true);
    clone.querySelector(".carrito-producto").textContent = item.titulo;
    clone.querySelector(".carrito-numero").textContent = item.cantidad;

    fragment.appendChild(clone);
  });
  carrito.appendChild(fragment);
};

btnsAgregar.forEach((btn) => btn.addEventListener("click", agregarAlCarrito));
