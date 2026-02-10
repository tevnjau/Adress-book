// Get important elements from the page
const form = document.getElementById("place-form");
const placesList = document.getElementById("places-list");

// Listen for form submission
form.addEventListener("submit", function (event) {
    // Stop page from refreshing
    event.preventDefault();

    // Get user input values
    const name = document.getElementById("place-name").value;
    const date = document.getElementById("place-date").value;
    const location = document.getElementById("place-location").value;
    const description = document.getElementById("place-description").value;
