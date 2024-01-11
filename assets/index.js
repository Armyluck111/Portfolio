let mainicons = document.querySelector(".main_icons");
let icon_active = document.querySelector(".icon_active");
let bar_icon = document.querySelector(".baricon");
let baricon_div = document.querySelector(".baricon_div");
let About_side = document.querySelector(".About_side");
let Resume_side = document.querySelector(".Resume_side");
let portfolio_side = document.querySelector(".Portfolio_side");
let contact_side = document.querySelector(".Contact_side");
let main_section=document.querySelector(".main_section")
function GoToAboutPage() {
  window.location.href = "About.html";
}
function GoToResumePage() {
  window.location.href = "Resume.html";
}
function GoToPortfolioPage() {
  window.location.href = "Portfolio.html";
}
function GoToContactPage() {
  window.location.href = "Contact.html";
}

bar_icon.addEventListener("click", function sidemenue() {
  if (baricon_div.style.display == "block") {
    baricon_div.style.display = "none";
  } else {
    baricon_div.style.display = "block";
  }
});


