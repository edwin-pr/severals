// Get the navigation links and sections
const navLinks = document.querySelectorAll('nav a');
const sections = document.querySelectorAll('main section');

// Add click event listeners to navigation links
navLinks.forEach(link => {
	link.addEventListener('click', (event) => {
		event.preventDefault();
		const target = document.querySelector(link.getAttribute('href'));
		target.scrollIntoView({behavior: 'smooth'});
	});
});

// Add intersection observers to sections to highlight active navigation link
const options = {
	rootMargin: '-50px 0px -80% 0px',
	threshold: 0
};

const observer = new IntersectionObserver((entries, observer) => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			const targetLink = document.querySelector(`nav a[href="#${entry.target.id}"]`);
			navLinks.forEach(link => link.classList.remove('active'));
			targetLink.classList.add('active');
		}
	});
}, options);

sections.forEach(section => {
	observer.observe(section);
});
