// JavaScript Document

	window.addEventListener("scroll", function (e) {
		const lastPosition = window.scrollY;
		const navbar = document.querySelector(".navbar");
		if (lastPosition > 50) {
			navbar.setAttribute("active", "");
		} else if (navbar.hasAttribute("active")) {
			navbar.removeAttribute("active");
		} else {
			navbar.removeAttribute("active");
		}
	});

function opensubmenu(e) {
	const menubutton = e.className === 'menubutton' ? e : e.parentElement;
	
	if (menubutton.hasAttribute('active')) {
		menubutton.removeAttribute('active');
	} else {
		menubutton.setAttribute('active', '');
	}
}