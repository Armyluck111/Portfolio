let icon_active = document.querySelector(".icon_active");
let leftpagi = document.querySelector(".pagi_left");
let rightpagi = document.querySelector(".pagi_right");
let slider_active = document.querySelectorAll(".slider_active");
let sliderdivs = document.querySelectorAll(".sliderdivs");
let About_side = document.querySelector(".About_side");
let close_resume = document.querySelector(".close_resume");
let portfolio_lis = document.querySelectorAll(".link_work");
let button_plan = document.querySelectorAll(".plan_button");
function returnToHome() {
  window.location.href = "index.html";
}
backGroundleft()
function backGroundleft() {
  sliderdivs.forEach((element) => {
    element.style.display = "none";
  });
  slider_active.forEach((element) => {
    element.style.display = "block";
  });
  leftpagi.style.backgroundColor = "red";
  rightpagi.style.backgroundColor = "#9f9f9f";
}

function backGroundright() {
  sliderdivs.forEach((element) => {
    element.style.display = "block";
  });
  slider_active.forEach((element) => {
    element.style.display = "none";
  });
  leftpagi.style.backgroundColor = " #9f9f9f";
  rightpagi.style.backgroundColor = "red";
}

function goToContact() {
  window.location.href = "Contact.html";
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

