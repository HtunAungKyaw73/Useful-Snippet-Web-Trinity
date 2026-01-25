document.getElementById("current-year").textContent = new Date().getFullYear();

const lazyObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      // console.log("Observing entry:", entry);
      // const isIntersecting = entry.isIntersecting;
      // const ratio = entry.intersectionRatio;
      // const element = entry.target;
      // const fullImg = new Image();

      // fullImg.onload = () => {
      //   console.log("Image loaded:", element.dataset.src);
      //   element.src = fullImg.src;
      // };

      // fullImg.src = element.dataset.src;
      // if (isIntersecting && ratio >= 0.75) {
      //   element.style.filter = "blur(0)";
      //   element.classList.add("fully-visible.loaded");
      //   observer.unobserve(element);
      // } else if (isIntersecting && ratio >= 0.5) {
      //   element.style.filter = "blur(5px)";
      //   element.classList.add("mostly-visible");
      // } else if (isIntersecting && ratio >= 0.25) {
      //   element.style.filter = "blur(10px)";
      //   element.classList.add("partially-visible");
      // } else if (isIntersecting && ratio > 0) {
      //   element.style.filter = "blur(20px)";
      //   element.classList.add("barely-visible");
      // }
      if (entry.isIntersecting) {
        const img = entry.target;
        const fullImg = new Image();
        fullImg.onload = () => {
          console.log("Image loaded:", img.dataset.src);
          img.src = fullImg.src;
          img.classList.add("loaded");
        };
        fullImg.src = img.dataset.src;

        observer.unobserve(img);
      }
    });
  },
  {
    // rootMargin: "0px 0px 100px 0px",
    threshold: [0.5],
  },
);

document.querySelectorAll(".image").forEach((img) => {
  lazyObserver.observe(img);
});
