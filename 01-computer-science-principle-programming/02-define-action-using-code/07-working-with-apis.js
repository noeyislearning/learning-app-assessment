/**
 * SECTION:
 * APIs
 */

/**
 * EXERCISE:
 * 1. Define a function named `getWeather` that takes a parameter named `city` and returns the weather for that city.
 * 2. Define a function named `displayWeather` that takes a parameter named `weather` and displays the weather for that city.
 * 3. Call the `getWeather` function and store the result in a variable named `weather`.
 * 4. Call the `displayWeather` function and pass in the `weather` variable.
 */

// Define a function named `getWeather` that takes a parameter named `city` and returns the weather for that city
function getWeather(city) {
    // TAKE NOTE: This is a fake API call

    // Get the weather from the API
    // Return the weather
    return "Sunny";
}

// Define a function named `displayWeather` that takes a parameter named `weather` and displays the weather for that city
function displayWeather(weather) {
    return weather;
}

// Call the `getWeather` function and store the result in a variable named `weather`
let weather = getWeather("London");

// Call the `displayWeather` function and pass in the `weather` variable
console.log(displayWeather(weather)); // Sunny