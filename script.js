var input = document.getElementById("listName");
var button =  document.getElementById("btn");
var ul = document.querySelector("ul");

function checkInputlength(){
	return input.value.length
}

function createList(){
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";	
}

function addAfterClick(){
	if(checkInputlength() > 0){
		createList();
	}
}

function addAfterKeyPress(event){
	if(checkInputlength() > 0 && event.keyCode === 13){
		createList();
	}
}

button.addEventListener("click", addAfterClick);
input.addEventListener("keypress", addAfterKeyPress);