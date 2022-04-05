const navOpen = document.querySelector(".nav-icon");
const navClose = document.querySelector(".close-nav");
const mainNavLinks = document.querySelector(".main-nav_links");

navOpen.addEventListener("click", () => {
  mainNavLinks.style.cssText = "transform: translateY(0);";
});
navClose.addEventListener("click", () => {
  mainNavLinks.style.cssText = "transform: translateY(-100%);";
});
