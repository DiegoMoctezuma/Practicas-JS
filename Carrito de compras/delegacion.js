const carrito = document.querySelector(".carrito");
const templateCarrito = document.querySelector(".template-carrito");
const footer = document.getElementById("footer");
const templateFooter = document.getElementById("templateFooter");
const fragment = document.createDocumentFragment();

/* Delegacion de eventos */
document.addEventListener("click", (e) => {
  if (e.target.matches(".frutas #btn-frutas")) {
    agregarAlCarrito(e);
  }

  if (e.target.matches(".total-carrito .agregar-carrito")) {
    aumentarCarrito(e);
  }

  if (e.target.matches(".total-carrito .quitar-carrito")) {
    disminuirCarrito(e);
  }
});

/* Funciones */
let carritoArray = [];

const agregarAlCarrito = (e) => {
  const producto = {
    titulo: e.target.dataset.fruta,
    id: e.target.dataset.fruta,
    cantidad: 1,
    precio: parseInt(e.target.dataset.precio),
  };

  const indice = carritoArray.findIndex((item) => item.id === producto.id);

  if (indice === -1) {
    carritoArray.push(producto);
  } else {
    carritoArray[indice].cantidad++;
  }
  pintarCarrito();
};

const pintarCarrito = () => {
  carrito.textContent = "";
  carritoArray.forEach((item) => {
    const clone = templateCarrito.content.cloneNode(true);
    clone.querySelector(".carrito-producto").textContent = item.titulo;
    clone.querySelector(".carrito-numero").textContent = item.cantidad;
    clone.querySelector(".total-fruta-carrito span").textContent =
      item.precio * item.cantidad;
    clone.querySelector(
      ".total-carrito .btns-quitar-agregar .quitar-carrito"
    ).dataset.id = item.id;
    clone.querySelector(
      ".total-carrito .btns-quitar-agregar .agregar-carrito"
    ).dataset.id = item.id;

    fragment.appendChild(clone);
  });
  carrito.appendChild(fragment);
  pintarFooter();
};

const pintarFooter = () => {
  footer.textContent = "";
  const total = carritoArray.reduce(
    (acc, current) => acc + current.cantidad * current.precio,
    0
  );
  const clone = templateFooter.content.cloneNode(true);
  clone.querySelector(".footer-body .span-total").textContent = total;
  if (total > 0) {
    footer.appendChild(clone);
  } else {
    return;
  }
};

const aumentarCarrito = (e) => {
  carritoArray = carritoArray.map((item) => {
    if (item.id === e.target.dataset.id) {
      item.cantidad++;
    }
    return item;
  });
  pintarCarrito();
};

const disminuirCarrito = (e) => {
  carritoArray = carritoArray.filter((item) => {
    if (item.id === e.target.dataset.id) {
      if (item.cantidad > 0) {
        item.cantidad--;
        if (item.cantidad === 0) return;
        return item;
      }
    } else {
      return item;
    }
  });
  pintarCarrito();
};
