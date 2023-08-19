const inputData = localStorage.getItem('userData');
const userData = JSON.parse(inputData);


console.log(userData)

const resultContent=  document.getElementById("resultContent");

resultContent.textContent = `“Thanks a ton for taking out your precious time and for completing the survey
Email Address: ${userData.email}
Contact Number: ${userData.dialCode}-${userData.mobile}”
`