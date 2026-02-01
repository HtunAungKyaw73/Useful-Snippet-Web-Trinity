document.getElementById("current-year").textContent = new Date().getFullYear();

const length = 40;
const text = document.querySelector(".truncate").textContent;
const result = document.querySelector("#textBox");

result.innerHTML = text.trim().substring(0, length) + "...";

// const length = 20;
// const text = document.querySelector(".truncate").textContent;
// const result = document.querySelector("#textBox");

// result.innerHTML = text.trim().substring(0, length) + "...";
