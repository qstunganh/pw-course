const name = "Nguyễn Văn A";
const email = "example@gmail.com";
const productName = "MacBook Pro";
const description = "Khóa học JavaScript cơ bản";

// 1.1 Kiểm tra "Nguyễn" trong name
console.log("\n=== 1.1 KIỂM TRA 'Nguyễn' TRONG NAME ===");
const hasNguyen = name.includes("Nguyễn");
console.log("name.includes('Nguyễn'):", hasNguyen); // true
console.log("Kết quả:", hasNguyen ? "Có chứa 'Nguyễn'" : "Không chứa 'Nguyễn'");

// 1.2 Kiểm tra "@" trong email
console.log("\n=== 1.2 KIỂM TRA '@' TRONG EMAIL ===");
const hasAtSymbol = email.includes("@");
console.log("email.includes('@'):", hasAtSymbol); // true
console.log("Kết quả:", hasAtSymbol ? "Có chứa '@'" : "Không chứa '@'");

// 1.3 Kiểm tra "Pro" trong productName
console.log("\n=== 1.3 KIỂM TRA 'Pro' TRONG PRODUCTNAME ===");
const hasPro = productName.includes("Pro");
console.log("productName.includes('Pro'):", hasPro); // true
console.log("Kết quả:", hasPro ? "Có chứa 'Pro'" : "Không chứa 'Pro'");