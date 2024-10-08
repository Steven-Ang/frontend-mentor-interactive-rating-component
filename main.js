const form = document.getElementById("rating-form");
const ratingResult = document.getElementById("rating-result");
const mainCard = document.querySelector(".card");
const resultCard = document.querySelector(".card.result");
const ratingButtons = document.querySelectorAll(".rating-button");

for (let ratingButton of ratingButtons) {
  ratingButton.addEventListener("click", (event) => {
    event.preventDefault();
    [...ratingButtons].forEach((ratingButton) => {
      if (ratingButton.classList.contains("selected"))
        ratingButton.classList.toggle("selected");
    });
    ratingButton.classList.toggle("selected");
  });
}

const handleSubmit = (event) => {
  event.preventDefault();

  const selectedRatingButton = document.querySelector(".rating-button.selected");

  ratingResult.textContent = selectedRatingButton.value;

  mainCard.classList.toggle("hidden");
  mainCard.ariaHidden = "true";

  resultCard.classList.toggle("hidden");
  resultCard.ariaHidden = "false";
};

form.addEventListener("submit", handleSubmit);
