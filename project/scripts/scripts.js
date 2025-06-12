document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links ul");
  
    if (hamburger && navLinks) {
      hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("show");
      });
    }
    const yearSpan = document.querySelector('#year');
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();
  
    const modifiedSpan = document.querySelector('#lastModified');
    if (modifiedSpan) modifiedSpan.textContent = document.lastModified;
  
    const form = document.getElementById("contactForm");
    if (form) {
      let counter = localStorage.getItem("contactSubmissions") || 0;
      form.addEventListener("submit", () => {
        localStorage.setItem("contactSubmissions", ++counter);
      });
    }
});
  