const form = document.querySelector('form.login-form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
	event.preventDefault();
	// console.log(event.currentTarget.elements);

	const {
		elements: { email, password },
	} = event.currentTarget;

	if (email.value === '' || password.value === '') {
		alert('Пожалуйста заполните все поля формы');
	} else {
		console.log({ email: email.value, password: password.value });
		event.currentTarget.reset();
	}
}
