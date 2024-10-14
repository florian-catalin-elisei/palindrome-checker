const checkBtn = document.querySelector("#check-btn");
const textInput = document.querySelector("#text-input");
const result = document.querySelector("#result");

const checkPalindrome = () => {
  const regex = /[^a-zA-Z0-9]/g;

  if (textInput.value === "") {
    alert("Please input a value");
  }

  const cleanInput = textInput.value.toLowerCase().replace(regex, "");

  for (let i = 0; i < cleanInput.length; i++) {
    if (cleanInput[i] !== cleanInput[cleanInput.length - 1 - i]) {
      result.innerText = `${textInput.value} is not a palindrome`;
      return;
    }
  }

  result.innerText = `${textInput.value} is a palindrome`;
};

checkBtn.addEventListener("click", checkPalindrome);
