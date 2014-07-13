//creating a container 
var container;

//creating array container
var array = [];

//measurepoint for the scrollposition
var measurepoint = 7;

/* getting vertical scrollpositon
var scrollPos = $('.container').scrollTop();
*/

//initiaiting scrollvalue as measurepoint
var old_scroll_top = 0;

//populating the array
for (var i = 0; i < 3000; i++) {
	//filling the array
	array.push(i);
}

//console.log(array);

//running the function when document is loaded
document.onreadystatechange = function () {
	if (document.readyState == "complete") {
	   container = document.getElementsByClassName('numbers');
	   populateContainer();
	   scrolling();
	}
}

$(document).scroll(scrolling);


var populateContainer = function () {
	
	//displaying 15 elements
	for (var i = 0; i < 15; i++) {

	//writing the 15 elements to the DOM	
        var tmpDOM = document.createElement("li");
        var t = document.createTextNode(i);
        tmpDOM.appendChild(t);
        tmpDOM.className = 'numELEM';

        container[0].appendChild(tmpDOM);
	}
}


function scrolling () {
	console.log("Scrolling");
	//getting current scroll position
	var current_scroll_top = $(document).scrollTop();
	//getting scroll delta
	var scroll_delta = current_scroll_top - old_scroll_top;
	old_scroll_top = current_scroll_top;

	//always being able to scroll
	if ((10 > old_scroll_top) || (old_scroll_top > 90)) {
	old_scroll_top = 0;
	$(document).scrollTop(0);
   }

	console.log(current_scroll_top);
	console.log(scroll_delta);
}
