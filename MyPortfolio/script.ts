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
    likes: number;
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
    likes: 153,
};

const maisonMargiela: brandInfo = {
    id: 2,
    brandName: "Maison Margiela",
    brandCategory: "luxury house",
    soldCategories: ["Одежда", "Обувь", "Аксессуары", "Парфюмерия"],
    likes: 45,
};

const acneStudios: brandInfo = {
    id: 3,
    brandName: "carhartt",
    brandCategory: "mass market",
    soldCategories: ["Одежда", "Обувь", "Сумки"],
    likes: 100,
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
    projects: [enfantsRichesDeprimes, maisonMargiela, acneStudios],
    settings: {
        theme: "dark",
        language: "ru",
    },
};

const keys = Object.keys(portfolio.profile);
console.log(keys);

const stringified: string[] = portfolio.projects
    .filter((project) => project.likes > 100)
    .map(
        (project) =>
            `Бренд ${project.brandName} из категории ${project.brandCategory}`,
    );

var likesSum: number = portfolio.projects.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.likes;
}, 0);
console.log(`Общее число лайков: ${likesSum}`);

const allSoldCategories: Set<string> = new Set();
portfolio.projects.forEach((brand) => {
    brand.soldCategories.forEach((category) => {
        allSoldCategories.add(category);
    });
});
// spread operator for this task
console.log(allSoldCategories);
