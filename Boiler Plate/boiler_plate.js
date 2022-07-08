// Toggle Navbar
const hamburger = document.querySelector("#toggler");
const navMenu = document.querySelector(".my-nav-menu");
const nav = document.querySelector("nav");

document.addEventListener("click", collapse);

function collapse(e) {
	if (e.target.id == "toggler" || e.target.classList == "bar") {
		mobileMenu();
	}
	else if (e.target.classList.contains("show") || e.target.classList.contains("my-nav-link") || e.target.getAttribute('href') != null || e.target.classList.contains('header-img') || e.target.getAttribute('type') == 'submit') { }
	else if (hamburger.classList.contains("show")) {
		mobileMenu();
	}
}

function mobileMenu() {
	hamburger.classList.toggle("show");
	navMenu.classList.toggle("show");
}
