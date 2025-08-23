const scores = [85, 90, 78];
const ages = [18, 21, 16, 25];
const words = ["apple", "banana", "cherry", "date"];
const numbers = [1, 2, 3, 4];
const expenses = [50, 100, 150];

// 1. every
console.log("1. every");
console.log("1.1 Tất cả scores > 70? ", scores.every(s => s > 70)); //Kiểm tra tất cả giá trị trong scores có > 70 không
console.log("1.2 Tất cả ages > 15? ", ages.every(a => a > 15)); //Kiểm tra tất cả giá trị trong ages có > 15 không
console.log("1.3 Tất cả words có độ dài > 3? ", words.every(w => w.length > 3)); //Kiểm tra tất cả từ trong words có độ dài > 3 không

// 2. filter
console.log("\n2. filter");
console.log("2.1 scores > 80:", scores.filter(s => s > 80));
console.log("2.2 ages >= 18:", ages.filter(a => a >= 18));
console.log("2.3 words.length > 5:", words.filter(w => w.length > 5));

// 3. find
console.log("\n3. find");
console.log("3.1 First score > 80:", scores.find(s => s > 80));
console.log("3.2 First age > 20:", ages.find(a => a > 20));
console.log("3.3 First word.length > 5:", words.find(w => w.length > 5));

// 4. map
console.log("\n4. map");
console.log("4.1 scores (tăng 10% nếu <90, giảm 5% nếu >=90):",
  scores.map(s => s < 90 ? s * 1.1 : s * 0.95)
);
console.log("4.2 numbers -> chuỗi:", [1, 2, 3].map(n => n.toString()));
console.log("4.3 numbers -> nhân đôi:", [1, 2, 3].map(n => n * 2));

// 5. some
console.log("\n5. some");
console.log("5.1 Có score nào > 80 không? ", scores.some(s => s > 80));
console.log("5.2 Có age nào < 18 không? ", ages.some(a => a < 18));
console.log("5.3 Có từ nào dài > 5 không? ", words.some(w => w.length > 5));

// 6. reduce
console.log("\n6. reduce");
console.log("6.1 Tổng scores:", scores.reduce((acc, cur) => acc + cur, 0));
console.log("6.2 Tích numbers:", numbers.reduce((acc, cur) => acc * cur, 1));
console.log("6.3 Tổng expenses:", expenses.reduce((acc, cur) => acc + cur, 0));