const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('show');

  if (menu.classList.contains('show')) {
    hamburger.textContent = 'X';
  }

  else {
    hamburger.textContent = '☰';
  }
});

const yearElement = document.getElementById('currentyear');
const currentYear = new Date().getFullYear();
yearElement.textContent = currentYear;

const lastModifiedElement = document.getElementById('lastModified');
const lastModifiedDate = document.lastModified;
lastModifiedElement.textContent = `Last Modification: ${lastModifiedDate}`;

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
    templeName: "Cebu City Philippines",
    location: "Cebu City, Philippines",
    dedicated: "2010, June, 13",
    area: 29556,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/cebu-city-philippines-temple/cebu-city-philippines-temple-2255.jpg"
  },
  {
    templeName: "Manila Philippines",
    location: "Metro Manila, Philippines",
    dedicated: "1984, September, 25",
    area: 26683,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/manila-philippines-temple/manila-philippines-temple-44351.jpg"
  },
  {
    templeName: "Santo Domingo Dominican Republic Temple",
    location: "Santo Domingo, Distrito Nacional, Dominican Republic",
    dedicated: "1983, December, 2",
    area: 67000,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/santo-domingo-dominican-republic-temple/santo-domingo-dominican-republic-temple-1444-main.jpg"
  }
];

document.addEventListener('DOMContentLoaded', () => {
  function displayTemples(templesToShow, headingText) {
    const gallery = document.getElementById('temple-gallery');
    const heading = document.querySelector('#heading');
    gallery.innerHTML = '';

    heading.textContent = headingText;

    templesToShow.forEach(temple => {
      const templeCard = document.createElement('div');
      templeCard.classList.add('temple-card');

      templeCard.innerHTML = `
          <h2>${temple.templeName}</h2>
          <p><span>Location:</span> ${temple.location}</p>
          <p><span>Dedicated:</span> ${temple.dedicated}</p>
          <p><span>Size:</span> ${temple.area} sq ft</p>
          <img src="${temple.imageUrl}" alt="${temple.templeName}" width="300" height="200" max-width="60%" loading="lazy">
        `;

      gallery.appendChild(templeCard);
    });
  }

  displayTemples(temples, "Home");

  document.getElementById('home').addEventListener('click', () => displayTemples(temples, "All Temples"));

  document.getElementById('old').addEventListener('click', () => {
    const oldTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
    displayTemples(oldTemples, "Old Temples");
  });

  document.getElementById('new').addEventListener('click', () => {
    const newTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
    displayTemples(newTemples, "New Temples");
  });

  document.getElementById('large').addEventListener('click', () => {
    const largeTemples = temples.filter(temple => temple.area > 90000);
    displayTemples(largeTemples, "Large Temples");
  });

  document.getElementById('small').addEventListener('click', () => {
    const smallTemples = temples.filter(temple => temple.area < 10000);
    displayTemples(smallTemples, "Small Temples");
  });

});