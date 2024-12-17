// JavaScript Document

//Headerin scrollaus

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


// Header

class MyHeader extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
		<header>
			<div class="navbar">
				<a class="logo-container" href="index.html">Miro Eskelinen</a>
				<input id="menu-toggle" type="checkbox"/>
				<label class="hamburger-container" for="menu-toggle">
					<div class="hamburger" aria-label="Menu" role="button"></div>
				</label>
				<div class="menu">
					<a class="menubutton" href="index.html#worksamples">Work&nbsp;samples</a>
    					<a class="menubutton" href="index.html#aboutme">About&nbsp;me</a>
					<a class="menubutton" href="https://linkedin.com/in/miro-eskelinen" target="_blank"><i class="fa-brands fa-linkedin" aria-label="LinkedIn"></i></a>
				</div>
			</div>
		</header>
		`
	}
}

customElements.define('my-header', MyHeader)


//Footer

class MyFooter extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
		<footer>
			<div class="navbar">
				<div class="footersection">
					<div class="minisection">
						<i class="material-symbols-outlined md-regular">phone</i>&nbsp;+358 50 518 2107
					</div>
					<div class="minisection">
						<i class="material-symbols-outlined md-regular">mail</i>&nbsp;miro.eskelinen@gmail.com
					</div>
				</div>
				<p style="font-size: 10px;"><span>&#169;</span> Miro Eskelinen | Built with HTML, CSS &amp; a teaspoon of Javascript</p>
			</div>
		</footer>
		`
	}
}

customElements.define('my-footer', MyFooter)
