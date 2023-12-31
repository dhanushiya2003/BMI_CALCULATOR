// Get user input for weight in kilograms
var weight = prompt("Enter your weight in kilograms:");

// Get user input for height in meters
var height = prompt("Enter your height in meters:");

// Calculate BMI
var bmi = weight / (height * height);

// Determine BMI category
var category;
if (bmi < 18.5) {
  category = "Underweight";
} else if (bmi >= 18.5 && bmi < 25) {
  category = "Normal weight";
} else if (bmi >= 25 && bmi < 30) {
  category = "Overweight";
} else {
  category = "Obese";
}

// Display the result
console.log("Your BMI is: " + bmi.toFixed(2));
console.log("Category: " + category);
