// 1. Viết hàm multiply nhận 2 tham số a và b, in ra kết quả nhân của chúng
console.log("1. HÀM MULTIPLY");

function multiply(a, b) {
    const result = a * b;
    console.log(`${a} x ${b} = ${result}`);
    return result;
}

// Gọi hàm với 2 cặp giá trị khác nhau
console.log("Gọi hàm multiply với các giá trị khác nhau:");
multiply(5, 3);
multiply(7, 8);
multiply(2.5, 4);
multiply(-3, 6);

console.log("\n" + "=".repeat(50));

// 2. Viết hàm findMin nhận 3 tham số a, b, c, trả về giá trị nhỏ nhất
console.log("2. HÀM FINDMIN");

function findMin(a, b, c) {
    let min = a;
    if (b < min) {
        min = b;
    }
    if (c < min) {
        min = c;
    }
    console.log(`Giá trị nhỏ nhất trong ${a}, ${b}, ${c} là: ${min}`);
    return min;
}

// Gọi hàm và in kết quả với 2 bộ số khác nhau
console.log("Gọi hàm findMin với các bộ số khác nhau:");
const min1 = findMin(10, 5, 8);
const min2 = findMin(-2, 7, 3);
const min3 = findMin(15, 15, 15);

console.log(`Kết quả trả về từ findMin(10, 5, 8): ${min1}`);
console.log(`Kết quả trả về từ findMin(-2, 7, 3): ${min2}`);
console.log(`Kết quả trả về từ findMin(15, 15, 15): ${min3}`);

console.log("\n" + "=".repeat(50));

// 3. Viết hàm getTopStudents nhận 2 tham số: students và threshold
console.log("3. HÀM GETTOPSTUDENTS");

function getTopStudents(students, threshold) {
    console.log(`Tìm học sinh có điểm >= ${threshold}:`);
    console.log("Danh sách tất cả học sinh:", students);
    
    const topStudents = [];
    
    for (let i = 0; i < students.length; i++) {
        if (students[i].score >= threshold) {
            topStudents.push(students[i]);
            console.log(`✓ ${students[i].name}: ${students[i].score} điểm`);
        } else {
            console.log(`✗ ${students[i].name}: ${students[i].score} điểm (không đạt)`);
        }
    }
    
    console.log(`\nKết quả: Có ${topStudents.length} học sinh đạt điểm >= ${threshold}`);
    return topStudents;
}

// Tạo danh sách học sinh mẫu
const students = [
    { name: "Nguyễn Văn An", score: 85 },
    { name: "Trần Thị Bình", score: 92 },
    { name: "Lê Văn Cường", score: 78 },
    { name: "Phạm Thị Dung", score: 95 },
    { name: "Hoàng Văn Em", score: 82 },
    { name: "Đỗ Thị Phương", score: 88 },
    { name: "Vũ Văn Giang", score: 76 },
    { name: "Bùi Thị Hoa", score: 90 }
];

// Gọi hàm với danh sách thực tế và in kết quả
console.log("Gọi hàm getTopStudents:");

const topStudents1 = getTopStudents(students, 85);
console.log("\nDanh sách học sinh xuất sắc (>= 85 điểm):");
console.log(topStudents1);

console.log("\n" + "-".repeat(30));

const topStudents2 = getTopStudents(students, 90);
console.log("\nDanh sách học sinh giỏi (>= 90 điểm):");
console.log(topStudents2);

console.log("\n" + "=".repeat(50));

// 4. Viết hàm calculateInterest nhận 3 tham số: principal, rate, years
console.log("4. HÀM CALCULATEINTEREST");

function calculateInterest(principal, rate, years) {
    console.log(`Tính lãi suất với:`);
    console.log(`- Số tiền gửi ban đầu: ${principal.toLocaleString('vi-VN')} VND`);
    console.log(`- Lãi suất hàng năm: ${rate}%`);
    console.log(`- Số năm gửi: ${years} năm`);
    
    // Công thức lãi đơn: total = principal + principal * rate * years / 100
    const interest = principal * rate * years / 100;
    const total = principal + interest;
    
    console.log(`\nTính toán:`);
    console.log(`- Tiền lãi = ${principal.toLocaleString('vi-VN')} × ${rate}% × ${years} = ${interest.toLocaleString('vi-VN')} VND`);
    console.log(`- Tổng tiền = ${principal.toLocaleString('vi-VN')} + ${interest.toLocaleString('vi-VN')} = ${total.toLocaleString('vi-VN')} VND`);
    
    return total;
}

// Gọi hàm với ví dụ thực tế và in kết quả
console.log("Gọi hàm calculateInterest với các ví dụ:");

console.log("\nVí dụ 1:");
const result1 = calculateInterest(10000000, 5, 3);
console.log(`Kết quả trả về: ${result1.toLocaleString('vi-VN')} VND`);

console.log("\n" + "-".repeat(40));

console.log("\nVí dụ 2:");
const result2 = calculateInterest(50000000, 6, 5);
console.log(`Kết quả trả về: ${result2.toLocaleString('vi-VN')} VND`);

console.log("\n" + "-".repeat(40));

console.log("\nVí dụ 3:");
const result3 = calculateInterest(20000000, 4.5, 2);
console.log(`Kết quả trả về: ${result3.toLocaleString('vi-VN')} VND`);