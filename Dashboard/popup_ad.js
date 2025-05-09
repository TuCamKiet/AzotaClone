document.addEventListener("DOMContentLoaded", function () {
  const adPopupOverlay = document.getElementById("adPopupOverlay");
  const closeAdButton = document.getElementById("closeAdButton");
  const dontShowAgainCheckbox = document.getElementById("dontShowAgain");
  const adShownKey = "adPopupShown";
  const dontShowAgainKey = "dontShowAdAgain";

  // Function to show the popup
  function showAdPopup() {
    adPopupOverlay.style.display = "block";
  }

  // Function to hide the popup
  function hideAdPopup() {
    adPopupOverlay.style.display = "none";
  }

  // Check if the ad has been shown before or if the user opted out
  if (
    !localStorage.getItem(adShownKey) &&
    !localStorage.getItem(dontShowAgainKey)
  ) {
    // Show the popup after a short delay (e.g., 1 second)
    setTimeout(showAdPopup, 1000);
    localStorage.setItem(adShownKey, "true");
  }

  // Close the popup when the close button is clicked
  closeAdButton.addEventListener("click", hideAdPopup);

  // Remember the user's choice not to show the ad again
  dontShowAgainCheckbox.addEventListener("change", function () {
    if (this.checked) {
      localStorage.setItem(dontShowAgainKey, "true");
    } else {
      localStorage.removeItem(dontShowAgainKey);
    }
  });

  // Optional: Close the popup when clicking outside the ad
  adPopupOverlay.addEventListener("click", function (event) {
    if (event.target === adPopupOverlay) {
      hideAdPopup();
    }
  });
});
