"use strict";

/**
 * add event on element
 */
const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
};

/**
 * navbar toggle
 */
const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navToggler = document.querySelector("[data-nav-toggler]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  this.classList.toggle("active");
};

addEventOnElem(navToggler, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  navToggler.classList.remove("active");
};

addEventOnElem(navbarLinks, "click", closeNavbar);

/**
 * search bar toggle
 */
const searchBar = document.querySelector("[data-search-bar]");
const searchTogglers = document.querySelectorAll("[data-search-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleSearchBar = function () {
  searchBar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("active");
};

addEventOnElem(searchTogglers, "click", toggleSearchBar);

/**
 * Image Search Functionality
 */
const imageList = document.querySelector(".image-list");
const imageItems = document.querySelectorAll(".image-item");
const searchInput = document.querySelector(".input-field");
const searchBarText = document.querySelector(".search-bar-text");

const filterImages = function () {
  const searchTerm = searchInput.value.toLowerCase();
  const showText = searchTerm.length < 3; // Show/hide search bar text based on query length

  imageItems.forEach((item) => {
    const altText = item.querySelector("img").getAttribute("alt").toLowerCase();

    // Check if the alt text of the image contains the search term
    if (altText.includes(searchTerm) || showText) {
      item.style.display = "block"; // Show the image item
    } else {
      item.style.display = "none"; // Hide the image item
    }
  });

  searchBarText.style.display = showText ? "block" : "none"; // Show/hide the search bar text
};

addEventOnElem(searchInput, "input", filterImages);
