function submitForm(event) {
  event.preventDefault(); // Prevent the form from submitting due to scope of solution
  window.location.href = "thank_you.html"; // Redirect to thank_you.html
}

// Helper function to display output on the webpage
function updateOutput(content) {
  let outputDiv = document.getElementById("output");
  outputDiv.innerHTML = content;
}

function displayStringMethods() {
  let userInput = document.getElementById("userInput").value;
  if (!userInput) {
    return updateOutput("Error: Please enter a valid string.");
  }
  let output = `
      Your string: ${userInput}<br>
      Length: ${userInput.length}<br>
      Character at index 4: ${userInput.charAt(4)}<br>
      Lowercase: ${userInput.toLowerCase()}<br>
      Uppercase: ${userInput.toUpperCase()}<br>
      Index of 'World': ${userInput.indexOf("World")}
  `;
  updateOutput(output);
}

function displayNumberMethods() {
  let userInput = parseFloat(document.getElementById("userInput").value);
  if (isNaN(userInput)) {
    return updateOutput("Error: Please enter a valid number.");
  }
  let output = `
      Your number: ${userInput}<br>
      Fixed (2 decimals): ${userInput.toFixed(2)}<br>
      Exponential (2 decimals): ${userInput.toExponential(2)}<br>
      Number to String: ${userInput.toString()}<br>
      Is Integer: ${Number.isInteger(userInput)}<br>
      Rounded: ${Math.round(userInput)}
  `;
  updateOutput(output);
}

function displayArrayMethods() {
  let userInput = document.getElementById("userInput").value;
  if (!userInput) {
    return updateOutput("Error: Please enter comma-separated values.");
  }
  let values = userInput.split(",");

  if (values.length === 0) {
    return updateOutput("Error: No values detected.");
  }

  let output = `
      Values: ${values.join(", ")}<br>
      Appended "example": ${[...values, "example"].join(", ")}<br>
      Removed last element: ${values.slice(0, -1).join(", ")}<br>
      First element: ${values[0]}<br>
      Values containing 'a': ${values
        .filter((val) => val.includes("a"))
        .join(", ")}
  `;
  updateOutput(output);
}

function displayDateMethods() {
  let date = new Date();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  // Formatting the time to HH:MM:SS format
  let hours = date.getHours().toString().padStart(2, "0");
  let minutes = date.getMinutes().toString().padStart(2, "0");
  let seconds = date.getSeconds().toString().padStart(2, "0");
  let formattedTime = `${hours}:${minutes}:${seconds}`;

  let output = `
      Full Year: ${date.getFullYear()}<br>
      Day of the Week: ${days[date.getDay()]}<br>
      Day of the Month: ${date.getDate()}<br>
      Month: ${months[date.getMonth()]}<br>
      Current Time: ${formattedTime}
  `;
  updateOutput(output);
}

function displayFunctionMethods() {
  let name = document.getElementById("userInput").value;
  if (!name) {
    return updateOutput("Error: Please enter a name.");
  }
  let output = `
      Your name is ${name}?<br>
      ${greetWithName(name)}
  `;
  updateOutput(output);
}

function greet() {
  return "Hello!";
}

function greetWithName(name) {
  return `Hello, ${name}!`;
}
