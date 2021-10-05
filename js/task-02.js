const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const list = document.querySelector('ul#ingredients');
// console.log(list);

/* первый способ */
// for (const ingredient of ingredients) {
// 	const item = document.createElement('li');
// 	item.textContent = ingredient;
// 	item.classList.add('item');
// 	list.append(item);
// }

/* второй способ */
const liItems = [];

for (const ingredient of ingredients) {
	const item = document.createElement('li');
	item.textContent = ingredient;
	item.classList.add('item');
	liItems.push(item);
}

list.append(...liItems);
