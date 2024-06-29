/***************************************** JAVASCRIPT BASIC CONCEPTS *********************************************/

// // 1.Datatype and Variable----->
// var myName = 'Bob';
// myName = 'Bob the Builder';
// console.log(myName); // Var can be reassigned.

// let ourName = "Scoup";
// ourName = "Muck";
// console.log(ourName); // let can also be reassigned.

// const randomName = 'Pta nhi';
// randomName = 'Pta kar na phir';
// console.log(randomName); //TypeError: Assignment to constant variable. const cannot be reassigned.

// // /*-------------------------------------------------------------------------------------------------------------------------------------------*/

// // 2.Storing variables with assignment operator----->
// var a;
// var b = 2; //initializing variables with assignment operator
// console.log(a); //undefined
// a = 7;
// b = a;
// console.log(a); //7

/*-------------------------------------------------------------------------------------------------------------------------------------------*/

// // 3.Operators
//     // Adding Numbers--->
//     var sum = 10 + 10;
//     console.log(sum);

//     // Subtracting Numbers--->
//     var diff = 45 - 10;
//     console.log(diff);

//     // Multiplying Numbers--->
//     var product = 10 * 10;
//     console.log(product);

//     // Dividing Numbers--->
//     var quotient = 10 / 10;
//     console.log(quotient);

//     // Incrementing Numbers--->
//     var myVar = 10;
//     console.log(myVar++);

//     // Decrementing Numbers--->
//     var ourVar = 110;
//     console.log(ourVar--);

//     // Decimal Numbers--->
//     var decimal = 10.8;
//     console.log(decimal);

/*-------------------------------------------------------------------------------------------------------------------------------------------*/

// // 4.Compound Assignment with Augmented Addition, Subtraction, Multiplication and Division---->
//    var m = 2;
//    m += 23;
//    m -= 20;
//    m *= 3;
//    m /= 5;
//    console.log(m);

/*-------------------------------------------------------------------------------------------------------------------------------------------*/

// // 5.Escaping Literal quotes in strings---->
//    var myStr = "I am a \"double quoted\" string inside \"double quoted\""; //is a escaping literal used to diff. the end of the string.
//    console.log(myStr);

//    //Quoting Strings with Single Quotes---->
//    var ourStr = 'I am a "double quoted" string inside "double quoted"';
//    console.log(ourStr);

/*-------------------------------------------------------------------------------------------------------------------------------------------*/

// // 6.Escape Sequences in Strings---->
//    /*
//         \'  ----> Single quote
//         \"  ----> Double quote
//         \\  ----> Backslash
//         \n  ----> NewLine
//         \r  ----> Carriage return
//         \t  ----> Tab
//         \b  ----> backspace
//         \f  ----> form feed
//    */
//    var ranStr = "FirstLine\n\t\\SecondLine\nThirdLine";
//    console.log(ranStr);

/*-------------------------------------------------------------------------------------------------------------------------------------------*/

// // 7.Concatenating Strings with Plus Operator---->
//    var randomStr = "This is the Start. " + "This is the Last. ";
//    console.log(randomStr);

//    //Concatenating strings with plus equals operator---->
//    var rStr = "I come first. ";
//    rStr += "I come second. ";
//    console.log(rStr);

//    //Concatenating strings with variables---->
//    var mYName = "BOB";
//    var mYStr = "My name is " + mYName + " and I am well!";
//    console.log(mYStr);

/*-------------------------------------------------------------------------------------------------------------------------------------------*/

// // 8.Find Length of String---->
//    var firstNameLength = 0;
//    var firstName = "Ada";
//    firstNameLength = firstName.length;
//    console.log(firstNameLength);

/*-------------------------------------------------------------------------------------------------------------------------------------------*/

// // 9.Bracket Notation to find first Character in string---->
//    var firstLetterOfName = " ";
//    var firsTName = "Bob";
//    firstLetterOfName = firsTName[0];
//    console.log(firstLetterOfName);

//    //Bracket Notation to find nth Character in string---->
//    var firName = "Ada";
//    var secLetterOfFirstName = firName[2];
//    console.log(secLetterOfFirstName);

//    //Bracket Notation to find last Character in string---->
//    var fName = "Bob";
//    var lName = "the builder";
//    var lastLetterOfFirstName = fName[fName.length - 1];
//    var lastLetterOfLastName = lName[lName.length - 1];
//    console.log(lastLetterOfFirstName);
//    console.log(lastLetterOfLastName);

//    //Bracket Notation to find nth to last Character in string---->
//    var fnAme = "Adalace";
//    var thirdToLastLetterOfFirstName = fnAme[fnAme.length - 3];
//    console.log(thirdToLastLetterOfFirstName);

/*-------------------------------------------------------------------------------------------------------------------------------------------*/

// // 10.String Immutability--->
//    var mYSt = "Jello World";
//    mYSt = "Hello World";
//    console.log(mYSt);

/*-------------------------------------------------------------------------------------------------------------------------------------------*/

// // 11.Word Blanks---->
//    function wordBlanks(myNoun, myAdjective, myVerb, myAdverb){
//     var result = " ";
//     result += "The " + myAdjective + " " + myNoun + " " + myVerb + " " + "to the store" + " " + myAdverb;
//     return result; 
//    }
//    console.log(wordBlanks("dog", "big", "ran", "quickly"));

/*-------------------------------------------------------------------------------------------------------------------------------------------*/

// 12.Array---->

   //Store multiple values with arrays---->
   var ourArr = [["John", 23], ["Ada", 101010]];

   //Access array data with indexes--->
   var myArr = [50, 60, 70];
   var myData = myArr[0];
   console.log(myData);

   //Modify Array Data with Indexes--->
   var ourArray = [18, 64, 99];
   ourArray[1] = 45;
   console.log(ourArray);

   //Access multi-dimensional arrays with indexes---->
   var myArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [[10, 11, 12], 13, 14]];
   var myRes = myArray[2][1];
   console.log(myRes);

   //Manipulate arrays with PUSH()---->
   var fruits = ["apple", "orange", "banana"];
   fruits.push("grapes", "berry");
   console.log(fruits);

   //Manipulate arrays with POP()---->
   var colors = ["red", "orange", "blue", "black"];
   colors.pop();
   console.log(colors);

   //Manipulate arrays with SHIFT()---->
   var animals = ['tiger', 'lion', 'dog', 'cat', 'panther'];
   animals.shift();
   console.log(animals);

   //Manipulate arrays with UNSHIFT()---->
   var animal = ['tiger', 'lion', 'dog', 'cat'];
   animal.unshift('panther');
   console.log(animal);

/*-------------------------------------------------------------------------------------------------------------------------------------------*/








