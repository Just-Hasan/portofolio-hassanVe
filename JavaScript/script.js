/* ----- SHOW MENU ----- */
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/* ----- MENU SHOW ----- */
// validate if constant exist
navToggle
  ? navToggle.addEventListener("click", () =>
      navMenu.classList.add("show-menu")
    )
  : console.log("Failed to show menu");

/* ----- MENU HIDDEN ----- */
navClose
  ? navClose.addEventListener("click", () =>
      navMenu.classList.remove("show-menu")
    )
  : console.log("Failed to close menu");

/* ----- REMOVE MENU MOBILE----- */
const navLink = document.querySelectorAll(".nav__link");

const navLinkCloseNavBar = () => {
  navMenu.classList.remove("show-menu");
};

navLink.forEach((link) => link.addEventListener("click", navLinkCloseNavBar));
