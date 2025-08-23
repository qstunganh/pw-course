const phoneNumber = "0123 456 789";
const report = "Có một lỗi trong hệ thống.";
const numbersStr = "1,234,567";

// 1. Thay khoảng trắng bằng "." trong phoneNumber
console.log("\n=== 1. THAY KHOẢNG TRẮNG BẰNG '.' TRONG PHONENUMBER ===");
const phoneNumberFormatted = phoneNumber.replace(/ /g, ".");
console.log("Trước khi thay:", phoneNumber);
console.log("Sau khi thay:", phoneNumberFormatted);
console.log("Kết quả: '0123.456.789'");

// 2. Thay "lỗi" bằng "bug" trong report
console.log("\n=== 2. THAY 'LỖI' BẰNG 'BUG' TRONG REPORT ===");
const reportUpdated = report.replace("lỗi", "bug");
console.log("Trước khi thay:", report);
console.log("Sau khi thay:", reportUpdated);
console.log("Kết quả: 'Có một bug trong hệ thống.'");

// 3. Thay "," bằng "." trong numbersStr
console.log("\n=== 3. THAY ',' BẰNG '.' TRONG NUMBERSSTR ===");
const numbersFormatted = numbersStr.replace(/,/g, ".");
console.log("Trước khi thay:", numbersStr);
console.log("Sau khi thay:", numbersFormatted);
console.log("Kết quả: '1.234.567'");