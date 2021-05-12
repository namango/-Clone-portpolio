"use strict";

const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener("scroll", () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add("navbar--dark");
  } else {
    navbar.classList.remove("navbar--dark");
  }
});

// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector(".navbar__menu");
navbarMenu.addEventListener("click", (event) => {
  const target = event.target;
  const link = target.dataset.link;
  const value = document.querySelector(link);
  if (link == null) {
    return;
  }
  value.scrollIntoView({ behavior: "smooth", block: "start" });
});

// Handel scrolling when click the contack button
const contactBtn = document.querySelector(".home__contact");
contactBtn.addEventListener("click", () => {
  document.querySelector("#contact").scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
});

// home transaction
const home = document.querySelector(".home__cantainer");
const homeHeight = home.getBoundingClientRect().height;

document.addEventListener("scroll", () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
});

// Show arrow up button when scrolling down
const arrowBtn = document.querySelector(".arrow_up");
document.addEventListener("scroll", () => {
  if (window.scrollY > homeHeight / 2) {
    arrowBtn.classList.add("visible");
  } else {
    arrowBtn.classList.remove("visible");
  }
});

arrowBtn.addEventListener("click", () => {
  document.querySelector("#home").scrollIntoView({ behavior: "smooth" });
});

// Projects

const categoryBtn = document.querySelector(".work__categories");
const projectContainer = document.querySelector(".work__projects");
const projects = document.querySelectorAll(".project");

categoryBtn.addEventListener("click", (event) => {
  const filter =
    event.target.dataset.filter || event.target.parentNode.dataset.filter;
  if (filter == null) {
    return;
  }
  projects.forEach((project) => {
    if (filter === "*" || filter === project.dataset.type) {
      project.classList.remove("invisible");
    } else {
      project.classList.add("invisible");
    }
  });
});
