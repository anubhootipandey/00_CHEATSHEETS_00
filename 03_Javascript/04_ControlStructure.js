/*---------------------------CONTROL STRUCTURE----------------------------------------------------

Control structures are the building blocks that help us manage the flow of our programs.
*/

// 1.If-Else Statements
let age = 18;

if (age >= 18) {
  console.log('You are an adult.');
} else {
  console.log('You are a minor.');
}

//----------------------------------------------------------------------------------------------------------------------//

// 2.Else-If Statements
let score = 85;

if (score >= 90) {
  console.log('Grade: A');
} else if (score >= 80) {
  console.log('Grade: B');
} else if (score >= 70) {
  console.log('Grade: C');
} else if (score >= 60) {
  console.log('Grade: D');
} else {
  console.log('Grade: F');
}

//----------------------------------------------------------------------------------------------------------------------//

// 3.Switch Statements
let day = 3;
let dayName;

switch (day) {
  case 1:
    dayName = 'Monday';
    break;
  case 2:
    dayName = 'Tuesday';
    break;
  case 3:
    dayName = 'Wednesday';
    break;
  case 4:
    dayName = 'Thursday';
    break;
  case 5:
    dayName = 'Friday';
    break;
  case 6:
    dayName = 'Saturday';
    break;
  case 7:
    dayName = 'Sunday';
    break;
  default:
    dayName = 'Invalid day';
}

console.log(dayName);


//----------------------------------------------------------------------------------------------------------------------//

// 4.For Loops
for (let i = 0; i < 5; i++) {
    console.log('This is loop iteration number ' + i);
}  

//----------------------------------------------------------------------------------------------------------------------//

// 5.While Loops
let i = 0;

while (i < 5) {
  console.log('This is while loop iteration number ' + i);
  i++;
}

//----------------------------------------------------------------------------------------------------------------------//

// 6.Do-While Loops
let j = 0;

do {
  console.log('This is do-while loop iteration number ' + j);
  j++;
} while (j < 5);

//----------------------------------------------------------------------------------------------------------------------//

// 7.Break and Continue Statements
for (let i = 0; i < 10; i++) {
    if (i === 5) {
      break; // Stop the loop when i is 5
    }
    console.log(i);
  }
  
  for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
      continue; // Skip the current iteration if i is even
    }
    console.log(i);
  }


//----------------------------------------------------------------------------------------------------------------------//


