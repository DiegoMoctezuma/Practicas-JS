const posts = [
  {
    userId: 1,
    id: 1,
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  },
  {
    userId: 1,
    id: 2,
    title: "qui est esse",
    body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
  },
  {
    userId: 1,
    id: 3,
    title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
  },
];

const findPostById = (id) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      //Timeout simulando el tiempo de carga en una base de datos
      const post = posts.find((item) => item.id === id);

      if (post) {
        resolve(post);
      } else {
        reject("No se encontro el post con id:" + id);
      }
    }, 2000);
  });

const buscar = async (id) => {
  try {
    const resPosts = await Promise.all([findPostById(1), findPostById(2)]);
    console.log(resPosts[0].title, resPosts[1].title);

    /* const post = await findPostById(id);
    console.log(post); */
  } catch (error) {
    console.log(error);
  } finally {
    console.log("Siempre se ejecuta");
  }
};

buscar(5);

console.log("Fin del codigo");
