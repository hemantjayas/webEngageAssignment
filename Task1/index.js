const countries = [
    {
        name: "United States",
        emoji: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/US.svg",
        dialCode: "+1"
    },

    {
        name: "United Kingdom",
        emoji: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ENGLAND.svg",
        dialCode: "+44"
    },

    {
        name: "India",
        emoji: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IN.svg",
        dialCode: "+91"
    },

];

const countrySelect = document.getElementById("country-select");


countries.forEach(country => {
    const option = document.createElement("option");
    option.value = country.dialCode;
    option.innerHTML = `${country.dialCode}`;
    countrySelect.appendChild(option);
});



const emailInput = document.getElementById("emailInput");
const mobileInput = document.getElementById("mobileInput");
const submitButton = document.getElementById("submitButton");

