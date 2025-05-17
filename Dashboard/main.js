function navLinksFunction() {
  const navLinks = document.querySelectorAll(".nav-menu ul li");

  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      navLinks.forEach((navLink) => navLink.classList.remove("active"));
      this.classList.add("active");
      loadSection(this.getAttribute("id"));
    });
  });
}
navLinksFunction();

async function loadSection(section) {
  section = section || "home"; // Mặc định là home nếu không có tham số
  try {
    const response = await fetch(section + ".html");
    const headerContent = await response.text();
    document.getElementById("section-content").innerHTML = headerContent;

    // Delete the old script if it exists
    const scriptElements = document.querySelectorAll("script");
    scriptElements.forEach((script) => {
      if (
        !(
          script.src &&
          (script.src.includes(section + ".js") ||
            script.src.includes("main.js") ||
            script.src.includes("popup_ad.js"))
        )
      ) {
        script.remove();
      }
    });

    // Dynamically load the script
    const script = document.createElement("script");
    script.src = section + ".js";
    document.body.appendChild(script);
  } catch (error) {
    console.error("Lỗi khi tải:", error);
    document.getElementById(
      "section-content"
    ).innerHTML = `<p>Không thể tải ${section}.</p>`;
  }
}

// Gọi hàm loadSection khi trang tải lại
document.addEventListener("DOMContentLoaded", loadSection());

// popup ad
document.addEventListener("DOMContentLoaded", async function () {
  try {
    const response = await fetch("popup_ad.html");
    const headerContent = await response.text();
    document.getElementById("adPopupOverlay-div").innerHTML = headerContent;
    // Dynamically load the script
    const script = document.createElement("script");
    script.src = "popup_ad.js";
    document.body.appendChild(script);
  } catch (error) {
    console.error("Lỗi khi tải:", error);
    document.getElementById(
      "adPopupOverlay-div"
    ).innerHTML = `<p>Không thể tải popup_ad.html.</p>`;
  }
});
