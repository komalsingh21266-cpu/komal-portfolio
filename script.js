const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");
const themeToggle = document.getElementById("themeToggle");

if (menuToggle && navbar) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navbar.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navbar.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navbar.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
}

document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelectorAll(".nav-link").forEach((item) => item.classList.remove("active"));
    link.classList.add("active");
  });
});

const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();
