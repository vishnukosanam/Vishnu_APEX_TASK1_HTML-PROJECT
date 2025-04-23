// Function to track LinkedIn button clicks
function trackLinkedInClick() {
  console.log("LinkedIn button clicked!");

  // Display a simple confirmation message
  const confirmationMessage = document.createElement("div");
  confirmationMessage.textContent = "Redirecting to LinkedIn...";
  confirmationMessage.style.position = "fixed";
  confirmationMessage.style.top = "10px";
  confirmationMessage.style.right = "10px";
  confirmationMessage.style.backgroundColor = "#0077b5";
  confirmationMessage.style.color = "#fff";
  confirmationMessage.style.padding = "8px 12px";
  confirmationMessage.style.borderRadius = "5px";
  confirmationMessage.style.fontSize = "12px";
  confirmationMessage.style.zIndex = "1000";
  document.body.appendChild(confirmationMessage);

  // Remove the message after 2 seconds
  setTimeout(() => {
    confirmationMessage.remove();
  }, 2000);
}

// Attach the tracking function to the LinkedIn button
document.addEventListener("DOMContentLoaded", function () {
  const linkedinButton = document.querySelector(".linkedin-btn");
  if (linkedinButton) {
    linkedinButton.addEventListener("click", trackLinkedInClick);
  }
});