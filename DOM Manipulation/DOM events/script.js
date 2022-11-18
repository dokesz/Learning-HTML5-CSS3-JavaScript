var enterButton = document.getElementById("enter");
var deleteButton = document.getElementsByTagName("button");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.getElementsByTagName('li')

//call function here too, for the starter list
liEvent();

//deletefunc
removeElementFromList();

function inputValue() {
    return input.value;
}

function addElementToList() {
    //create li element
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    //format input value
    input.value = "";
    //create button for new elements
    button = document.createElement("button");
    var button_text = document.createTextNode("Delete"); 
    button.appendChild(button_text);
    li.appendChild(button);
    //delete new items
    removeElementFromList();
    //if list item is ready or done, cross line
    liEvent();
}

function liEvent() {
    for (let i = 0; i < li.length; i++) {
        li[i].addEventListener("click", changeClass);
    }
}

function changeClass() {
    this.classList.toggle('done');
}

function addElementAfterClick() {
        if(inputValue() !== "") {
        addElementToList();
    }
}

function addElementAfterEnter() {
    if(inputValue() !== "" && event.code === "Enter"){
        addElementToList();
    }
}

function removeElementFromList() {
    var button = document.querySelectorAll('li button');
    for (var i=0; i < button.length; i++){
        console.log(button[i]);
        button[i].addEventListener('click', clearElement);
    }
}

function clearElement() {
    for (var i=0; i < li.length; i++){
        this.parentNode.remove();
    }
}

enterButton.addEventListener("click", addElementAfterClick);

input.addEventListener("keypress", addElementAfterEnter);