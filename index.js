var menu = document.querySelector('.nav__menu');
var hamburger = document.getElementsByClassName('hamburger-menu');
var itemWithSubmenu = document.getElementsByClassName('nav__item--link');
var allMainItems = document.getElementsByClassName('nav__item');
window.onclick = function(e) {
	e.stopPropagation();
	if (e.target.closest(".nav__menu")) return;
	else if(!e.target.closest(".nav__menu") && !e.target.closest('.opened')) {
		menu.classList.add('nav__menu--closed');
		menu.classList.remove('nav__menu--opened');
		document.getElementsByClassName('hamburger-menu')[0].classList.add('closed');
		document.getElementsByClassName('body-overlay')[0].style.display = "none";
		document.getElementsByClassName('hamburger-menu')[0].classList.remove('opened');
	}
}
hamburger[0].addEventListener('click', function() {	
	if(hamburger[0].classList[1] == 'closed') {	
		menu.classList.add('nav__menu--opened');
		menu.classList.remove('nav__menu--closed');
		document.getElementsByClassName('body-overlay')[0].style.display = "block";
		document.getElementsByClassName('hamburger-menu')[0].classList.add('opened');
		document.getElementsByClassName('hamburger-menu')[0].classList.remove('closed');
	} else {
		menu.classList.add('nav__menu--closed');
		menu.classList.remove('nav__menu--opened');
		document.getElementsByClassName('body-overlay')[0].style.display = "none";
		document.getElementsByClassName('hamburger-menu')[0].classList.add('closed');
		document.getElementsByClassName('hamburger-menu')[0].classList.remove('opened');
	}
})

itemWithSubmenu[0].addEventListener('click', function(a){
	a.preventDefault();
	if(this.classList[1] == 'active') {
		this.classList.remove('active');
		document.getElementsByClassName('nav__submenu')[0].style.display = "none";
		document.getElementsByClassName('nav__submenu')[0].classList.remove('opened');
		allMainItems[6].classList.remove('move-bottom');
		allMainItems[6].classList.add('move-top');
	} else {
		this.classList.add('active');
		document.getElementsByClassName('nav__submenu')[0].classList.add('opened');
		document.getElementsByClassName('nav__submenu')[0].style.display = "block";
		allMainItems[6].classList.add('move-bottom');
		allMainItems[6].classList.remove('move-top');
	}
})
	