const numbers = [1, 2, 3];
const names = ["Alice", "Bob", "Charlie"];

// 1. push: Thêm 4 vào cuối numbers; thêm "David" vào cuối names
console.log("1. push");
numbers.push(4);
names.push("David");
console.log("Sau khi push:");
console.log("numbers:", numbers); // [1, 2, 3, 4]
console.log("names:", names);     // ["Alice", "Bob", "Charlie", "David"]

// 2. pop: Loại bỏ phần tử cuối của numbers = [1, 2, 3, 4]
console.log("2. pop");
const removedNumber = numbers.pop();
console.log("Phần tử bị loại bỏ:", removedNumber); // 4
console.log("numbers sau khi pop:", numbers); // [1, 2, 3]

// 3. unshift: Thêm 0 vào đầu numbers; thêm "David" vào đầu names
console.log("3. unshift");
numbers.unshift(0);
names.unshift("David");
console.log("Sau khi unshift:");
console.log("numbers:", numbers); // [0, 1, 2, 3]
console.log("names:", names);     // ["David", "Alice", "Bob", "Charlie", "David"]

// 4. shift: Loại bỏ phần tử đầu của numbers = [0, 1, 2, 3]
console.log("4. shift");
const removedFirstNumber = numbers.shift();
console.log("Phần tử đầu bị loại bỏ:", removedFirstNumber); // 0
console.log("numbers sau khi shift:", numbers); // [1, 2, 3]

