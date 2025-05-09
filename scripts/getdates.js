document.addEventListener("DOMContentLoaded", () => {
    const yearSpan = document.getElementById("currentyear");
    const lastModifiedP = document.getElementById("lastModified");

    const now = new Date();
    yearSpan.textContent = now.getFullYear();

    lastModifiedP.textContent = `Last Modified: ${document.lastModified}`;
});