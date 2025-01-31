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
			<div class="wrap">
				<a class="logo-container" href="index.html">Miro Eskelinen</a>
				<input id="menu-toggle" type="checkbox"/>
				<label class="hamburger-container" for="menu-toggle">
					<div class="hamburger" aria-label="Menu" role="button"></div>
				</label>
				<nav>
    					<a class="menubutton" href="index.html#aboutme">Introduction</a>
					<a class="menubutton" href="index.html#worksamples">Work&nbsp;samples</a>
					<a class="menubutton fa fa-linkedin-square" aria-label="LinkedIn" href="https://linkedin.com/in/miro-eskelinen" target="_blank" style="font-size: 1.25em;"></a>
				</nav>
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
			<div class="wrap">
				<div class="section">
					<div class="minisection">
						<i class="fa fa-envelope"></i>&nbsp;+358 50 518 2107
					</div>
					<div class="minisection">
						<i class="fa fa-phone"></i>&nbsp;miro.eskelinen@gmail.com
					</div>
				</div>
				<p style="font-size: 10px;"><span>&#169;</span> Miro Eskelinen | Built with HTML, CSS &amp; a teaspoon of Javascript</p>
			</div>
		</footer>
		`
	}
}

customElements.define('my-footer', MyFooter)
