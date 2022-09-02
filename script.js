var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listItems = document.getElementsByTagName("li");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";

	// Creates a delete button for every new list-item
	createDeleteButton(li);
}

function createDeleteButton(li) {
	var btn = document.createElement("button");
	btn.appendChild(document.createTextNode("Delete"));
	li.appendChild(btn);
	btn.onclick = removeListAfterClick;
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function toggleAfterClick(event) {
	var target = event.target;
	target.classList.toggle("done");
}

function removeListAfterClick(event) {
	var target = event.target
	target.parentNode.remove();
}



button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

// Applys to every element within <ul>
ul.addEventListener("click", toggleAfterClick);

// Creates a deleteButton for the already existing 6 list-items
for( i=0;i<listItems.length;i++){
	createDeleteButton(listItems[i]);
}








