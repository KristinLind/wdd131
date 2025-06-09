document.addEventListener("DOMCountentLoaded", () => {
    const reviewCount = localStorage.getItem("reviewCount") || 0;
    const display = document.getElementById("reviewCountDisplay");
    if (display) {
        display.textContent = reviewCount;
    }
});