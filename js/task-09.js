function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtn = document.querySelector('button.change-color');
const body = document.querySelector('body');
const colorText = document.querySelector('span.color');

changeColorBtn.addEventListener('click', (event) => {
	const someColor = getRandomHexColor();
	body.style.backgroundColor = someColor;
	colorText.textContent = someColor;
});
