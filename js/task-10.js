function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// получаем ссылки на необходимые элементы
const boxesField = document.getElementById('boxes');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');

const controlsBox = document.querySelector('div#controls');
const inputField = controlsBox.firstElementChild;

//функция createBoxes()
function createBoxes(amount) {
	let width = 30;
	let height = 30;

	for (let i = 1; i < amount + 1; ++i) {
		const box = document.createElement('div');
		// box.textContent = i;
		box.classList.add('box');
		box.style.width = width + 'px';
		box.style.height = height + 'px';
		box.style.backgroundColor = getRandomHexColor();
		boxesField.append(box);
		width += 10;
		height += 10;
	}
}

//функция destroyBoxes()
function destroyBoxes() {
	boxesField.innerHTML = '';
}

//создание блоков div
createBtn.addEventListener('click', (event) => {
	const numBoxes = Number(inputField.value);
	createBoxes(numBoxes);
});

//удаление блоков div
destroyBtn.addEventListener('click', () => {
	destroyBoxes();
});
