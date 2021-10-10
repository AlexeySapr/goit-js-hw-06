const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("ul#ingredients");

/*вариант 1*/
// const liItems = [];

// for (const ingredient of ingredients) {
//   const item = document.createElement("li");
//   item.textContent = ingredient;
//   item.classList.add("item");
//   liItems.push(item);
// }

// list.append(...liItems);

/*вариант 2*/
const liItem = (ingredient) => {
  const item = document.createElement("li");
  item.textContent = ingredient;
  item.classList.add("item");
  return item;
};

const liItems = ingredients.map(liItem);
list.append(...liItems);
