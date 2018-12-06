function getKeys(dataset) {
	return Object.keys(dataset).map(key => [key, dataset[key]] );
}
function filterThis() {
	var options = this.parentElement.children;
	/* update filter selection */
	for (i = 0; i < options.length; ++i) {
		options[i].classList.remove("active");
	}
	this.classList.add("active");

	/* update filter selection */
	var filters = getKeys(this.dataset);
	var dataview = this.closest(".filterview").querySelector(".data");
	for (i = 0; i < filters.length; ++i) {
		var name = filters[i][0];
		var value = filters[i][1];
		if(value == ""){
			delete dataview.dataset[name];
		} else {
			dataview.dataset[name] = value;
		}
	}
	filters = getKeys(dataview.dataset);
	var elements = dataview.children;
	for (i = 0; i < elements.length; ++i) {
		elements[i].classList.remove("blur")
	}
	if (filters.length > 0){
		blureds = dataview.querySelectorAll("figure:not([data-type~='"+filters[0][1]+"'])");
		for (i = 0; i < blureds.length; ++i) {
			console.log(blureds[i]);
			blureds[i].classList.add("blur")
		}

	}
}

var filterviews = document.querySelectorAll(".criteria>*");
for (i = 0; i < filterviews.length; ++i) {
	filterviews[i].addEventListener("click", filterThis);
}
