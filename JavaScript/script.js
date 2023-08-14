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

/* ----- SHADOW-HEADER ----- */
const shadowHeader = function () {
  const header = document.getElementById("header");

  window.scrollY >= 50
    ? header.classList.add("shadow-header")
    : header.classList.remove("shadow-header");
};

this.addEventListener("scroll", shadowHeader);

/* ----- E-MAIL JS ----- */
const contactForm = document.getElementById("contact-form");
const contactMessage = document.getElementById("contact-message");

const sendEmail = (e) => {
  e.preventDefault();

  // ServiceID - templateID - #form - publicKey
  emailjs
    .sendForm(
      "service_sl5d1jk",
      "template_tcqe8qm",
      "#contact-form",
      "IWAF-J5cLQ9yXqRBC"
    )
    .then(
      () => {
        contactMessage.textContent = "Message sent successfully ✅";

        setTimeout(() => {
          contactMessage.textContent = "";
        }, 5000);

        contactForm.reset();
      },
      () => {
        contactMessage.textContent = "Message not sent 👀";
      }
    );
};

contactForm.addEventListener("submit", sendEmail);

/* ----- SMOOTH SCROLL ----- */
const allLink = document.querySelectorAll(".nav__link");
allLink.forEach((navLink) => {
  navLink.addEventListener("click", (e) => {
    e.preventDefault();

    const href = navLink.getAttribute("href");

    href === "#" ? window.scrollTo({ top: 0, behavior: "smooth" }) : false;

    const sections = document.querySelector(href);
    href !== "#" && href.startsWith("#")
      ? sections.scrollIntoView({ behavior: "smooth" })
      : false;
  });
});

/* ----- SHOW SCROLL UP ----- */
const scrollUp = document.getElementById("scroll-up");
const scrollsUp = () => {
  window.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};

window.addEventListener("scroll", scrollsUp);

/* ----- SCROLL SECTIONS ACTIVE LINK ----- */

// memilih semua sections yang mempunyai attribute ID
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        `.nav__menu a[href*=` + sectionId + `]`
      );

    scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight
      ? sectionsClass.classList.add("active-link")
      : sectionsClass.classList.remove("active-link");
  });
};

window.addEventListener("scroll", scrollActive);
