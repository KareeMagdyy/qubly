const navOpen = document.querySelector(".nav-icon");
const navClose = document.querySelector(".close-nav");
const mainNavLinks = document.querySelector(".main-nav_links");
const mainNavLis = document.querySelectorAll(".main-nav_links li");

navOpen.addEventListener("click", () => {
  mainNavLinks.style.cssText = "transform: translateY(0);";
});
navClose.addEventListener("click", () => {
  mainNavLinks.style.cssText = "transform: translateY(-100%);";
});
mainNavLis.forEach((link) => {
  link.addEventListener("click", () => {
    mainNavLinks.style.cssText = "transform: translateY(-100%);";
  });
});
