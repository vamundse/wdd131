// navigation and hamburger menu
const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", function() {
    navigation.classList.toggle("open");
    hamButton.classList.toggle("open");
});

// temple images
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Stockholm Sweden",
    location: "Stockholm, Sweden",
    dedicated: "1984, March, 17",
    area: 31000,
    imageUrl: "https://www.churchofjesuschrist.org/imgs/32063b0e351e47f76db1a50009f685761f48524d/full/400%2C/0/default"
  },
  {
    templeName: "Copenhagen Denmark",
    location: "Copenhagen, Denmark",
    dedicated: "1999, April, 24",
    area: 25000,
    imageUrl: "https://www.churchofjesuschrist.org/imgs/ecc2bf9dceebbd11e1f9ac07b060aed8c1970125/full/400%2C/0/default"
  },
  {
    templeName: "Helsinki Finland",
    location: "Helsinki, Finland",
    dedicated: "2003, March, 29",
    area: 16350,
    imageUrl: "https://www.churchofjesuschrist.org/imgs/f46bd40ab80c3371019f5f4ecc78680b4660e1c2/full/400%2C/0/default"
  }
];

createTempleCard(temples);

const homeLink = document.querySelector("#home");
const oldLink = document.querySelector("#old");
const newLink = document.querySelector("#new");
const largeLink = document.querySelector("#large");
const smallLink = document.querySelector("#small");

homeLink.addEventListener("click", () => {
  createTempleCard(temples);
});

oldLink.addEventListener("click", () => {
  createTempleCard(temples.filter(temple => temple.dedicated.includes("18")));
});

newLink.addEventListener("click", () => {
  createTempleCard(temples.filter(temple => temple.dedicated.includes("20")));
});

largeLink.addEventListener("click", () => {
  createTempleCard(temples.filter(temple => temple.area > 90000));
});

smallLink.addEventListener("click", () => {
  createTempleCard(temples.filter(temple => temple.area < 10000));
});

function createTempleCard(filteredTemples) {
let templeList = "";
filteredTemples.forEach(temple => {templeList += 
  `<div class="temple-card">
  <h3>${temple.templeName}</h3>
  <p><span class="card-title">Location:</span> ${temple.location}</p>
  <p><span class="card-title">Dedicated:</span> ${temple.dedicated}</p>
  <p><span class="card-title">Size:</span> ${temple.area} sq ft</p>
  <img src="${temple.imageUrl}" loading="lazy" alt="${temple.templeName} temple">
  </div>`;});

document.querySelector("#temple-cards").innerHTML = templeList;};

/*createTempleCard();

function createTempleCard() {
  temples.forEach(temple => {
    let card = document.createElement("div");
    let name = document.createElement("h3");
    let location = document.createElement("p");
    let dedication = document.createElement("p");
    let area = document.createElement("p");
    let img = document.createElement("img");

    card.classList.add("temple-card");
    name.textContent = temple.templeName;
    location.innerHTML = `<span class="card-title">Location:</span> ${temple.location}`;
    dedication.innerHTML = `<span class="card-title">Dedicated:</span> ${temple.dedication}`;
    area.innerHTML = `<span class="card-title">Area:</span> ${temple.area} sq ft`;
    img.setAttribute("src", temple.imageUrl);
    img.setAttribute("alt", `${temple.templeName} Temple`);
    img.setAttribute("laoding", "lazy");

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedication);
    card.appendChild(area);
    card.appendChild(img);

    document.querySelector("#temple-cards").appendChild(card);
  })
}*/