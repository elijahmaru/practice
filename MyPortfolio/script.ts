type accountData = {
    id: number;
    isVerified: boolean;
    createdUsingGoogleAcc: boolean;
    is2F: boolean;
    usesOnly2F: null | boolean;
    password: string | null;
};

type brandInfo = {
    id: number;
    brandName: string;
    brandCategory:
    | "luxury"
    | "artisinal"
    | "luxury house"
    | "mass market"
    | "designer brand";
    soldCategories: string[];
    sales: number;
};

type styleSettings = {
    theme: "dark" | "light";
    language: "ru" | "eng";
};

type portfolioData = {
    profile: accountData;
    projects: brandInfo[];
    settings: styleSettings;
};

const enfantsRichesDeprimes: brandInfo = {
    id: 1,
    brandName: "Enfants Riches Déprimés",
    brandCategory: "designer brand",
    soldCategories: ["Одежда", "Обувь", "Аксессуары"],
    sales: 153,
};

const maisonMargiela: brandInfo = {
    id: 2,
    brandName: "Maison Margiela",
    brandCategory: "luxury house",
    soldCategories: ["Одежда", "Обувь", "Аксессуары"],
    sales: 45,
};

const acneStudios: brandInfo = {
    id: 3,
    brandName: "carhartt",
    brandCategory: "mass market",
    soldCategories: ["Одежда", "Обувь", "Сумки"],
    sales: 100,
};

const rickOwens: brandInfo = {
    id: 4,
    brandName: "Rick Owens",
    brandCategory: "designer brand",
    soldCategories: ["Одежда", "Обувь", "Аксессуары", "Сумки"],
    sales: 218,
};

const hermes: brandInfo = {
    id: 5,
    brandName: "Hermès",
    brandCategory: "luxury house",
    soldCategories: ["Сумки", "Аксессуары"],
    sales: 187,
};

const portfolio: portfolioData = {
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

const stringified: string[] = portfolio.projects
    .filter((project) => project.sales > 100)
    .map(
        (project) =>
            `Бренд ${project.brandName} из категории ${project.brandCategory}`,
    );

var likesSum: number = portfolio.projects.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.sales;
}, 0);

const allSoldCategories: Set<string> = new Set();
portfolio.projects.forEach((brand) => {
    brand.soldCategories.forEach((category) => {
        allSoldCategories.add(category);
    });
});
// spread operator for this task

const aboutBrands: HTMLElement | null = document.querySelector(".aboutBrands");

if (aboutBrands === null) {
    throw new Error(".aboutBrands not found");
}

const brandsGrid: HTMLDivElement = document.createElement("div");
brandsGrid.classList.add("projectsGrid");
aboutBrands.append(brandsGrid);

portfolio.projects.forEach((brand) => {
    let brandCard: HTMLDivElement = document.createElement("div");
    brandCard.classList.add("projectCard");
    let brandName: HTMLElement = document.createElement("h3");
    brandName.textContent = brand.brandName;
    let emoji: string;
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
    let brandType: HTMLDivElement = document.createElement("div");
    brandType.textContent = `Тип бренда: ${emoji}`;
    let soldCategories: string = "";
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
    let soldCategoriesElement: HTMLDivElement = document.createElement("p");
    soldCategoriesElement.textContent = `Категории товаров: ${soldCategories}`;
    let sold: HTMLDivElement = document.createElement("p");
    sold.textContent = `Продажи ${brand.sales}`;
    brandCard.append(brandName, brandType, soldCategoriesElement, sold);
    brandsGrid.append(brandCard);
});

const openModalButton: HTMLButtonElement | null =
    document.querySelector(".btn-open");
const closeModalButton: HTMLButtonElement | null =
    document.querySelector(".btn-close");
const modal: HTMLDivElement | null = document.querySelector(".modal");
const contactForm: HTMLFormElement | null =
    document.querySelector(".contact-form");
const messageInput: HTMLTextAreaElement | null =
    document.querySelector(".message-input");
const charCounter: HTMLParagraphElement | null =
    document.querySelector(".char-counter");

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
    const currentText = (event.target as HTMLTextAreaElement).value;
    charCounter.textContent = `${currentText.length}/100`;
});
