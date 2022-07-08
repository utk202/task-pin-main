const mediaQuery = window.matchMedia('(max-width: 767px)');
function handleTabletChange(e) {
	// Check if the media query is true
	if (e.matches) {
		// Then log the following message to the console
		console.log(document.querySelector('.small-default'));
		if (document.querySelector('.large-default').value !== '') {
			document.querySelector('.small-default').value = document.querySelector('.large-default').value;
			document.querySelector('.large-default').value = '';
		}
		document.querySelector('.small-default').id = 'search';
		document.querySelector('.large-default').id = 'search-large';
	}
	else {
		if (document.querySelector('.small-default').value !== '') {
			document.querySelector('.large-default').value = document.querySelector('.small-default').value;
			document.querySelector('.small-default').value = '';
		}
		document.querySelector('.small-default').id = 'search-small';
		document.querySelector('.large-default').id = 'search';
	}

	var search_query = '';
	if (document.querySelector('#search')) {
		document.querySelector('#search').addEventListener('keyup', () => {
			var count = 0;
			search_query = document.querySelector('#search').value;
			search_query = search_query.toLowerCase();
			var active = document.getElementById(document.querySelector('.ActiveTasks').textContent);
			if (active.querySelector('h5')) {
				var a = active.querySelectorAll('h5');
				a.forEach(function (item) {
					if (item.textContent.toLowerCase().includes(search_query)) {
						item.parentElement.parentElement.parentElement.parentElement.parentElement.style.display = 'block';
					}
					else {
						item.parentElement.parentElement.parentElement.parentElement.parentElement.style.display = 'none';
					}
				});
				// document.getElementById('no-match').textContent = count;
				a.forEach(function (item) {
					if (item.parentElement.parentElement.parentElement.parentElement.parentElement.style.display == 'block') {
						count++;
					}
				});
			}
			// console.log(count);
			if (count == 0 && search_query != '') {
				document.getElementById('no-match').textContent = 'NO TASKS MATCHED';
			}
			else {
				document.getElementById('no-match').textContent = '';
			}
		});
	}
}

// Register event listener
mediaQuery.addListener(handleTabletChange);

// Initial check
handleTabletChange(mediaQuery);


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

if (search !== null) {
	search.addEventListener('click', () => {
		document.getElementById('search').focus();
	});
	document.querySelector('.bi-search').parentElement.addEventListener('click', () => {
		document.getElementById('search').focus();
	});
}

if (document.querySelector('.small-bi') !== null) {
	document.querySelector('.small-bi').addEventListener('click', () => {
		document.getElementById('search-small').focus();
	});

	document.querySelector('.small-bi').parentElement.addEventListener('click', () => {
		document.getElementById('search-small').focus();
	});
}

const taskHeadings = document.querySelectorAll('.task-heading');

document.getElementById('TASKS').addEventListener('click', e => {
	// console.log(e.target);
	// taskHeadings.forEach(function (item) {
	// 	if (item.classList.contains('ActiveTasks')) {
	// 		item.classList.remove('ActiveTasks');
	// 	}
	// });
	// e.target.classList.add('ActiveTasks');
	var search_query = '';
	if (document.querySelector('#search')) {
		var count = 0;
		search_query = document.querySelector('#search').value;
		search_query = search_query.toLowerCase();
		var active = document.getElementById(document.querySelector('.ActiveTasks').textContent);
		if (active.querySelector('h5')) {
			var a = active.querySelectorAll('h5');
			a.forEach(function (item) {
				if (item.textContent.toLowerCase().includes(search_query)) {
					item.parentElement.parentElement.parentElement.parentElement.parentElement.style.display = 'block';
				}
				else {
					item.parentElement.parentElement.parentElement.parentElement.parentElement.style.display = 'none';
				}
			});
			// document.getElementById('no-match').textContent = count;
			a.forEach(function (item) {
				if (item.parentElement.parentElement.parentElement.parentElement.parentElement.style.display == 'block') {
					count++;
				}
			});
		}
		// console.log(count);

		// document.getElementById('no-match').textContent = count;
		if (count == 0 && search_query != '') {
			document.getElementById('no-match').textContent = 'NO TASKS MATCHED';
		}
		else {
			document.getElementById('no-match').textContent = '';
		}
	}
});