"use strict";
const enfantsRichesDeprimes = {
    id: 1,
    brandName: "Enfants Riches Déprimés",
    brandCategory: "designer brand",
    soldCategories: ["Одежда", "Обувь", "Аксессуары"],
    sales: 153,
};
const maisonMargiela = {
    id: 2,
    brandName: "Maison Margiela",
    brandCategory: "luxury house",
    soldCategories: ["Одежда", "Обувь", "Аксессуары"],
    sales: 45,
};
const acneStudios = {
    id: 3,
    brandName: "carhartt",
    brandCategory: "mass market",
    soldCategories: ["Одежда", "Обувь", "Сумки"],
    sales: 100,
};
const rickOwens = {
    id: 4,
    brandName: "Rick Owens",
    brandCategory: "designer brand",
    soldCategories: ["Одежда", "Обувь", "Аксессуары", "Сумки"],
    sales: 218,
};
const hermes = {
    id: 5,
    brandName: "Hermès",
    brandCategory: "luxury house",
    soldCategories: ["Сумки", "Аксессуары"],
    sales: 187,
};
const portfolio = {
    profile: {
        id: 1,
        isVerified: true,
        createdUsingGoogleAcc: true,
        is2F: true,
        usesOnly2F: false,
        password: null,
    },
    projects: [
        enfantsRichesDeprimes,
        maisonMargiela,
        acneStudios,
        rickOwens,
        hermes,
    ],
    settings: {
        theme: "dark",
        language: "ru",
    },
};
const keys = Object.keys(portfolio.profile);
const stringified = portfolio.projects
    .filter((project) => project.sales > 100)
    .map((project) => `Бренд ${project.brandName} из категории ${project.brandCategory}`);
var likesSum = portfolio.projects.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.sales;
}, 0);
const allSoldCategories = new Set();
portfolio.projects.forEach((brand) => {
    brand.soldCategories.forEach((category) => {
        allSoldCategories.add(category);
    });
});
// spread operator for this task
const aboutBrands = document.querySelector(".aboutBrands");
if (aboutBrands === null) {
    throw new Error(".aboutBrands not found");
}
const brandsGrid = document.createElement("div");
brandsGrid.classList.add("projectsGrid");
aboutBrands.append(brandsGrid);
portfolio.projects.forEach((brand) => {
    let brandCard = document.createElement("div");
    brandCard.classList.add("projectCard");
    let brandName = document.createElement("h3");
    brandName.textContent = brand.brandName;
    let emoji;
    switch (brand.brandCategory) {
        case "luxury":
            emoji = "💎";
            break;
        case "artisinal":
            emoji = "🧵";
            break;
        case "luxury house":
            emoji = "🏛️";
            break;
        case "mass market":
            emoji = "🛍️";
            break;
        case "designer brand":
            emoji = "✒️";
            break;
        default:
            emoji = "";
            break;
    }
    let brandType = document.createElement("div");
    brandType.textContent = `Тип бренда: ${emoji}`;
    let soldCategories = "";
    brand.soldCategories.forEach((category) => {
        if (soldCategories !== "") {
            soldCategories += ", ";
        }
        switch (category) {
            case "Одежда":
                soldCategories += "👕";
                break;
            case "Обувь":
                soldCategories += "👟";
                break;
            case "Аксессуары":
                soldCategories += "🕶️";
                break;
            case "Сумки":
                soldCategories += "👜";
                break;
            default:
                soldCategories += "🏷️";
                break;
        }
    });
    let soldCategoriesElement = document.createElement("p");
    soldCategoriesElement.textContent = `Категории товаров: ${soldCategories}`;
    let sold = document.createElement("p");
    sold.textContent = `Продажи ${brand.sales}`;
    brandCard.append(brandName, brandType, soldCategoriesElement, sold);
    brandsGrid.append(brandCard);
});
const openModalButton = document.querySelector(".btn-open");
const closeModalButton = document.querySelector(".btn-close");
const modal = document.querySelector(".modal");
const contactForm = document.querySelector(".contact-form");
const messageInput = document.querySelector(".message-input");
const charCounter = document.querySelector(".char-counter");
if (openModalButton === null) {
    throw new Error(".btn-open not found");
}
if (closeModalButton === null) {
    throw new Error(".btn-close not found");
}
if (modal === null) {
    throw new Error(".modal not found");
}
if (contactForm === null) {
    throw new Error(".contact-form not found");
}
if (messageInput === null) {
    throw new Error(".message-input not found");
}
if (charCounter === null) {
    throw new Error(".char-counter not found");
}
openModalButton.addEventListener("click", () => {
    modal.classList.add("active");
});
closeModalButton.addEventListener("click", () => {
    modal.classList.remove("active");
});
contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("Форма перехвачена, перезагрузки не было!");
});
messageInput.addEventListener("input", (event) => {
    const currentText = event.target.value;
    charCounter.textContent = `${currentText.length}/100`;
});
