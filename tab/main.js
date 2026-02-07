// for footer year update
document.getElementById("current-year").textContent = new Date().getFullYear();

// Tab functionality
const tabButtons = document.querySelectorAll(".tab-button");
const tabContents = document.querySelectorAll(".tab-content .content");

tabButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    // console.log("Tab button clicked", e.target.dataset);
    const targetTab = button.getAttribute("data-tab");
    console.log(`Switching to ${targetTab}`);

    // Remove active class from all buttons and contents
    tabButtons.forEach((btn) => btn.classList.remove("active"));
    tabContents.forEach((content) => content.classList.remove("active"));

    // Add active class to clicked button and corresponding content
    button.classList.add("active");
    document.getElementById(targetTab).classList.add("active");
  });
});
