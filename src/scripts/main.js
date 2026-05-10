const navbar = document.getElementById("navbar");
const backBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
    backBtn.classList.add("show");
  } else {
    navbar.classList.remove("scrolled");
    backBtn.classList.remove("show");
  }
});

const hamburger = document.getElementById("hamburgerBtn");
const mobileMenu = document.getElementById("mobileMenu");

function toggleMenu() {
  hamburger.classList.toggle("open");
  mobileMenu.classList.toggle("open");
}

hamburger.addEventListener("click", toggleMenu);

mobileMenu.querySelectorAll("a").forEach((link) =>
  link.addEventListener("click", () => {
    hamburger.classList.remove("open");
    mobileMenu.classList.remove("open");
  }),
);

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) e.target.classList.add("visible");
    });
  },
  { threshold: 0.12 },
);

document
  .querySelectorAll(".reveal, .reveal-left, .reveal-right, .stagger")
  .forEach((el) => revealObserver.observe(el));

const counters = document.querySelectorAll("[data-target]");
const counterObs = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !entry.target.dataset.counted) {
        entry.target.dataset.counted = true;
        let target = parseInt(entry.target.dataset.target);
        let current = 0;
        let timer = setInterval(() => {
          current += target / 70;
          if (current >= target) {
            entry.target.textContent = target;
            clearInterval(timer);
          } else {
            entry.target.textContent = Math.floor(current);
          }
        }, 20);
      }
    });
  },
  { threshold: 0.5 },
);

counters.forEach((c) => counterObs.observe(c));

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const hash = this.getAttribute("href");
    if (hash && hash !== "#") {
      const target = document.querySelector(hash);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  });
});
