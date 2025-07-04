document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  form.addEventListener("submit", () => {
    let count = Number(localStorage.getItem("reviewCount")) || 0;
    localStorage.setItem("reviewCount", count + 1);
  });
  const products = [
    { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
    { id: "fc-2050", name: "power laces", averagerating: 4.7 },
    { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
    { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
    { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
  ];

  const selectElement = document.querySelector("#productName");
 
  if (selectElement) {
    products.forEach(product => {
      const option = document.createElement("option");
      option.value = product.name;
      option.textContent = product.name;
      selectElement.appendChild(option);
    });

    console.log("✅ Product option added to dropdown.");
  } else {
      console.error("❌ Could not find #productName select element.");
    }
  const lastModified = document.getElementById("lastModified");
  if (lastModified) {
    lastModified.textContent = document.lastModified;
  }
});



