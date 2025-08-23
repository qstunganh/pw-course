// 1. Tính tổng từ 1 đến 100
console.log("1. TÍNH TỔNG TỪ 1 ĐẾN 100");
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log("Tổng từ 1 đến 100 là:", sum);

console.log("\n" + "=".repeat(50));

// 2. In bảng cửu chương từ 2 đến 9
console.log("2. BẢNG CỬU CHƯƠNG TỪ 2 ĐẾN 9");
for (let i = 2; i <= 9; i++) {
    console.log(`\nBảng cửu chương ${i}:`);
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
}

console.log("\n" + "=".repeat(50));

// 3. Tạo một mảng chứa các số lẻ từ 1 đến 99
console.log("3. MẢNG CÁC SỐ LẺ TỪ 1 ĐẾN 99");
const oddNumbers = [];
for (let i = 1; i <= 99; i++) {
    if (i % 2 !== 0) {  // Số lẻ
        oddNumbers.push(i);
    }
}
console.log("Mảng các số lẻ từ 1 đến 99:", oddNumbers);
console.log("Tổng số phần tử:", oddNumbers.length);

console.log("\n" + "=".repeat(50));

// 4. In ra 10 email dựa trên tên người dùng và số thứ tự
console.log("4. DANH SÁCH 10 EMAIL");
const emails = [];
for (let i = 1; i <= 10; i++) {
    const email = `user${i}@example.com`;
    emails.push(email);
    console.log(`Email thứ ${i}: ${email}`);
}
console.log("\nMảng chứa tất cả email:", emails);

console.log("\n" + "=".repeat(50));

// 5. Tính tổng doanh thu của 12 tháng trong năm
console.log("5. TÍNH TỔNG DOANH THU 12 THÁNG");

// Giả sử doanh thu của 12 tháng (đơn vị: triệu VND)
const monthlyRevenue = [120, 150, 180, 200, 175, 190, 220, 210, 195, 185, 160, 240];
const months = [
    "Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", 
    "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8",
    "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"
];

console.log("Doanh thu từng tháng:");
let totalRevenue = 0;
const revenueDetails = [];

for (let i = 0; i < 12; i++) {
    const monthData = {
        month: months[i],
        revenue: monthlyRevenue[i]
    };
    revenueDetails.push(monthData);
    totalRevenue += monthlyRevenue[i];
    
    console.log(`${months[i]}: ${monthlyRevenue[i]} triệu VND`);
}

console.log(`\nTổng doanh thu cả năm: ${totalRevenue} triệu VND`);
console.log("Trung bình doanh thu mỗi tháng:", Math.round(totalRevenue / 12), "triệu VND");

// Tạo object tổng hợp như yêu cầu
const annualReport = {
    "month": 12,
    "total": totalRevenue
};

console.log("\nBáo cáo tổng hợp:");
console.log(annualReport);

console.log("\nMảng chi tiết doanh thu từng tháng:");
console.log(revenueDetails);

console.log("\n" + "=".repeat(50));