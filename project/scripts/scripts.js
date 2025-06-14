document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links ul");

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("show");
      hamburger.classList.toggle("active");
    });
  }

  const yearSpan = document.querySelector('#year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  const modifiedSpan = document.querySelector('#lastModified');
  if (modifiedSpan) {
    modifiedSpan.textContent = document.lastModified;
  }

  const form = document.getElementById("contactForm");
  if (form) {
    let counter = parseInt(localStorage.getItem("contactSubmissions")) || 0;
    form.addEventListener("submit", () => {
      localStorage.setItem("contactSubmissions", ++counter);
    });
  }

  const featuredDestination = {
    name: "Croatia",
    region: "Europe",
    type: "Coastal",
    describe() {
      return `${this.name} is a beautiful ${this.type} destination in ${this.region}.`;
    }
  };

  console.log(featuredDestination.describe());

  const allDestinations = ["Croatia", "London", "Paris", "New York"];
  const popular = allDestinations.filter(dest => dest.length <= 6);
  console.log(`Popular short destinations: ${popular.join(", ")}`);

  const visitor = "Kristin";
  console.log(`Welcome back, ${visitor}! Your next adventure awaits.`);

  const featured = document.getElementById("featuredDestination");
  if (featured) {
    featured.innerHTML = `
      <div class="featured-box">
        <img src="images/rovinj-croatia.webp" alt="Croatia" width="300" height="200" loading="lazy">
        <h3>${featuredDestination.name}</h3>
        <p>${featuredDestination.describe()}</p>
      </div>
    `;
  }
});

