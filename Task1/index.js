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

const inputContainer = document.getElementById("inputContainer")
const mobileContainer = document.getElementById("mobileContainer")
const mobilepara = document.createElement("p");
mobilepara.textContent = "Required Field";
mobilepara.setAttribute("class", "requiredFieldmobile");

const emailpara = document.createElement("p");
emailpara.textContent = "Required Field";
emailpara.setAttribute("class", "requiredField");

const errorMessage = document.getElementById("errorMessage");


submitButton.addEventListener("click", (event) => {
    console.log("hello hemant working the button");
    event.preventDefault();

    // Check if email input is empty and show the message if needed
    if (emailInput.value === "") {
        if (!inputContainer.contains(emailpara)) {
            inputContainer.append(emailpara);
        }
    } else {
        if (inputContainer.contains(emailpara)) {
            inputContainer.removeChild(emailpara);
        }
    }

    // Check if mobile input is empty and show the message if needed
    if (mobileInput.value === "") {
        if (!mobileContainer.contains(mobilepara)) {
            mobileContainer.append(mobilepara);
        }
    } else {
        if (mobileContainer.contains(mobilepara)) {
            mobileContainer.removeChild(mobilepara);
        }
    }

    // Check if either email or mobile input is empty
    if (emailInput.value === "" || mobileInput.value === "") {
        return;
    }


    // validation Email
    if (!emailValidate(emailInput.value) && !mobileValidate(mobileInput.value)) {
        errorMessage.textContent = "Note: You have entered an invalid email address and Mobile Number"
        return;
    } else {
        errorMessage.textContent = ""
    }

    // validation Email
    if (!emailValidate(emailInput.value)) {
        errorMessage.textContent = "Note: You have entered an invalid email address"
        return;
    } else {
        errorMessage.textContent = ""
    }

    // validate mobile

    if (!mobileValidate(mobileInput.value)) {
        errorMessage.textContent = "Note: You have entered an invalid Mobile number"
        return;
    } else {
        errorMessage.textContent = ""
    }


    // if both are correct then 

    // selecting countrydial code 

    const selectedOption = countrySelect.options[countrySelect.selectedIndex];


    const inputDatas = {
        email: emailInput.value,
        mobile: mobileInput.value,
        dialCode: selectedOption.textContent
    }

    localStorage.setItem('userData', JSON.stringify(inputDatas));
    mobileInput.value = "";
    emailInput.value = "";
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

