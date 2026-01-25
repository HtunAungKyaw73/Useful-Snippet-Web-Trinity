const toggleBtn = document.querySelectorAll(".toggle-btn");

toggleBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    console.log(e.target.dataset.menu);
    btn.classList.toggle("btn-transform");
    let subMenu = document.querySelector("." + e.target.dataset.menu);
    subMenu.classList.toggle("show");
  });
});
