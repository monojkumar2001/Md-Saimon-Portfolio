var swiper = new Swiper(".myThumbnails", {
  slidesPerView: 3,
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});
var swiper = new Swiper(".myShort", {
  slidesPerView: 3,
  spaceBetween: 30,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // loop: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

// $(".hamburger-menu").click(function () {
//   $(".header-menu").addClass("active");
//   $(this).attr("aria-expanded", "true");
// });

// $(".close-btn, .sub-btn").click(function () {
//   $(".header-menu").removeClass("active");
//   $(".hamburger-menu").attr("aria-expanded", "false");
// });

function toggleMenu() {
  var menu = document.getElementById("menu");

  // Add or remove the "active" class
  if (menu.classList.contains("active")) {
    menu.classList.remove("active"); // Remove the "active" class
  } else {
    menu.classList.add("active"); // Add the "active" class
  }
}

// function toggleMenu() {
//   var menu = document.getElementById("menu");
//   var hamburger = document.querySelector(".elementor-nav-menu__container");
//   menu.style.display = menu.style.display === "flex" ? "none" : "flex";

//   // Toggle the active class on the hamburger button
//   hamburger.classList.toggle("active");
// }

// // Function to add the active class to the clicked link
// function setActiveClass(link) {
//   // Remove the active class from all links
//   var links = document.querySelectorAll(".menu a");
//   links.forEach(function(item) {
//     item.classList.remove("active");
//   });

//   // Add the active class to the clicked link
//   link.classList.add("active");
// }
