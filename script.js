const categoryElements = document.getElementsByClassName("category");

for (const categoryElement of categoryElements) {
  categoryElement.onclick = () => {
    const headerNameElement = document.querySelector(".header__name");

    const categoryElementName = categoryElement.querySelector(
      ".category__name"
    );

    const activeCategoryElement = document.querySelector(".category_active");

    console.log(categoryElement);
    console.log(activeCategoryElement);

    activeCategoryElement.classList.remove("category_active");
    categoryElement.classList.add("category_active");

    headerNameElement.innerHTML = categoryElementName.innerText;
  };
}
