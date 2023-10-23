// html file paired with this (not here)

document.getElementById("phoneNum").addEventListener("input", (event) => {
  // input string format for phone number
  const regex = /^\(?(\d{3})\)?[-. ]?(\d{3})[-. ]?(\d{4})$/g;
  const input = document.getElementById("phoneNum");
  const format = document.querySelector(".phoneFormat") // query selector bc selecting class
  const phone = input.value;
  const found = regex.test(phone); // returns bool

  // if it doesnt match the phone number format
  if (!found && phone.length) {
    input.classList.add("invalid"); // turns text red
    format.classList.add("block"); // displays block
  } else {
    input.classList.remove("invalid");
    format.classList.remove("block");
  }
});

// when phone # submitted remove all characters except the numbers
document.getElementById("phoneForm").addEventListener("submit", (event) => {
  event.preventDefault(); // dont reload page
  const input = document.getElementById("phoneNum");
  const regex = /[()-. ]/g;
  const savedPhoneNum = input.value.replaceAll(regex, "");
  console.log(savedPhoneNum);
});