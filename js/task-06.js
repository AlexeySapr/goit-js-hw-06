const textInput = document.querySelector('input#validation-input');

textInput.addEventListener('blur', (event) => {
	const attrValue = textInput.getAttribute('data-length');

	textInput.value.length !== Number(attrValue)
		? textInput.classList.add('invalid')
		: textInput.classList.replace('invalid', 'valid');
});
