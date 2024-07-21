//----------------------------header-on-slide--------------------------------------

const header = document.querySelector(".navbar");
const placeholder = document.querySelector(".navbar-placeholder");

window.onscroll = () => {
  const top = window.scrollY;
  if (top >= 100) {
    header.classList.add("active-navbar");
    placeholder.style.height = header.offsetHeight + "px";
  } else {
    header.classList.remove("active-navbar");
    placeholder.style.height = 0;
  }
};

//------------------------------------toggle-menu----------------------------------

const burgerMenu = document.querySelector(".burger-menu");
const navLinks = document.querySelector(".center-nav-bar");
const closeButton = document.querySelector(".close-button-menu-toggle");

const menuToggle = () => {
  while (burgerMenu.classList.toggle("active")) {
    navLinks.classList.toggle("active");
    closeButton.classList.toggle("active");
  }
};

burgerMenu.addEventListener("click", menuToggle);
closeButton.addEventListener("click", menuToggle);

//--------------------------reference-to-searched-results--------------------------

const searchBar = document.querySelector(".input-container input");
const magnifyingGlass = document.querySelector(".input-container svg");
let searchTerm = "";
const newUrl = `/searched-results/searched-results.html`;

searchBar.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    searchTerm = event.target.value.toLowerCase();
    localStorage.setItem("searchTerm", searchTerm);
    if (window.location.pathname !== newUrl) {
      changeReference();
    }
  }
});

magnifyingGlass.addEventListener("click", () => {
  searchTerm = searchBar.value.toLowerCase();
  localStorage.setItem("searchTerm", searchTerm);
  if (window.location.pathname !== newUrl) {
    changeReference();
  }
});

const changeReference = () => {
  window.location.pathname = newUrl;
  filterGames(searchTerm);
};
