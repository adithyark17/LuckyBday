const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNum = document.querySelector("#lucky-number");
const checkNumBtn = document.querySelector("#check-number");
const outputBox = document.querySelector("#output");


function compareValues (sum, luckyNum){
  if (sum % luckyNum.value === 0) {
    outputBox.innerText = "Your birthday is lucky!! 🥳";
  } else {
    outputBox.innerText = "Your birthday is not lucky";
  }
};

function checkBirthDateIsLucky () {
  const dob = dateOfBirth.value;
  const sum = calculateSum(dob);
  if (sum && dob)
  compareValues(sum, luckyNum);
  else 
  outputBox.innerText = "Please enter both fields"
  
};

function  calculateSum (dob)  {
  dob = dob.replaceAll("-", "");
  let sum = 0;
  for (let index = 0; index < dob.length; index++) {
    sum = sum + Number(dob.charAt(index));
  }
  return sum;
};

checkNumBtn.addEventListener("click", checkBirthDateIsLucky);