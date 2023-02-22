// JavaScript Document

	window.addEventListener("scroll", function (e) {
		const lastPosition = window.scrollY;
		const header = document.querySelector("header");
		if (lastPosition > 50) {
			header.setAttribute("active", "");
		} else if (header.hasAttribute("active")) {
			header.removeAttribute("active");
		} else {
			header.removeAttribute("active");
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