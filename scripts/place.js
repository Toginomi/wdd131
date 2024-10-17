function updateFooter() {
    const currentYear = new Date().getFullYear();
    const lastModified = document.lastModified;

    document.getElementById('currentyear').textContent = currentYear;
    document.getElementById('lastModified').textContent = `Last modified: ${lastModified}`;
}

function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function calculateWindChill(temperature, windSpeed) {
    const temperatureInFahrenheit = celsiusToFahrenheit(temperature);
    const windChillInFahrenheit = 35.74 + 0.6215 * temperatureInFahrenheit - 35.75 * (windSpeed ** 0.16) + 0.4275 * temperatureInFahrenheit * (windSpeed ** 0.16);
    const windChillInCelsius = fahrenheitToCelsius(windChillInFahrenheit);

    return Math.round(windChillInCelsius * 10) / 10;
}

function displayWindChill() {
    const temperature = 30;
    const windSpeed = 5;

    let windChill;

    if (temperature <= 10 && windSpeed > 4.8) {
        windChill = calculateWindChill(temperature, windSpeed) + "°C";
    } else {
        windChill = "N/A";
    }

    const windChillElement = document.querySelectorAll('.weather-section .value')[3];
    windChillElement.textContent = windChill;
}

document.addEventListener('DOMContentLoaded', () => {
    updateFooter();
    displayWindChill();
});