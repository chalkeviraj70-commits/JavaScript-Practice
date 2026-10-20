
let a = document.getElementById("btn");
let b = document.getElementById("box");
let c = document.getElementById("name");
let d = document.getElementById("heading");

// Click Event
a.onclick = function () {
    d.innerText = "Button Clicked!";
};

// Double Click Event
a.ondblclick = function () {
    d.innerText = "Button Double Clicked!";
};

// Mouse Events
b.onmouseover = function () {
    b.style.color = "red";
};

b.onmouseout = function () {
    b.style.color = "black";
};

// Keyboard Events
c.onkeydown = function () {
    console.log("Key Pressed");
};

c.onkeyup = function () {
    console.log("Key Released");
};

// Input Event
c.oninput = function () {
    d.innerText = c.value;
};
