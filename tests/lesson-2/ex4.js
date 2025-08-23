// a. Khai báo chiều cao (cm)
const heightCm = 170;

// b. Tính toán và in kết quả
const heightLastTwoDigits = heightCm % 100; // Lấy số lẻ

const idealWeight = (heightLastTwoDigits * 9) / 10;
const maxWeight = heightLastTwoDigits;
const minWeight = (heightLastTwoDigits * 8) / 10;

console.log(`Cân nặng lý tưởng của bạn là: ${idealWeight}kg`);
console.log(`Cân nặng tối đa là: ${maxWeight}kg`);
console.log(`Cân nặng tối thiểu là: ${minWeight}kg`);