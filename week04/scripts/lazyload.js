document.addEventListener("DOMContentLoaded", () => {
    const lastModified = document.getElementById("lastModified");
    const currentYear = document.getElementById("currentyear");
    
    if (lastModified) {
        lastModified.textContent = document.lastModified;
    }
    
    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }

    const images = document.querySelectorAll("img.fade");

    images.forEach(img => {
        if (img.complete) {
            img.classList.add("loaded");
        } else {
            img.addEventListener("load", () => {
                img.classList.add("loaded");
            });
        }
    });
});