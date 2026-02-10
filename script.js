// Get important elements
const form = document.getElementById("place-form");
const placesList = document.getElementById("places-list");

// Listen for form submission
form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Get input values
    const name = document.getElementById("place-name").value;
    const date = document.getElementById("place-date").value;
    const location = document.getElementById("place-location").value;
    const description = document.getElementById("place-description").value;

    // Create place card
    const placeCard = document.createElement("div");
    placeCard.classList.add("place-card");

    placeCard.innerHTML = `
        <h3>${name}</h3>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Location:</strong> ${location}</p>
        <p><strong>Description:</strong> ${description}</p>
        <button class="delete-btn">Delete</button>
    `;

    // Delete button logic
    const deleteBtn = placeCard.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", function () {
        placeCard.remove();
    });

    // Add card to page
    placesList.appendChild(placeCard);

    // Reset form
    form.reset();
});