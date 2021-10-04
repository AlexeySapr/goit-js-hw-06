const textInput = document.querySelector('input#validation-input');

textInput.addEventListener('blur', (event) => {
	const attrValue = textInput.getAttribute('data-length');

	if (textInput.value.length === Number(attrValue)) {
		textInput.classList.add('valid');
		textInput.classList.replace('invalid', 'valid');
	} else {
		textInput.classList.add('invalid');
		textInput.classList.replace('valid', 'invalid');
	}
});
