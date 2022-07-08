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

const search = document.querySelector('.bi-search');
const search_input = document.querySelector('#search');

search.addEventListener('click', () => {

});

document.querySelector('.bi-search').parentElement.addEventListener('click', () => {
	document.getElementById('search').focus();
});

const taskHeadings = document.querySelectorAll('.task-heading');
document.addEventListener('click', e => {
	console.log(e.target);
});
document.getElementById('TASKS').addEventListener('click', e => {
	console.log(e.target);
	taskHeadings.forEach(function (item) {
		if (item.classList.contains('ActiveTasks')) {
			item.classList.remove('ActiveTasks');
		}
	});

	if (e.target.classList.contains('col-md-3')) {
		e.target.classList.add('ActiveTasks');
	}
	else {
		e.target.parentElement.classList.add('ActiveTasks');
	}
});
