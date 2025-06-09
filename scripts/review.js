document.addEventListener("DOMContentLoaded", () => {
    const count = localStorage.getItem("reviewCount") || 0;
    const plural = count == 1 ? "review" : "reviews";
    const display = document.getElementById("reviewCount");
  
    if (display) {
      display.textContent = `You have submitted ${count} ${plural}.`;
    }
  
    const lastModified = document.getElementById("lastModified");
    if (lastModified) {
      lastModified.textContent = document.lastModified;
    }
});
  