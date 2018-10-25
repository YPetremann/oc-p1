var sections = {};
var i = 0;

window.onscroll = function() {
	var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
	var section = document.querySelectorAll("section");
	for (i = 0; i < section.length; ++i) {
		sections[section[i].id] = section[i].offsetTop-1;
	}
	for (i in sections) {
		if (sections[i] <= scrollPosition) {
			updateLinks(i)
		}
	}
};
function updateLinks(id){
	document.querySelector('header nav .active').classList.remove("active");
	document.querySelector('header nav a[href*=' + id + ']').classList.add("active");
}
function updateSelf(){
	document.querySelector('header nav .active').classList.remove("active");
	this.classList.add("active");
}
var pagers = document.querySelectorAll(".carousel .pager>*");
for (i = 0; i < pagers.length; ++i) {
	pagers[i].addEventListener("click", updateSelf);
}
