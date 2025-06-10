const trips = [
    { name: "Zion National Park", type: "adventure", days: 3 },
    { name: "Lake Powell", type: "relaxation", days: 5 },
];

function displayTrips() {
    const tripList = document.querySelector("#tripList");
    tripList.innerHTML = trips.map(trip => `
        <li>${trip.name} - ${trip.days} days</li>
    `).join('');
}

const loadBtn = document.querySelector("#loadBtn");
if (loadBtn) {
    loadBtn.addEventListener("click", displayTrips);
}

function checkTripLength(days) {
    if (days > 4) {
        return "Long trip";
    } else {
        return "Short trip";
    }
}

function saveForm() {
    const name = document.querySelector("#name").value;
    localStorage.setItem("userName", name);
}

const yearSpan = document.querySelector('#year');
yearSpan.textContent = new Date().getFullYear();

const modifiedSpan = document.querySelector('#lastModified');
modifiedSpan.textContent = document.lastModified;