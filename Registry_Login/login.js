async function loadHeader() {
  try {
    const response = await fetch("header.html");
    const headerContent = await response.text();
    document.getElementById("main-header").innerHTML = headerContent;
  } catch (error) {
    console.error("Lỗi khi tải header:", error);
    document.getElementById("main-header").innerHTML =
      "<p>Không thể tải header.</p>";
  }
}

// Gọi hàm loadHeader khi trang tải
document.addEventListener("DOMContentLoaded", loadHeader);

//hidden password
const passwordToggle = document.querySelectorAll(".toggle-password");
passwordToggle.forEach((toggle) => {
  toggle.addEventListener("click", function () {
    const password = document.getElementById("password");
    password.type = password.type === "password" ? "text" : "password";
    passwordToggle.forEach((tog) => {
      tog.setAttribute("style", "display: block");
    });
    toggle.setAttribute("style", "display: none");
  });
});
