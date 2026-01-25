const stories = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop",
    title: "Global Economic Growth",
    subtitle: "Rising GDP Across Markets",
    description:
      "Economic indicators show steady growth across major markets in 2025, with emerging economies leading the recovery and showing resilience despite global challenges.",
    color: "#3B82F6",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop",
    title: "Market Performance",
    subtitle: "Record Breaking Year",
    description:
      "Stock markets reached new heights this year, driven by technology sector gains and renewed investor confidence in sustainable growth prospects.",
    color: "#8B5CF6",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&h=800&fit=crop",
    title: "Digital Transformation",
    subtitle: "The AI Revolution",
    description:
      "Businesses accelerated their digital adoption, with cloud computing and AI integration becoming standard practice across all industries.",
    color: "#06B6D4",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&h=800&fit=crop",
    title: "Sustainable Investment",
    subtitle: "Green Finance Surge",
    description:
      "ESG investments hit record levels as investors prioritize sustainability and social responsibility in their portfolio decisions.",
    color: "#10B981",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=1200&h=800&fit=crop",
    title: "Innovation & Research",
    subtitle: "Breaking New Ground",
    description:
      "R&D spending increased significantly, with breakthrough developments in healthcare, renewable energy, and technology sectors shaping the future.",
    color: "#F59E0B",
  },
];

const scrollContent = document.querySelector(".scroll-content");
const stickyDisplay = document.querySelector(".sticky-display");
const stickyImg = document.querySelector(".sticky-img");
const bgBlack = document.querySelector(".bg-black");

stories.forEach((story) => {
  const section = document.createElement("section");
  section.classList.add("story-section");
  section.style.height = "100vh";
  section.innerHTML = `
      <div class="story-text" style="color: ${story.color}">
        <h1>${story.title}</h1>
        <h2>${story.subtitle}</h2>
        <p>${story.description}</p>
      </div>
    `;
  scrollContent.appendChild(section);
});

let currentIndex = 0;

window.addEventListener("scroll", async () => {
  // calculate the current section based on scroll position
  const scrollPosition = window.scrollY;
  const sectionHeight = window.innerHeight;
  const newIndex = Math.min(
    Math.floor(scrollPosition / sectionHeight),
    stories.length - 1,
  );

  if (newIndex !== currentIndex) {
    currentIndex = newIndex;
    const currentStory = stories[currentIndex];
    bgBlack.style.backgroundColor = currentStory.color;

    // stickyImg.style.opacity = 0;
    // stickyImg.style.transform = "scale(0.95)";

    // setTimeout(() => {
    //   stickyImg.src = currentStory.image;
    //   stickyImg.style.opacity = 1;
    //   stickyImg.style.transform = "scale(1)";
    // }, 400);

    const fadeOut = stickyImg.animate(
      [
        { opacity: 1, transform: "scale(1)" },
        { opacity: 0, transform: "scale(0.95)" },
      ],
      {
        duration: 1000,
        fill: "forwards",
      },
    );

    await fadeOut.finished;

    stickyImg.src = currentStory.image;
    stickyImg.animate(
      [
        { opacity: 0, transform: "scale(0.95)" },
        { opacity: 1, transform: "scale(1)" },
      ],
      {
        duration: 1000,
        fill: "forwards",
      },
    );
  }
});
