document.getElementById("current-year").textContent = new Date().getFullYear();

const downloadProgress = document.querySelector(".download-progress");
const progressNumber = document.querySelector(".progress-number");

let progress = 0;
const interval = setInterval(() => {
  if (downloadProgress.clientWidth >= 295) {
    clearInterval(interval);
  }
  progress += 5;
  downloadProgress.style.width = progress + "px";
  progressNumber.textContent = parseInt(progress / 3) + "%";
}, 100);
