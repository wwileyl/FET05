// conditional statements
// if
let number = 25;

if (number > 23) {
    console.log("You're greater than 23");
}

// if / else if / else
if (number > 25) {
    console.assert.log("You're greater than 25");
}
else if (number < 25) {
    console.log("You're less than 25");
}
else {
    console.log("You're equal to 25");
}

// switch
let day = "Wednesday";

switch(day) {
    case "Monday":
        console.log("It's the start of the day");
        break;
    case "Friday":
        console.log("Its the end of the week!");
        break;
    default:
        console.log("It's a regular day");
}

// Loops
// console.log(1);
// console.log(2);

// for loop
for (let i = 0; i <= 5; i++){
    console.log("For Loop Count:", i);
}

// while loop
let count = 1;

while (count <= 5) {
  console.log("While loop:", count);
  count++;
}

// do-while loop
let j = 8;

do {
    console.log("Do-while Count:", j);
    j++; 
} 
while (j <= 5);

// simple validation
let input = "";
do {
  input = prompt("Please enter a grade");
} while ((input = ""));