const navList = document.querySelector(".nav__list");
const homeSection = document.querySelector(".home");

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
this.addEventListener("scroll", function () {
  const header = document.getElementById("header");

  window.scrollY >= 50
    ? header.classList.add("shadow-header")
    : header.classList.remove("shadow-header");
});

/////////////////////////////////////[E-Mail JavaScript]
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

/////////////////////////////////////[Smooth Scroll]
navList.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.classList.contains("nav__link")) {
    const href = e.target.getAttribute("href");
    const selectedSection = document.querySelector(href);
    console.log(selectedSection);
    selectedSection.scrollIntoView({ behavior: "smooth" });
  }
});

/////////////////////////////////////[Show Scroll Up]
const homeCallback = function (entries) {
  const [entry] = entries;
  const scrollToHome = document.querySelector("#scroll-up");
  if (entry.isIntersecting) {
    scrollToHome.classList.remove("show-scroll");
    scrollToHome.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  } else {
    scrollToHome.classList.add("show-scroll");
  }
};

const homeOptions = {
  root: null,
  threshold: 0,
};

const observer = new IntersectionObserver(homeCallback, homeOptions);

observer.observe(homeSection);

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

/*
----- DARK & LIGHT THEME ----- 
1. Pilih id tombol untuk mengaktifkan / nonaktifkan dark theme
2. Buat variable darkTheme, yang berisi string dark-theme, isi variable ini
   sesuai dengan nama class css yang akan berfungsi untuk indikator perubahan
   theme.
3. 
*/

const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "ri-sun-line";

// Previously selected topix (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark theme class
const getCurrentTheme = () =>
  document.body.classList.contains("darkTheme") ? "dark" : "light";

const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "ri-moon-line" : "ri-sun-line";

// We validate if the user previously chose a topic

if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );

  themeButton.classList[selectedIcon === "ri-moon-line" ? "add" : "remove"](
    iconTheme
  );
}

// Activate / deactivare the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

// Implementing other smooth scroll animations
const aboutMeSection = document.querySelector(".home__scroll");
const contactSection = document.querySelector(".button");

contactSection.addEventListener("click", (e) => {
  e.preventDefault();
  const contactSectionHref = contactSection.getAttribute("href");
  const contactSectionScroll = document.querySelector(contactSectionHref);

  contactSectionScroll.scrollIntoView({ behavior: "smooth" });
});

aboutMeSection.addEventListener("click", (e) => {
  e.preventDefault();
  const aboutMeHref = aboutMeSection.getAttribute("href");
  const aboutSection = document.querySelector(aboutMeHref);
  aboutSection.scrollIntoView({ behavior: "smooth" });
});

// Footer Links

const footerLink = document.querySelectorAll(".footer__link");
footerLink.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const footerHref = link.getAttribute("href");
    const footerLeadsTo = document.querySelector(footerHref);
    footerLeadsTo
      ? footerLeadsTo.scrollIntoView({ behavior: "smooth" })
      : console.log("false");
  });
});

// Scroll Reveal Animation
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 20,
  // reset: true // animation repeat
});

sr.reveal(
  ".home__hasan, .about.__image, .contact__mail, .section__title-2, .contact__title-1",
  {
    origin: "right",
  }
);

sr.reveal(
  ".home__name, .home__info, .about__container, .section__title-1, .about__info, .contact__social, .contact__data",
  {
    origin: "left",
  }
);

sr.reveal(".services__card, .projects__card", { interval: 100 });
