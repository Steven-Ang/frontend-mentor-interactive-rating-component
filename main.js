const form = document.getElementById("rating-form");
const ratingResult = document.getElementById("rating-result");
const mainCardContent = document.querySelector(".card-content");
const resultCardContent = document.querySelector(".card-content.result");
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

  mainCardContent.classList.toggle("hidden");
  mainCardContent.ariaHidden = "true";

  resultCardContent.classList.toggle("hidden");
  resultCardContent.ariaHidden = "false";
};

form.addEventListener("submit", handleSubmit);
