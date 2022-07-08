// toogle
const togglem = document.querySelector('.bar__toggle');
const heronav = document.querySelector('.hero__nav');
const herobar = document.querySelector('.hero__barconteiner');

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
// const form = document.getElementById('form');
// form.addEventListener('submit', async (e) => {
// 	e.preventDefault();

// 	const email = 'your@email.com';
// 	const URL_BASE = `https://formsubmit.co/${email}`;

// 	const input = e.currentTarget.elements;
// 	const formData = {
// 		name: input.name.value,
// 		email: input.email.value,
// 		message: input.message.value,
// 	};

// 	const options = {
// 		method: 'POST',
// 		header: {
// 			'Content-Type': 'application/json',
// 			Accept: 'application/json',
// 		},
// 		body: JSON.stringify(formData),
// 	};

// 	/* con then y catch */
// 	fetch(URL_BASE, options)
// 		.then((response) => response.json())
// 		.then((data) => console.log(data))
// 		.catch((error) => console.log(error));

// 	/* Con async / await */
// 	try {
// 		const res = await fetch(URL_BASE, options);
// 		const data = await res.json();
// 		console.log(data);
// 	} catch (error) {
// 		console.log(error);
// 	}
// });
