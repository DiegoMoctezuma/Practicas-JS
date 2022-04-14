const url = "https://jsonplaceholder.typicode.com/posts/";

/* fetch(url)
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err))
  .finally(() => console.log("Fin del codigo")); */

const findPostById = async (id) => {
  try {
    const res = await fetch(url + id);
    const post = await res.json();
    console.log(post);
  } catch (error) {
    console.log(error);
  }
};

findPostById(1);
