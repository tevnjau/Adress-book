// Get important elements from the page
const form = document.getElementById("place-form");
const placesList = document.getElementById("places-list");

// Listen for form submission
form.addEventListener("submit", function (event) {
    // Stop page from refreshing
    event.preventDefault();
