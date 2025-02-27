console.log([1, 2, 3].length); // 3 
console.log([1, 2, 3].push(4)); // [1, 2, 3, 4] * 
console.log([1, 2, 3].unshift(0)); // (0, 1, 2, 3] * 
console.log([1, 2, 3].pop()); // (1, 2] 
console.log([1, 2, 3].shift()); // [2, 3] • 
console.log([1, 2, 3].at(2)); // 3 
console.log([1, 2, 3].index0f(3)); // 2 
console.log([1, 2, 3].includes(3)); // true 
console.log([1, 2, 3].map((num) => num * 2)); // [2, 4, 6] 
console.log([1, 2, 3].filter((num) => num > 1)); // [2, 3] 
console.log([1, 2, 3].every((num) => num > 0)); // true 
console.log([1, 2, 3].some((num) => num > 2)); // true 
console.log([1, 2, 3] .fill(0)); // [0, 0, 0] 
console.log([1, 2, 3].reduce((acc, num) => acc + num, 0)); // 6 
console.log([1, 2, 3].concat([4, 5])); // [1, 2, 3, 4, 5] 
console.log([1, 2, 3].reverse()); // [3, 2, 1] 
console.log([3, 2, 1].sort()); // [1, 2, 3] 
console.log([1, 2, 3].join(""-"")); // 1-2-3
console.log([1, 2, 3].flat()); // [1, 2, 3] 
console.log([1, 2, 3].find((num) => num === 1)); // 1 
console.log([1, 2, 3].findlndex((num) => num === 2)); // 1 
console.log([1, 2, 3].toString()); // ''1,2,3" 
console.log([1, 2, 3].tolocaleString()); // "1,2,3" 
console.log([1, 2, 3].slice(1, 2)); // [2] 
console.log([1, 2, 3].splice(1, 1, "a")); // [1, ·a·, 3] 
console.log(Array.isArray([1, 2, 3])); // true 
console.log(Array.from("'123'")); // ['1', '2' , '3'] 