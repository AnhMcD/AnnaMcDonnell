//if else with operators example

const age = 18;
if (age >= 18) {
  console.log("You're eligible for a driving license now");
} else {
  const yearsLeft = 18 - age;
  console.log(
    "Sorry. You won't be able to get a driving license for another ${yearsLeft} years"
  );
}

// logical operators example
let hour = 12;
let isWeekend = true;
if (hour < 10 || hour > 18 || isWeekend) {
  alert("The office is closed.");
}

for (var i = 0; i < 5; i++) {
  let name = "Anna";
  console.log("Hi " + name);
}
