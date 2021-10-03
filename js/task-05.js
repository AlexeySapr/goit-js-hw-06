const inputName = document.querySelector('input#name-input');
const outputName = document.querySelector('span#name-output');

inputName.addEventListener('input', (event) => {
	inputName.value === ''
		? (outputName.textContent = 'Anonymous')
		: (outputName.textContent = event.currentTarget.value);
});
