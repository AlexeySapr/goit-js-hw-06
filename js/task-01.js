//Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
const numOfListCat = document.querySelectorAll('li.item');
console.log('Number of categories: ', numOfListCat.length);

//Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>) и количество элементов в категории (всех вложенных в него <li>).
for (const item of numOfListCat) {
	const nameOfCategory = item.firstElementChild.textContent;
	console.log('Category: ', nameOfCategory);

	const elementsOfCategory = item.querySelectorAll('li');
	console.log('Elements:  ', elementsOfCategory.length);
}

// const nameOfCategory = numOfListCat.firstElementChild;
// console.log(numOfListCat);
