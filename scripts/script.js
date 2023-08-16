// Elementos del DOM
const portfolioRow = document.querySelector("#portfolio-row");
const partnersRow = document.querySelector("#partners-row");

// Define una función para crear una tarjetas
function createPortfolioCard(portfolio) {
    const card = document.createElement("div");
    card.classList.add("col-md-3", "col-sm-6", "col-12");
    const html = `
    <a href="${portfolio.link}" class="portfolio-link">
        <div class="card mb-4 box-shadow">
            <div class="box-image">
                <img class="card-img-top" src="${portfolio.image}" alt="${portfolio.name}">
            </div>
        </div>
    </a>`;
    card.innerHTML = html;
    return card;
}

// Define una función para crear logos
function createPartnerLogo(partnersLogo) {
    const card = document.createElement("div");
    card.classList.add("col-md-2", "col-sm-4", "col-6");
    const html = `
    <a href="${partnersLogo.link}" class="partners-link">
        <div class="card mb-4 box-shadow">
            <div class="box-logo">
                <img class="card-img-top" src="${partnersLogo.image}" alt="${partnersLogo.name}">
            </div>
        </div>
    </a>`;
    card.innerHTML = html;
    return card;
}

// Define una función para agregar las cards a la página
function addCardsToPage(array, html, func) {
    html.innerHTML = "";
    array.forEach((obj) => {
        const card = func(obj);
        html.appendChild(card);
    });
}

// Agrega todas las cards a la página al cargar la página
addCardsToPage(portfolio, portfolioRow, createPortfolioCard);
addCardsToPage(partnersLogo, partnersRow, createPartnerLogo);

document.addEventListener("DOMContentLoaded", function() {
    const togglerButton = document.querySelector(".navbar-toggler");
    const navbarLinks = document.querySelector(".navbar-nav");

    togglerButton.addEventListener("click", function() {
        navbarLinks.classList.toggle("show");
    });
});