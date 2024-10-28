function openPopup(className) {
  document.querySelector(".overlay").style.display = "block";
  document.querySelector(`.${className}`).style.display = "block";
}

function closePopup(className) {
  document.querySelector(".overlay").style.display = "none";
  document.querySelector(`.${className}`).style.display = "none";
}

function updateTime() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");

  document.querySelector(".hour").innerHTML = `${hours}:`;
  document.querySelector(".minute").innerHTML = minutes;
}

// Call updateTime every second
setInterval(updateTime, 1000);

// Initialize time on page load
updateTime();