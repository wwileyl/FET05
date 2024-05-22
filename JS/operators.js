// JS operators and expression
// arithmetic operators and expressions
let a = 10;
let b = 5;

// addition + 
// a = a + b;
// console.log(a);

// compound assignment operator
a += b;
console.log(a);

// subtraction: a = a - b
a -= b;
console.log(a);

// multiplication: a = a * b
a *= b;
console.log(a);

// Division: a = a / b
a /= b;
console.log(a);

// modulo: a = a % b
a %= b;
console.log(a);

// concatenation
console.log("Hello " + a + " World");

// comparison operator
let x = 10;
let y = 5;
console.log(x > y); //greater than
console.log(x < y); //less than
console.log(x >= y); //greater than or equal to
console.log(x <= y); //less than or equal to
console.log(x == y); //equal to
console.log(x != y); //not equal

// type coercion
console.log(50 == "50") //true; loose equality
console.log(50 === "50") //false; strict equality

// Logical Operators
let sunny = true;
let warm = false;

// AND - &&
console.log("Sunny AND warm:", sunny && warm);

// OR - ||
console.log("Sunny OR warm: ", sunny || warm);

// NOT - !
console.log("Not sunny:", !sunny);

// Unary Operators (++, --)
let num = 1;
num++; // increment by 1
console.log(num);

// Ternary Operators - condition ? expression1 : expression2
let activeStatus = true;
let member = activeStatus ? "Registered" : "Not Registered";
console.log(member)

// typeof
console.log(typeof activeStatus);
console.log(typeof member);