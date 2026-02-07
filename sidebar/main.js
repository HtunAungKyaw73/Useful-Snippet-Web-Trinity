const toggleBtn = document.querySelectorAll(".toggle-btn");
const chapterMenu = document.querySelector(".chapter");
const appendixMenu = document.querySelector(".appendix");

toggleBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let menu = e.target.dataset.menu;
    console.log(menu);
    btn.classList.toggle("btn-transform");
    let subMenu = document.querySelector("." + e.target.dataset.menu);
    if (menu === "chapter") {
      subMenu.classList.toggle("show");
      appendixMenu.classList.remove("show");
      document.querySelector(".appendix-btn").classList.remove("btn-transform");
    } else if (menu === "appendix") {
      subMenu.classList.toggle("show");
      chapterMenu.classList.remove("show");
      document.querySelector(".chapter-btn").classList.remove("btn-transform");
    }
  });
});
