// toogle
const togglem = document.querySelector('.bar__toggle');
const heronav = document.querySelector('.hero__nav');
const herobar = document.querySelector('.hero__barconteiner');
const form = document.getElementById('form');

window.addEventListener('scroll', function () {
	if (window.scrollY >= 60) {
		herobar.classList.add('barconteiner-fixed');
	} else herobar.classList.remove('barconteiner-fixed');
});

togglem.addEventListener('click', () => {
	heronav.classList.toggle('active');
});

heronav.addEventListener('click', function (e) {
	if (e.target.matches('.nav__items')) {
		heronav.classList.remove('active');
	}
});
/* Formulario */

form.addEventListener('submit', function (e) {
	e.preventDefault();
	const email = '06a7d3c1517ce464c338bb905e02903b';
	const URL_BASE = `https://formsubmit.co/${email}`;
	const input = e.currentTarget.elements;
	const formData = {
		name: input.name.value,
		email: input.email.value,
		message: input.message.value,
	};

	window
		.fetch(URL_BASE, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
			body: JSON.stringify(formData),
		})
		.then((response) => response.json())
		.then((data) => console.log(data))
		.catch((error) => console.log(error));
	alert('tu mensaje se ha enviado');
	e.currentTarget.reset();
});
