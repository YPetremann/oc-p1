function indexOf(...args){return Array.prototype.indexOf.call(...args)}
Number.prototype.mod = function(n) {
	return ((this%n)+n)%n;
};

/* obtient le carousel a partir d'un element à l'interieur de celui-ci */
function get_carousel(element) {
	return element.closest(".carousel");
}

/* obtient la page actuel du carousel */
function get_index(carousel) {
	var current = carousel.querySelector(".slides .active")
	|| carousel.querySelector(".slides *");
	return indexOf(current.parentElement.children, current);
}

/* obtient le nomre de page du carousel */
function get_length(carousel) {
	var current = carousel.querySelector(".slides");
	return current.children.length;
}

/* saute à la page indiquée du carousel */
function jumpTo(carousel, index) {
	var slides = carousel.querySelectorAll(".slides>*");
	index = index.mod(get_length(carousel));
	for (i = 0; i < slides.length; ++i) {
		if (i == index ){
			slides[index].classList.add("active");
		} else {
			slides[i].classList.remove("active");
		}
	}

	var pages = carousel.querySelectorAll(".pager>*");
	for (i = 0; i < pages.length; ++i) {
		if (i == index ){
			pages[index].classList.add("active");
		} else {
			pages[i].classList.remove("active");
		}
	}
}

/* saute à la page suivante */
function jumpToNext() {
	var carousel = get_carousel(this);
	var index = get_index(carousel) + 1;
	jumpTo(carousel, index);
}

/* saute à la page précédente */
function jumpToPrev() {
	var carousel = get_carousel(this);
	var index = get_index(carousel) - 1;
	jumpTo(carousel, index);
}

/* saute à la page lié à ce marque page */
function jumpToThis() {
	var carousel = get_carousel(this);
	var index = indexOf(this.parentElement.children, this);
	jumpTo(carousel, index);
}

/* initialise les pages actuele */
var carousels = document.querySelectorAll(".carousel");
for (i = 0; i < carousels.length; ++i) {
	var index = get_index(carousels[i]);
	jumpTo(carousels[i], index);
}

/* ajoute les evenements aux carousels */
var pagers = document.querySelectorAll(".carousel .pager>*");
for (i = 0; i < pagers.length; ++i) {
	pagers[i].addEventListener("click", jumpToThis);
}
var prevs = document.querySelectorAll(".carousel .navigation .prev");
for (i = 0; i < prevs.length; ++i) {
	prevs[i].addEventListener("click", jumpToPrev);
}
var nexts = document.querySelectorAll(".carousel .navigation .next");
for (i = 0; i < nexts.length; ++i) {
	nexts[i].addEventListener("click", jumpToNext);
}
