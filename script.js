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

    // Create a container for the new place
    const placeCard = document.createElement("div");
    placeCard.classList.add("place-card");

    // Add content to the card
    placeCard.innerHTML = `
        <h3>${name}</h3>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Location:</strong> ${location}</p>
        <p><strong>description:</strong>${description}</p>
    `;{
    // Stop page from refreshing
    event.preventDefault();

    // Get user input values
    const name = document.getElementById("place-name").value;
    const date = document.getElementById("place-date").value;
    const location = document.getElementById("place-location").value;
    const description = document.getElementById("place-description").value;

    // Create a container for the new place
    const placeCard = document.createElement("div");
    placeCard.classList.add("place-card");

    // Add content to the card
    placeCard.innerHTML = `
        <h3>${name}</h3>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Location:</strong> ${location}</p>
        <p><strong>description:</strong>${description}</p>
        <button class="delete-btn">Delete</button>
    `;
    const deleteBtn = placeCard.querySelector(".delete-btn");

deleteBtn.addEventListener("click", function () {
    placeCard.remove();
        // Add card to the page
    placesList.appendChild(placeCard);

    // Clear the form
    form.reset();
});