function tabToggleFunction() {
  const toggleTab = document.querySelectorAll(".tab");

  function setActiveTab(tab, toggleTab) {
    toggleTab.forEach((btn) => {
      btn.classList.remove("active");
    });
    tab.classList.add("active");
  }

  toggleTab.forEach((tab) => {
    tab.addEventListener("click", function () {
      setActiveTab(this, toggleTab);
    });
  });
}

tabToggleFunction();

function sideItemToggleFunction() {
  const toggleSideItem = document.querySelectorAll(".sideItem");

  function setActiveSideItem(sideItem, toggleSideItem) {
    toggleSideItem.forEach((btn) => {
      btn.classList.remove("active");
    });
    sideItem.classList.add("active");
  }

  toggleSideItem.forEach((sideItem) => {
    sideItem.addEventListener("click", function () {
      setActiveSideItem(this, toggleSideItem);
    });
  });
}

sideItemToggleFunction();
