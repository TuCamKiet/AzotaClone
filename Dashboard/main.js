const navLinks = document.querySelectorAll(".nav-menu ul li");
const actionCards = document.querySelectorAll(".action-card");

navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    navLinks.forEach((navLink) => navLink.classList.remove("active"));
    this.classList.add("active");
  });
});

actionCards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "scale(1.05)";
    card.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "scale(1)";
    card.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";
  });
});
