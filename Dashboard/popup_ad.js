function adPopupOverlay() {
  const overlayElement = document.getElementById("adPopupOverlay");
  const underlayElement = document.getElementById("adPopupUnderlay");
  const closeAdButton = document.getElementById("closeAdButton");
  const dontShowAgainCheckbox = document.getElementById("dontShowAgain");
  const adShownKey = "adPopupShown";
  const dontShowAgainKey = "dontShowAdAgain";

  function showAdPopup() {
    overlayElement.style.display = "block";
  }

  function hideAdPopup() {
    overlayElement.style.display = "none";
  }

  // if (
  //   !localStorage.getItem(adShownKey) &&
  //   !localStorage.getItem(dontShowAgainKey)
  // ) {
  //   setTimeout(showAdPopup, 1000);
  //   localStorage.setItem(adShownKey, "true");
  // }
  // dontShowAgainCheckbox.addEventListener("change", function () {
  //   if (this.checked) {
  //     localStorage.setItem(dontShowAgainKey, "true");
  //   } else {
  //     localStorage.removeItem(dontShowAgainKey);
  //   }
  // });

  closeAdButton.addEventListener("click", hideAdPopup);

  underlayElement.addEventListener("click", function () {
    hideAdPopup();
  });
}

adPopupOverlay();
