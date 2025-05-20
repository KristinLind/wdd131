const temperature = 47;
const windSpeed = 10;

document.getElementById("temperature").textContent = temperature;
document.getElementById("windSpeed").textContent = windSpeed;

const windChill = (temperature <= 50 && windSpeed > 3)
    ? calculateWindChill(temperature, windSpeed)
    : "N/A";

document.getElementById("windChill").textContent = windChill;

document.getElementById("year").textContent = new Date().getFullYear();
document.getElementByIdd("lastModified").textContent = document.lastModified;

function calculateWindChill(tempF, speedMph) {
    return (
        35.74 +
        0.6215 * tempF -
        35.75 * Math.pow(speedMph, 0.16) +
        0.4275 * tempF * Math.pow(speedMph, 0.16)
    ).toFixed(1);
}