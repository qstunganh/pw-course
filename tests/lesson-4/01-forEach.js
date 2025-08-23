const numbers = [1, 2, 3];
const str = "Playwright";
const student = { "name": "Alex", "age": 10, "salary": 20 };
const arr = [1, 2, 3, 4, 3, 55, 23];
const dupArr = [1, 2, 3, 1, 2, 4, 5];

// 1.1 In lần lượt từng phần tử của numbers
console.log("1.1 Các phần tử trong numbers:");
numbers.forEach(num => console.log(num));

// 1.2 Tính tổng, tìm giá trị lớn nhất và nhỏ nhất của numbers
let sum = 0;
let max = numbers[0];
let min = numbers[0];

numbers.forEach(num => {
  sum += num;
  if (num > max) max = num;
  if (num < min) min = num;
});

console.log("\n1.2 Kết quả:");
console.log("Tổng =", sum);
console.log("Lớn nhất =", max);
console.log("Nhỏ nhất =", min);

// 1.3 Tạo mảng mới từ numbers, mỗi phần tử nhân đôi
let doubled = [];
numbers.forEach(num => {
  doubled.push(num * 2);
});

console.log("\n1.3 Mảng nhân đôi:", doubled);