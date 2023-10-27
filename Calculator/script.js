// Get a reference to the result input field
const result = document.getElementById('result');

// Create variables to store the current input and operator
let currentInput = '';
let currentOperator = '';

// Add a number to the current input
function appendNumber(number) {
  // Check if the current input already contains a decimal point
  if (number === '.' && currentInput.includes('.')) {
    return; // If a decimal point is already present, do nothing
  }

  currentInput += number;
  updateDisplay();
}

// Add an operator to the current operator
function appendOperator(operator) {
  if (currentInput !== '') {
    currentOperator = operator;
    currentInput += operator;
    updateDisplay();
  }
}

// Clear the calculator screen
function clearScreen() {
  currentInput = '';
  currentOperator = '';
  updateDisplay();
}

// Calculate the result
function calculateResult() {
  if (currentInput !== '' && currentOperator !== '') {
    try {
      const resultValue = eval(currentInput);
      result.value = resultValue;
      currentInput = resultValue.toString();
      currentOperator = '';
    } catch (error) {
      result.value = 'Error';
    }
  }
}

// Update the display with the current input and operator
function updateDisplay() {
  result.value = currentInput;
}
