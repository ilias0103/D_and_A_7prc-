let button = document.getElementById("myButton");
let text = document.getElementById("text");
let backgroundButton = document.getElementById("backgroundButton");

button.addEventListener("click", function() {
    text.textContent = "Кнопка была нажата!";
    text.style.color = "green";
    text.style.fontSize = "22px";
});

backgroundButton.addEventListener("click", function() {
    changeBackground();
});

function changeBackground() {
    document.body.style.backgroundColor = "#e0e0e0";
}
