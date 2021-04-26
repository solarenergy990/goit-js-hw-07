const inputRef = document.querySelector("#name-input");
const outputRef = document.querySelector("#name-output");

const onInputChange = (event) => {
  if (inputRef.value === "") {
    outputRef.textContent = "незнакомец";
    return;
  }
  outputRef.textContent = event.currentTarget.value;
};

inputRef.addEventListener("input", onInputChange);
