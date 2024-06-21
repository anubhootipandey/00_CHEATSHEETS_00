/*-----------------------Operators------------------------->

Operators are the building blocks of programming that help us perform actions on our data. 
*/

//------------TYPES OF OPERATORS---------->

// 1.Arithmetic Operators
let a = 10;
let b = 5;

let addition = a + b;       // 15
let subtraction = a - b;    // 5
let multiplication = a * b; // 50
let division = a / b;       // 2
let modulus = a % b;        // 0
let exponentiation = a ** b; // 100000

//----------------------------------------------------------------------------------------------------------------------//

// 2.Assignment Operators
let x = 10;   // Assign 10 to x

x += 5;      // Equivalent to x = x + 5; x is now 15
x -= 3;      // Equivalent to x = x - 3; x is now 12
x *= 2;      // Equivalent to x = x * 2; x is now 24
x /= 4;      // Equivalent to x = x / 4; x is now 6
x %= 3;      // Equivalent to x = x % 3; x is now 0

//----------------------------------------------------------------------------------------------------------------------//

// 3.Comparison Operators
let p = 10;
let q = 5;
let r = '10';

let isEqual = (p == r);     // true (loose equality, only compares value)
let isStrictEqual = (p === r); // false (strict equality, compares value and type)
let isNotEqual = (p != q);  // true
let isGreaterThan = (p > q); // true
let isLessThan = (p < q);   // false
let isGreaterThanOrEqual = (p >= 10); // true
let isLessThanOrEqual = (q <= 5); // true

//----------------------------------------------------------------------------------------------------------------------//

// 4.Logical Operators
let isAdult = true;
let hasID = false;

let canEnterClub = isAdult && hasID; // false (both conditions must be true)
let canBuyAlcohol = isAdult || hasID; // true (one of the conditions is true)
let isNotMinor = !isAdult; // false (negates the value)


//----------------------------------------------------------------------------------------------------------------------//

// 5.Conditional (Ternary) Operator
let age = 20;
let canVote = (age >= 18) ? 'Yes' : 'No'; // 'Yes'


//----------------------------------------------------------------------------------------------------------------------//

// 7.Bitwise Operators
let m = 5;  // 0101 in binary
let n = 3;  // 0011 in binary

let and = m & n;  // 0101 & 0011 = 0001 (1)
let or = m | n;   // 0101 | 0011 = 0111 (7)
let xor = m ^ n;  // 0101 ^ 0011 = 0110 (6)
let not = ~m;     // ~0101 = 1010 (-6 in two's complement)
let leftShift = m << 1; // 0101 << 1 = 1010 (10)
let rightShift = m >> 1; // 0101 >> 1 = 0010 (2)


//----------------------------------------------------------------------------------------------------------------------//
