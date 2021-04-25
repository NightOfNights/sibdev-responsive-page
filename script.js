const categoryElements = document.getElementsByClassName("category");

for (const categoryElement of categoryElements) {
  categoryElement.onclick = () => {
    const headerNameElement = document.querySelector(".header__name");

    const categoryElementName = categoryElement.querySelector(
      ".category__name"
    );

    const activeCategoryElement = document.querySelector(".category_active");

    activeCategoryElement.classList.toggle("category_active");
    categoryElement.classList.toggle("category_active");

    headerNameElement.innerHTML = categoryElementName.innerText;
  };
}

const menuElement = document.querySelector(".menu");
let isOpened = false;

menuElement.onclick = () => {
  const menuIconElement = document.querySelector(".menu__icon");
  const sidebarElement = document.querySelector(".sidebar");
  const categoryNameElements = document.getElementsByClassName(
    "category__name"
  );
  const mainLogoNameElement = document.querySelector(
    ".sidebar__main-logo-name"
  );

  menuIconElement.classList.toggle("menu__open-icon");
  menuIconElement.classList.toggle("menu__close-icon");

  if (isOpened) {
    sidebarElement.classList.remove("sidebar_opened");
    sidebarElement.classList.add("sidebar_closed");
  } else {
    sidebarElement.classList.add("sidebar_opened");
    sidebarElement.classList.remove("sidebar_closed");
  }

  for (const categoryNameElement of categoryNameElements) {
    categoryNameElement.classList.toggle("category__name_ipad-visible");
  }

  mainLogoNameElement.classList.toggle("sidebar__main-logo-name_ipad-visible");

  isOpened = !isOpened;
};

window.onscroll = () => {
  const headerNameElement = document.querySelector(".header__name");
  const searchElement = document.querySelector(".search");
  const mediaQuery = "(max-width: 1024px)";

  if (
    document.documentElement.scrollTop > 25 &&
    window.matchMedia(mediaQuery).matches
  ) {
    headerNameElement.classList.add("header__name_hidden");
    searchElement.classList.add("search_scrolled");
  } else {
    headerNameElement.classList.remove("header__name_hidden");
    searchElement.classList.remove("search_scrolled");
  }
};
