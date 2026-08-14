import {
    validateName,
    validateEmail,
    validatePassword
} from "./validation.js";


const form = document.getElementById("joinForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

const formSuccess = document.getElementById("formSuccess");


form.addEventListener("submit", function(event) {
    event.preventDefault();

    const nameMessage = validateName(nameInput.value);
    const emailMessage = validateEmail(emailInput.value);
    const passwordMessage = validatePassword(passwordInput.value);

    nameError.textContent = nameMessage;
    emailError.textContent = emailMessage;
    passwordError.textContent = passwordMessage;

    if (
        nameMessage === "" &&
        emailMessage === "" &&
        passwordMessage === ""
    ) {
        formSuccess.textContent = "Welcome to Raise a Pancho!";
    } else {
        formSuccess.textContent = "";
    }
});
const searchInput = document.getElementById("searchInput");
const benefits = document.querySelectorAll("#benefitsList li");
const noResults = document.getElementById("noResults");

benefits.forEach(function(benefit) {
    benefit.style.display = "none";
});

searchInput.addEventListener("input", function() {

    const searchText = searchInput.value.toLowerCase().trim();

    let visibleBenefits = 0;

    benefits.forEach(function(benefit) {

        const benefitText = benefit.textContent.toLowerCase();

        if (searchText !== "" && benefitText.includes(searchText)) {
            benefit.style.display = "list-item";
            visibleBenefits++;
        } else {
            benefit.style.display = "none";
        }
    });

    if (visibleBenefits === 0) {
        noResults.style.display = "block";
    } else {
        noResults.style.display = "none";
    }
});