document.addEventListener("DOMContentLoaded", () => {
  fetchData();
});
/* API */
let page = 1;
const fetchData = async () => {
  try {
    loadingData(true);
    let res = await fetch(
      `https://rickandmortyapi.com/api/character?page=${page}`
    );
    const data = await res.json();
    printData(data);
  } catch (error) {
    console.log(error);
  } finally {
    loadingData(false);
  }
};
/* Mostrar más */
const more = document.querySelector("#more-btn");
more.addEventListener("click", () => {
  if (page < 43) {
    page += 1;
    fetchData();
  }
});
/* Pintando Card */
const printData = (data) => {
  const cards = document.querySelector("#dinamic-card");
  const templateCard = document.querySelector("#template-card").content;
  const fragment = document.createDocumentFragment();

  data.results.forEach((item) => {
    const clone = templateCard.cloneNode(true);
    clone.querySelector("img").setAttribute("src", item.image);
    clone.querySelector("h5").textContent = item.name;
    clone.querySelector("#species").textContent = item.species;
    clone.querySelector("#status").textContent = item.status;
    if (item.status === "Alive") {
      clone.querySelector("#status").classList.add("text-success");
    } else if (item.status === "Dead") {
      clone.querySelector("#status").classList.add("text-danger");
    }
    fragment.appendChild(clone);
  });

  cards.appendChild(fragment);
};
/* Pintando Spinner */
const loadingData = (estado) => {
  const loading = document.querySelector("#spinner-loading");

  if (estado) {
    loading.classList.remove("d-none");
  } else {
    loading.classList.add("d-none");
  }
};
