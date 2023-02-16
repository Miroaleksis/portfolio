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