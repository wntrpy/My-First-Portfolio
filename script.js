function openPopup(className) {
  document.querySelector(".overlay").style.display = "block";
  document.querySelector(`.${className}`).style.display = "block";
}

function closePopup(className) {
  document.querySelector(".overlay").style.display = "none";
  document.querySelector(`.${className}`).style.display = "none";
}





