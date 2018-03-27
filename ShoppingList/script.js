var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");


function toggleListItem(){
	this.classList.toggle("done");
}

function getListItems(){
	var items = document.querySelectorAll("li");
	for (i = 0; i < items.length; i++){
		items[i].addEventListener("click", toggleListItem);
		addDeleteButton(items[i]);
	}
}

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	li.addEventListener("click", toggleListItem);
	addDeleteButton(li);
}

function addDeleteButton(li) {
	var delBtn = document.createElement("button");
	delBtn.appendChild(document.createTextNode("Delete"));
	li.appendChild(delBtn);
	delBtn.addEventListener("click", deleteItem);
}

function deleteItem(){
	ul.removeChild(this.parentNode);
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

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
/*1. If you click on the list item, it toggles the .done class on and off.*/
getListItems();
/*2. Add buttons next to each list item to delete the item when clicked on its corresponding delete button.*/
/*3. BONUS: When adding a new list item, it automatically adds the delete button next to it. */