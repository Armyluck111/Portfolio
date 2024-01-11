let close_resume = document.querySelector(".close_resume");
let content_filter = document.querySelector(".content_filter");
let lis = document.querySelectorAll(".work_li");
const Allwork = document.querySelector(".All_work");

function returnToHome() {
  window.location.href = "index.html";
}
lis.forEach(li => {
  li.addEventListener("click",function(){
    document.querySelector(".active")?.classList.remove("active")
    li.classList.add("active")
  })
});
let All_work = {
  Technology: {
    img: "assets/photos/tech.jpg",
    link_work:
      "https://themeforest.net/item/ai-hub-startup-technology-wordpress-theme/47473638",
  },
  Ecommerce: {
    img: "assets/photos/e commerce.jpg",
    link_work:
      "https://themeforest.net/item/secretsho-fashion-marketplace-wordpress-theme/22058416",
  },
  Education: {
    img: "assets/photos/edu.jpg",
    link_work:
      "https://themeforest.net/item/education-wordpress-theme-education-wp/14058034#",
  },
  Corporation: {
    img: "assets/photos/corp.jpg",
    link_work:
      "https://themeforest.net/item/surancy-insurance-agency-wordpress-theme/45980225",
  },
  RealEstate: {
    img: "assets/photos/real.jpg",
    link_work:
      "https://themeforest.net/item/houzez-real-estate-wordpress-theme/15752549",
  },
  Motors: {
    img: "assets/photos/moto.jpg",
    link_work:
      "https://themeforest.net/item/lexrider-motorcycle-club-woocommerce-wordpress-theme/23700786",
  },
};

function ShowAllWork() {
  Allwork.innerHTML = "";
  for (const key in All_work) {
    Allwork.innerHTML += ` <div class="link_work">
    <img src="${All_work[key].img}" class="img_work" />
    <div class="darkdiv animate__animated animate__fadeInUp">
      <div
        class="col-12 content_filter animate__animated animate__fadeInUp"
      >
        <a
         href="${All_work[key].link_work}"
          class="col-12"
       >
         <h2 class="col-12 live_edu">Live Preview</h2>
        <p class="col-12 live_edu">More Info</p></a
       >
     </div>
    </div>
  </div>;`;
  }
}

for (const key in All_work) {
  Allwork.innerHTML += ` <div class="link_work">
  <img src="${All_work[key].img}" class="img_work" />
  <div class="darkdiv animate__animated animate__fadeInUp">
    <div
      class="col-12 content_filter animate__animated animate__fadeInUp"
    >
      <a
       href="${All_work[key].link_work}"
        class="col-12"
     >
       <h2 class="col-12 live_edu">Live Preview</h2>
      <p class="col-12 live_edu">More Info</p></a
     >
   </div>
  </div>
</div>;`;
  function ShowParticularWork(key) {
    Allwork.innerHTML = "";
    Allwork.innerHTML += ` <div class="link_work">
<img src="${All_work[key].img}" class="img_work" />
<div class="darkdiv animate__animated animate__fadeInUp">
  <div
    class="col-12 content_filter animate__animated animate__fadeInUp"
  >
    <a
     href="${All_work[key].link_work}"
      class="col-12"
   >
     <h2 class="col-12 live_edu">Live Preview</h2>
    <p class="col-12 live_edu">More Info</p></a
   >
 </div>
</div>
</div>;`;
  }
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

