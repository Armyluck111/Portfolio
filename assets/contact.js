let contact = document.querySelector(".Contact");
let sendmessage = document.querySelector(".Send_button");
let close_resume = document.querySelector(".close_resume");

let small_input1 = document.querySelector(".smallinput1");
let small_input2 = document.querySelector(".smallinput2");
let big_input1 = document.querySelector(".biginput1");
let big_input2 = document.querySelector(".biginput2");
let message_me = document.querySelector(".message_me");
let alertmeassage = document.querySelector(".alertmeassage");

function returnToHome() {
  window.location.href = "index.html";
}

// Get the button
const backToTopButton = document.getElementById("back-to-top");

// Show the button when the user scrolls down 20px from the top of the document
window.onscroll = function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
};

// Scroll to the top of the document when the user clicks the button
backToTopButton.addEventListener("click", function () {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});
