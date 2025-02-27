const date = new Date(); 
//? 2023-04-25T19:27:35.363Z 
console.log(new Date(1682452894553)); 
//? Sun Apr 25 2023 00:00:00 GMT+0200 
console.log(new Date("2023-04-25")); 
//? Sun Apr 25 2023 00:00:00 GMT+0200 
console.log(new Date("2023-04-25T01:10:00")); 
//? Sun Apr 25 2023 01:10:00 GMT+0200 
console.log(new Date(2023, 3, 25, 1, 10, 0, 0)); 
//? Tue Apr 25 2023 01:10:00 GMT+0200 
// year, month, day, hour, min, sec, misc