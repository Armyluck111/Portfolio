let resume = document.querySelector(".Resume");

let close_resume = document.querySelector(".close_resume");

let green_div = document.querySelectorAll(".green_div");

function returnToHome() {
  window.location.href = "index.html";
}

function returnToHome() {
  window.location.href = "index.html";
}

// Get the button
const backToTopButton = document.getElementById("back-to-top");

// Show the button when the user scrolls down 20px from the top of the document
window.onscroll = function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
};

// Scroll to the top of the document when the user clicks the button
backToTopButton.addEventListener("click", function() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});