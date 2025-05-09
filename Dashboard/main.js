const navLinks = document.querySelectorAll(".nav-menu ul li");

navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    navLinks.forEach((navLink) => navLink.classList.remove("active"));
    this.classList.add("active");
    loadHeader(this.getAttribute("id"));
  });
});

// Gọi hàm loadHeader khi trang tải lại
document.addEventListener("DOMContentLoaded", loadHeader());

async function loadHeader(section) {
  section = section || "home"; // Mặc định là home nếu không có tham số
  try {
    const response = await fetch(section + ".html");
    const headerContent = await response.text();
    document.getElementById("section-content").innerHTML = headerContent;
  } catch (error) {
    console.error("Lỗi khi tải header:", error);
    document.getElementById(
      "section-content"
    ).innerHTML = `<p>Không thể tải ${section}.</p>`;
  }
}
