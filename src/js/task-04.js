let currentValue = 0;

const decrementBtn = document.querySelector(
  '#counter button[data-action="decrement"]'
);
const incrementBtn = document.querySelector(
  '#counter button[data-action="increment"]'
);
const targetValue = document.querySelector("#value");

const decrement = () => {
  currentValue -= 1;
  targetValue.textContent = currentValue;
};

const increment = () => {
  currentValue += 1;
  targetValue.textContent = currentValue;
};

decrementBtn.addEventListener("click", decrement);
incrementBtn.addEventListener("click", increment);
