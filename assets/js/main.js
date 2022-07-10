gsap.registerPlugin(ScrollTrigger);
const togglem = document.querySelector('.bar__toggle');
const heronav = document.querySelector('.hero__nav');
const herobar = document.querySelector('.hero__barconteiner');
const form = document.getElementById('form');

// toogle
window.addEventListener('scroll', function () {
	if (window.scrollY >= 10) {
		herobar.classList.add('barconteiner-fixed');
	} else herobar.classList.remove('barconteiner-fixed');
});

togglem.addEventListener('click', () => {
	heronav.classList.toggle('active');
});

togglem.addEventListener('click', () => {
	togglem.classList.toggle('active');
});

heronav.addEventListener('click', function (e) {
	if (e.target.matches('.nav__items')) {
		heronav.classList.remove('active'), togglem.classList.remove('active');
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

const nave = document.querySelectorAll('.objectaminated');

gsap.defaults({ ease: 'none', duration: 2 });

ScrollTrigger.matchMedia({
	'(min-width:769px)': function () {
		const tl = gsap.timeline();

		ScrollTrigger.create({
			animation: tl,
			trigger: '.animated',
			markers: false,
			star: 'top top',
			end: '+=1500 0',
			pin: true,
			scrub: true,
		});

		tl.to('.objectaminated', { yPercent: '800', duration: 15 });
		tl.to('.objectaminated', { rotation: 42, duration: 5 });
		tl.to('.objectaminated', { xPercent: '460', duration: 15 });
		tl.to('.objectaminated', { rotation: 360, duration: 5 });
	},

	'(max-width:768px': function () {
		const tl = gsap.timeline();

		ScrollTrigger.create({
			animation: tl,
			trigger: '.animated',
			markers: false,
			star: 'top top',
			end: '+=2000 0',
			pin: true,
			scrub: true,
		});

		tl.to('.objectaminated', { y: '100', duration: 15 });
		tl.to('.objectaminated', { rotation: 45, duration: 15 });
		tl.to('.objectaminated', { x: '300', duration: 15 });
		tl.to('.objectaminated', { rotation: -45, duration: 15 });
		tl.to('.objectaminated', { y: '-40', duration: 15 });
		tl.to('.objectaminated', { rotation: -120, duration: 15 });
		tl.to('.objectaminated', { x: 'start', duration: 15 });
		tl.to('.objectaminated', { rotation: -220, duration: 15 });
		tl.to('.objectaminated', { y: '100', duration: 125 });
		// tl.to('.objectaminated', { rotation: 420, duration: 15 });
		// tl.to('.objectaminated', { x: '330', duration: 15 });
		// tl.to('.objectaminated', { rotation: -40, duration: 15 });
		// tl.to('.objectaminated', { y: '245', duration: 15 });
		// tl.to('.objectaminated', { rotation: -95, duration: 15 });
		// tl.to('.objectaminated', { x: '255', duration: 15 });
		// tl.to('.objectaminated', { rotation: 360, duration: 125 });
	},
});
