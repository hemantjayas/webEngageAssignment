const inputData = localStorage.getItem('userData');
const userData = JSON.parse(inputData);


console.log(userData)

const resultContent=  document.getElementById("resultContent");

resultContent.innerHTML = `Thanks a ton for taking out your precious time and for completing the survey </br>
Email Address: ${userData.email} </br>
Contact Number: ${userData.dialCode}-${userData.mobile}
`
