const fullName = "Nguyễn Văn A";
const date = "2024-05-19";
const email = "example@gmail.com";

// 1. Trích xuất họ từ fullName (từ đầu đến ký tự thứ 6)
console.log("\n=== 1. TRÍCH XUẤT HỌ TỪ FULLNAME ===");
const lastName = fullName.substring(0, 6);
console.log("fullName.substring(0, 6):", lastName);
console.log("Kết quả: '" + lastName + "' (họ)");

// 2. Trích xuất năm từ date (4 ký tự đầu)
console.log("\n=== 2. TRÍCH XUẤT NĂM TỪ DATE ===");
const year = date.substring(0, 4);
console.log("date.substring(0, 4):", year);
console.log("Kết quả: '" + year + "' (năm)");

// 3. Trích xuất tên miền từ email (từ sau "@")
console.log("\n=== 3. TRÍCH XUẤT TÊN MIỀN TỪ EMAIL ===");
const atIndex = email.indexOf("@");
const domain = email.substring(atIndex + 1);
console.log("Vị trí '@':", atIndex);
console.log("email.substring(" + (atIndex + 1) + "):", domain);
console.log("Kết quả: '" + domain + "' (tên miền)");