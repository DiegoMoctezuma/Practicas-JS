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

// Callback Hell

/* const findPostById = (id, callback) => {
  const post = posts.find((item) => item.id === id);

  if (post) {
    callback(null, post);
  } else {
    callback("No se encontró el post con id:" + id);
  }
};

findPostById(1, (err, post) => {
  if (err) return console.log(err);
  console.log(post);

  findPostById(2, (err, post) => {
    if (err) return console.log(err);
    console.log(post);

    findPostById(3, (err, post) => {
      if (err) return console.log(err);
      console.log(post);

      findPostById(4, (err, post) => {
        if (err) return console.log(err);
        console.log(post);
      });
    });
  });
}); */

// Promesas
/* 
const findPostById = (id) => {
  const post = posts.find((item) => item.id === id);

  return new Promise((resolve, reject) => {
    if (post) {
      resolve(post);
    } else {
      reject("No se encontró el post con id:" + id);
    }
  });
}; */

const findPostById = (id) =>
  new Promise((resolve, reject) => {
    const post = posts.find((item) => item.id === id);

    if (post) {
      resolve(post);
    } else {
      reject("No se encontro el post con id:" + id);
    }
  });

findPostById(1)
  .then((post) => {
    console.log(post);
    return findPostById(2);
  })
  .then((post) => {
    console.log(post);
    return findPostById(3);
  })
  .then((post) => {
    console.log(post);
    return findPostById(4);
  })
  .catch((err) => console.log(err));
