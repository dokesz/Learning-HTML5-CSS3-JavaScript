/*var button = document.getElementsByTagName("button")[0];

button.addEventListener("click", function() {
    console.log("CLICK!!");
})

button.addEventListener("mouseenter", function() {
    console.log("mouse enter!!");
})*/

var enterButton = document.getElementById("enter");
var deleteButton = document.getElementById("deleteable");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.getElementsByTagName('li')

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
    ul.appendChild(button);
    //delete new items
    button.addEventListener("click", function(){
        var item = document.getElementById("delete");
        console.log(li);
        item.parentNode.removeChild(li);
        item.parentNode.removeChild(button);
    })
    //if list item is ready or done, cross line
    liEvent();
}

//call function here too, for the starter list
liEvent();

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
    for (var i=0; i < li.length; i++){
        ul.removeChild(li);
    }
    /*var li = document.getElementById("delete");
    console.log(li);
    //var ul = document.getElementById("deleteable");
    li.parentNode.removeChild(li);*/
}

enterButton.addEventListener("click", addElementAfterClick);

input.addEventListener("keypress", addElementAfterEnter);

//deleteButton.addEventListener("click", removeElementFromList);