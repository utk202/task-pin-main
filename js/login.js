// Password Show Hide
const password = document.querySelector('#password'),
	confirm_password = document.querySelector('#confirm-password'),
	icon = document.querySelector('#icon'),
	submit = document.querySelector('input[type="submit"]');

icon.parentElement.addEventListener('click', () => {
	if (password.className == 'active form-control') {
		password.setAttribute('type', 'text');
		icon.setAttribute('src', 'https://static.xx.fbcdn.net/rsrc.php/v3/yk/r/swFqSxKYa5M.png');
		password.className = 'form-control';
	}
	else {
		password.setAttribute('type', 'password');
		icon.setAttribute('src', 'https://static.xx.fbcdn.net/rsrc.php/v3/yZ/r/je5FEJkU1_K.png');
		password.className = 'active form-control';
	}
});


// Password Minimum Length 
if (document.querySelector('#invalid') !== null) {

	password.addEventListener('blur', invalid_check);
	password.addEventListener('keyup', disabler);

	// Password = Confirm Password
	if (confirm_password !== null) {
		confirm_password.addEventListener('blur', invalid_check_2);
		confirm_password.addEventListener('keyup', disabler);
	}
}

// submit.addEventListener('hover', (e) => {
// 	if (submit.disabled == true) {
// 		console.log('hehy');
// 		e.preventDefault();
// 		confirm_password.addEventListener('keyup', disabler);
// 		confirm_password.addEventListener('blur', invalid_check_2);
// 	}
// });

function disabler() {
	if (password.value.length < 8 && password.value.length > 0) {
		submit.disabled = true;
	}
	else if (confirm_password !== null) {
		if (confirm_password.value !== password.value) {
			submit.disabled = true;
		}
		else {
			submit.disabled = false;
		}
	}
	else {
		submit.disabled = false;
	}
};

function invalid_check() {
	if (password.value.length < 8 && password.value.length > 0) {
		document.querySelector('#invalid').textContent = '*Password must contain atleast 8 characters';
		submit.disabled = true;
	}
	else {
		if (confirm_password === null || confirm_password.length == 0) {
			document.querySelector('#invalid').textContent = '';
			submit.disabled = false;
		}
		else {
			invalid_check_2()
		}
	}
};

function invalid_check_2() {
	if (password.value.length < 8 && password.value.length > 0) {
		document.querySelector('#invalid').textContent = '*Password must contain atleast 8 characters';
		submit.disabled = true;
	}
	else if (confirm_password.value !== '') {
		console.log(confirm_password.value);
		if (confirm_password.value !== password.value) {
			submit.disabled = true;
			document.querySelector('#invalid').textContent = '*Passwords do not match';
		}
		else {
			submit.disabled = false;
			document.querySelector('#invalid').textContent = '';
		}
	}
	else {
		document.querySelector('#invalid').textContent = '';
		submit.disabled = false;
	}
};

// if (document.querySelector('#invalid').innerHTML !== '') {
// 	document.querySelector('#invalid').style.display = 'block';
// }
// else {
// 	document.querySelector('#invalid').style.display = 'none';
// }

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

// // Cards color toggle
// const card = document.querySelector('.card');
// const button_color = document.querySelector(`input[type="submit"]`);
// const footer_card = document.querySelector('.card-footer');

// button_color.addEventListener('mouseover',color_change);
// button_color.addEventListener('mouseleave',color_change);

// function color_change() {
// 	if(card.className === 'card card-red'){
// 		card.className = 'card card-blue';
// 	}
// 	else if(card.className === 'card card-blue'){
// 		card.className = 'card card-red';
// 	}
// }