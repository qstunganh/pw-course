// In ra các giá trị chia hết cho 3 từ 1000 đến 2000
console.log("Các số chia hết cho 3 từ 1000 đến 2000:");

let count = 0; // Đếm số lượng
let sum = 0;   // Tính tổng

for (let i = 1000; i <= 2000; i++) {
    if (i % 3 === 0) {
        console.log(i);
        count++;
        sum += i;
    }
}