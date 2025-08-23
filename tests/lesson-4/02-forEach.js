const numbers = [1, 2, 3];
const str = "Playwright";
const student = { "name": "Alex", "age": 10, "salary": 20 };
const arr = [1, 2, 3, 4, 3, 55, 23];
const dupArr = [1, 2, 3, 1, 2, 4, 5];

// 2.1 In lần lượt từng ký tự của str
console.log("2.1 Ký tự của str:");
for (let ch of str) {
  console.log(ch);
}

// 2.2 Tạo mảng đảo ngược từ str
let reversed = [];
for (let ch of str) {
  reversed.unshift(ch);
}
console.log("\n2.2 Mảng đảo ngược:", reversed);

// 2.3 Tìm và in vị trí đầu tiên và cuối cùng của giá trị 3 trong arr
let firstIndex = -1, lastIndex = -1;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 3) {
    if (firstIndex === -1) firstIndex = i;
    lastIndex = i;
  }
}
console.log("\n2.3 Vị trí đầu tiên:", firstIndex, " | Vị trí cuối cùng:", lastIndex);

// 2.4 Lọc các phần tử xuất hiện 1 lần trong dupArr
let freq = {};
for (let num of dupArr) {
  freq[num] = (freq[num] || 0) + 1;
}
let unique = [];
for (let num of dupArr) {
  if (freq[num] === 1) unique.push(num);
}
console.log("\n2.4 Các phần tử chỉ xuất hiện 1 lần:", unique);