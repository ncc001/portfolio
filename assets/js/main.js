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
	const email = 'ncc.drive2@gmail.com';
	const URL_BASE = `https://formsubmit.co/${email}`;
	const input = e.currentTarget.elements;
	const formData = {
		name: input.name.value,
		email: input.email.value,
		message: input.message.value,
	};

	window.fetch(URL_BASE, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json',
		},
		body: JSON.stringify(formData),
	});

	alert('tu mensaje se ha enviado');
	e.currentTarget.reset();
});

gsap.registerPlugin(ScrollTrigger);
var tl = gsap.timeline({ default: { ease: 'power4.inOut', duration: 1 } });

tl.to('.hero__texts', {
	'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',

	opacity: 1,
	y: 0,
	duration: 2,
});

tl.to(
	'.hero__code,.about',
	{
		'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
		opacity: 1,
		y: 0,
		duration: 1.8,
	},
	'-=2'
);

tl.to(
	'.about__par',
	{
		'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
		opacity: 1,
		y: 0,
		duration: 1.5,
	},
	'-=1.4'
);
const atl = gsap.timeline({
	default: { ease: 'Bounce.easeOut', duration: 1.8 },
});

ScrollTrigger.create({
	animation: atl,
	trigger: '.services__title',
	markers: false,
	pin: false, // pin the trigger element while active
	start: '-500', // when the top of the trigger hits the top of the viewport
	end: '+=500', // end after scrolling 500px beyond the start
	scrub: true, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
	once: true,
});

atl.to('.services__title', {
	'clip-path': 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
	opacity: 1,
	y: 0,
	duration: 2,
});

atl.to(
	'.item__1',
	{
		'clip-path': 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
		opacity: 1,
		y: 0,
		duration: 4,
		stagger: 1,
	},
	'+=5'
);
atl.to(
	'.item__2',
	{
		'clip-path': 'polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)',
		opacity: 1,
		y: 0,
		duration: 4,
		stagger: 1,
	},
	'-=1'
);
atl.to(
	'.item__3',
	{
		'clip-path': 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
		opacity: 1,
		y: 0,
		duration: 2,
		stagger: 1,
	},
	'+=4'
);
atl.to(
	'.item__4',
	{
		'clip-path': 'polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)',
		opacity: 1,
		y: 0,
		duration: 2,
		stagger: 1,
	},
	'+=2'
);

const etl = gsap.timeline({
	default: { ease: 'Bounce.easeOut', duration: 5.8 },
});

//
// ScrollTrigger.matchMedia({
// 	'(min-width:769px)': function () {

// 		tl.to('.objectaminated', { yPercent: '800', duration: 15 });
// 		tl.to('.objectaminated', { rotation: 42, duration: 5 });
// 		tl.to('.objectaminated', { xPercent: '460', duration: 15 });
// 		tl.to('.objectaminated', { rotation: 360, duration: 5 });
// 	},

// 	'(max-width:768px': function () {
// 		const tl = gsap.timeline();

// 		ScrollTrigger.create({
// 			animation: tl,
// 			trigger: '.animated',
// 			markers: false,
// 			star: 'top top',
// 			end: '+=2000 0',
// 			pin: true,
// 			scrub: true,
// 		});

// 		tl.to('.objectaminated', { y: '100', duration: 15 });
// 		tl.to('.objectaminated', { rotation: 45, duration: 15 });
// 		tl.to('.objectaminated', { x: '300', duration: 15 });
// 		tl.to('.objectaminated', { rotation: -45, duration: 15 });
// 		tl.to('.objectaminated', { y: '-40', duration: 15 });
// 		tl.to('.objectaminated', { rotation: -120, duration: 15 });
// 		tl.to('.objectaminated', { x: 'start', duration: 15 });
// 		tl.to('.objectaminated', { rotation: -220, duration: 15 });
// 		tl.to('.objectaminated', { y: '100', duration: 125 });
// 		// tl.to('.objectaminated', { rotation: 420, duration: 15 });
// 		// tl.to('.objectaminated', { x: '330', duration: 15 });
// 		// tl.to('.objectaminated', { rotation: -40, duration: 15 });
// 		// tl.to('.objectaminated', { y: '245', duration: 15 });
// 		// tl.to('.objectaminated', { rotation: -95, duration: 15 });
// 		// tl.to('.objectaminated', { x: '255', duration: 15 });
// 		// tl.to('.objectaminated', { rotation: 360, duration: 125 });
// 	},
// });
