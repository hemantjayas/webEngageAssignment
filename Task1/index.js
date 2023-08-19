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
const countrySelectDial = document.getElementById('country-select');



submitButton.addEventListener("click", (event) => {
    console.log("hello hemant working the button");
    event.preventDefault();

    // validation Email
    if (!emailValidate(emailInput.value)) {
        alert("email is wrong");
        return;
    } else {

    }

    // validate mobile

    if (!mobileValidate(mobileInput.value)) {
        alert("mobile is worng");
        return;
    }


    // if both are correct then 

    // selecting countrydial code 

    const selectedOption = countrySelect.options[countrySelect.selectedIndex];
    const countryDialCode = selectedOption.value;
    // console.log(countryDialCode)

    const inputDatas = {
        email: emailInput.value,
        mobile: mobileInput.value,
        dialCode: selectedOption.textContent
    }

    localStorage.setItem('userData', JSON.stringify(inputDatas));
    window.location.href = "result.html"
})


function emailValidate(email) {

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email)
}

function mobileValidate(mobile) {

    const mobileRegex = /^[0-9]{10}$/;
    return mobileRegex.test(mobile)
}