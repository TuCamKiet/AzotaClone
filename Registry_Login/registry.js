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

function setActiveButton(button) {
  // Loại bỏ class 'active' khỏi tất cả các nút
  toggleButtons.forEach((btn) => {
    btn.classList.remove("active");
  });

  // Thêm class 'active' vào nút được nhấp
  button.classList.add("active");
}

// Lắng nghe sự kiện click trên tất cả các nút có class 'toggle-button'
const toggleButtons = document.querySelectorAll(".toggle-button");
toggleButtons.forEach((button) => {
  button.addEventListener("click", function () {
    setActiveButton(this, toggleButtons); // 'this' tham chiếu đến nút vừa được nhấp
  });
});

//option role
const roleOptions = document.getElementsByClassName("option-card");
for (let i = 0; i < roleOptions.length; i++) {
  roleOptions[i].addEventListener("click", function () {
    const containers = document.getElementsByClassName(
      "registration-container"
    );
    setActiveButton(toggleButtons[i]);
    containers[0].setAttribute("style", "display: none;");
    containers[1].setAttribute("style", "display: block;");
  });
}

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
