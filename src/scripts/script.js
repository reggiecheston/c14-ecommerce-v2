// menu variables
let hamburgerMenu = document.querySelector(".hamburger-menu");
let closeMenu = document.querySelector(".close-menu");
let hamburgerNav = document.querySelector(".hamburger-nav");

// disables scrolling
function noscroll() {
  window.scrollTo(0, 0);
}

hamburgerMenu.addEventListener("click", function () {
  hamburgerNav.classList.add("open");
  window.addEventListener("scroll", noscroll);
});

closeMenu.addEventListener("click", function () {
  hamburgerNav.classList.remove("open");
  window.removeEventListener("scroll", noscroll);
});
