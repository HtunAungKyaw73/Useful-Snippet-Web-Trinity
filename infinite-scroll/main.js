document.getElementById("current-year").textContent = new Date().getFullYear();

const container = document.getElementById("container");
const sentinel = document.getElementById("sentinel");
let counter = 1;

// Function to add new items
function addItems(n = 5) {
  for (let i = 0; i < n; i++) {
    const div = document.createElement("div");
    div.className = "item";
    div.textContent = `Item ${counter++}`;
    div.animate(
      [
        { opacity: 0, transform: "scale(0.75)" },
        { opacity: 1, transform: "scale(1)" },
      ],
      {
        duration: 500,
        easing: "ease",
        fill: "forwards",
      },
    );
    container.appendChild(div);
  }
}
// Initial items
addItems();

// Intersection Observer
const observer = new IntersectionObserver(
  (entries) => {
    console.log(entries);
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log("Sentinel is visible, loading more items...");
        addItems(10);
      }
    });
  },
  { root: null, rootMargin: "0px 0px 200px 0px", threshold: 1 },
);
observer.observe(sentinel);
