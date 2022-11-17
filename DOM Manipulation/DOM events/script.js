/*var button = document.getElementsByTagName("button")[0];

button.addEventListener("click", function() {
    console.log("CLICK!!");
})

button.addEventListener("mouseenter", function() {
    console.log("mouse enter!!");
})*/

var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputValue() {
    return input.value;
}

function addElementToList() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
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

button.addEventListener("click", addElementAfterClick)

input.addEventListener("keypress", addElementAfterEnter)