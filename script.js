const display = document.getElementById("display");

function appendOperator(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculateResult() {
  try {
    const result = eval(display.value.replace(/÷/g, '/').replace(/×/g, '*'));
    display.value = result;
  } catch {
    display.value = "Error";
  }
}

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

// Optional: Keyboard Support
document.addEventListener("keydown", function (e) {
  const validKeys = "0123456789+-*/().";
  if (validKeys.includes(e.key)) {
    appendOperator(e.key);
  } else if (e.key === "Enter") {
    calculateResult();
  } else if (e.key === "Backspace") {
    deleteLast();
  } else if (e.key === "Escape") {
    clearDisplay();
  }
});
