let button = document.getElementById("toggleBtn");
let body = document.body;

button.onclick = function () {
    body.classList.toggle("dark");
};