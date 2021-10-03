const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const valueContent = document.querySelector('span#value');
let counterValue = 0;

decrementBtn.addEventListener('click', () => {
	counterValue -= 1;
	valueContent.textContent = counterValue;
});

incrementBtn.addEventListener('click', () => {
	counterValue += 1;
	valueContent.textContent = counterValue;
});
