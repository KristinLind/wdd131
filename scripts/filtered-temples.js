const menuButton = document.querySelector('#menu');
const navMenu = document.querySelector('.navigation');

menuButton.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    menuButton.textContent = navMenu.classList.contains('open') ? '🆗' : '☰';
});

document.querySelector('#year').textContent = new Date().getFullYear();
document.querySelector('#lastModified').textContent = document.lastModified;

const yearSpan = document.querySelector('#year');
yearSpan.textContent = new Date().getFullYear();

const modifiedSpan = document.querySelector('#lastModified');
modifiedSpan.textContent = document.lastModified;

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
        templeName: "Rome Italy",
        location: "Rome, Italy",
        dedicated: "2019, March, 10-12",
        area: 41010,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-2642-main.jpg"
    },

    {
        templeName: "Auckland New Zealand",
        location: "Auckland, New Zealand",
        dedicated: "2025, April, 13",
        area: 45456,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/auckland-new-zealand-temple/auckland-new-zealand-temple-56277.jpg"
    },
    {
        templeName: "Preston England",
        location: "Preston, England",
        dedicated: "1998, June, 7-10",
        area: 69630,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/preston-england-temple/preston-england-temple-45357-main.jpg"
    },
    {
        templeName: "Adelaide Australia",
        location: "Adelaide, Australia",
        dedicated: "2000, June, 15",
        area: 10700,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/adelaide-australia-temple/adelaide-australia-temple-4359.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Washington D.C., United States",
        dedicated: "1974, November, 19-22",
        area: 156558,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/washington-d.c.-temple/washington-d.c.-temple-29515.jpg"
    },
    
];

document.querySelectorAll(".navigation a").forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        const category = link.textContent.trim().toLowerCase();

        document.querySelectorAll(".navigation a").forEach(a => a.classList.remove("active"));
        link.classList.add("active");
    });
});

function displayTemples(filteredTemples) {
    const gallery = document.querySelector(".gallery");
    gallery.innerHTML = "";
    filteredTemples.forEach(temple => {
        gallery.appendChild(createTempleCard(temple));
    });
}

displayTemples(temples);

function createTempleCard(temple) {
    const card = document.createElement("div");
    card.classList.add("card");

    const figure = document.createElement("figure");

    const image = document.createElement("img");
    image.src = temple.imageUrl;
    image.alt = `Image of ${temple.templeName}`;
    image.loading = "lazy";

    const caption = document.createElement("figcaption");

    const h2 = document.createElement("h2");
    h2.textContent = temple.templeName;

    const location = document.createElement("p");
    location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;

    const dedicated = document.createElement("p");
    dedicated.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;

    const size = document.createElement("p");
    size.innerHTML = `<span class="label">Size:</span> ${temple.area.toLocaleString()} sq ft`;

    caption.appendChild(h2);
    caption.appendChild(location);
    caption.appendChild(dedicated);
    caption.appendChild(size);

    figure.appendChild(image);
    figure.appendChild(caption);

    card.appendChild(figure);
    return card;
}
