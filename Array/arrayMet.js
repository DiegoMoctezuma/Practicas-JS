const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numeroPorDos = numeros.map((num) => num * 2);

/* ************************************************************** */
const users = [
  { uid: 1, name: "John", age: 34 },
  { uid: 2, name: "Amy", age: 20 },
  { uid: 3, name: "camperCat", age: 10 },
];

const names = users.map((item) => item.name);
const age = users.filter((user) => user.age > 30);
const nameUser = users.find((name) => name.uid === 2);
const existe = users.some((item) => item.uid === 2);
const indice = users.findIndex((user) => user.uid === 7);

/* ************************************************************** */
const arr = ["Cat", "Dog", "Tiger", "Zebra"];
const nuevoArray = arr.slice(1, 3);

/* ************************************************************** */
const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f"];

const array3 = array1.concat(array2);
const array4 = [...array1, ...array2];

/* ************************************************************** */
const numerosArray = [1, 2, 3, 4, 5];

const sumarTodos = numerosArray.reduce((acc, valorActual) => acc + valorActual);

const grupoNumeros = [
  [0, 1],
  [2, 3],
  [4, 5],
];

const soloNumeros = grupoNumeros.reduce((acc, current) => acc.concat(current));
const arrayPlano = [].concat(...grupoNumeros);
const flatArray = grupoNumeros.flat();

/* ************************************************************** */
const cadenaMeses = "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec";

const arrayMeses = cadenaMeses.split(",");
console.log(arrayMeses);
