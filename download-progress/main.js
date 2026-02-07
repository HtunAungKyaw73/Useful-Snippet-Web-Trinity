document.getElementById("current-year").textContent = new Date().getFullYear();

const downloadProgress = document.querySelector(".download-progress");
const progressNumber = document.querySelector(".progress-number");
const downloadText = document.querySelector(".downloading-text");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  let progress = 0;
  btn.disabled = true;
  downloadText.classList.remove("hide");
  downloadText.classList.add("active");
  btn.classList.add("disabled");

  const interval = setInterval(() => {
    progress += 5;
    if (progress >= 100) {
      clearInterval(interval);
      btn.textContent = "Download Complete!";
      btn.classList.remove("disabled");
      downloadText.classList.remove("active");
      downloadText.classList.add("hide");
    }
    downloadProgress.style.width = progress + "%";
    progressNumber.textContent = progress + "%";
    downloadProgress.setAttribute("aria-valuenow", progress);
  }, 300);
});
