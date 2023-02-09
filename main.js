const calc = document.querySelector(".calc");
const digitField = calc.querySelector(".calc__digit-field");
const calcDigitsMain = calc.querySelector(".calc__digits-main");
const calcDigitsBottom = calc.querySelector(".calc__digits-bottom");
const calcDigitsService = calc.querySelector(".calc__digits-service");

const addDigit = (digit) => {
  console.log(digitField.textContent);
  if (digitField.textContent.length > 15) return;
  if (digit === "0" && digitField.textContent === "0") return;

  if (digitField.textContent === "0") {
    digitField.textContent = digit;
  } else {
    digitField.textContent += digit;
  }
};

const addButton = (text, parentEl, callback) => {
  const button = document.createElement("button");

  button.setAttribute("type", "button");
  button.classList.add("calc__digit");
  button.textContent = text;

  button.addEventListener("click", () => {
    callback(text);
  });

  parentEl.append(button);

  return button;
};

const evaluate = (string) => {
  let result;
  if (string.includes("+")) {
    result = string.split("+");
    const [a, b] = result;
    return Number(a) + Number(b);
  } else if (string.includes("-")) {
    result = string.split("-");
    const [a, b] = result;
    return Number(a) - Number(b);
  } else {
    return string;
  }
};

for (let i = 1; i <= 9; i++) {
  const buttonWithDigit = document.createElement("button");
  buttonWithDigit.setAttribute("type", "button");
  buttonWithDigit.classList.add("calc__digit");
  buttonWithDigit.textContent = i;

  buttonWithDigit.addEventListener("click", () => {
    addDigit(i);
  });

  calcDigitsMain.append(buttonWithDigit);
}

const btnZero = addButton("0", calcDigitsBottom, addDigit);
btnZero.classList.add("calc__digit--wider");

addButton(".", calcDigitsBottom, addDigit);

addButton("C", calcDigitsService, () => {
  digitField.textContent = "0";
});

addButton("-", calcDigitsService, addDigit);
addButton("+", calcDigitsService, addDigit);
addButton("=", calcDigitsService, () => {
  digitField.textContent = evaluate(digitField.textContent);
});
