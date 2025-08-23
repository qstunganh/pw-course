const name = "Nguyễn Văn A"; 
const emails = "example1@gmail.com,example2@gmail.com,example3@gmail.com"; 
const date = "2024-05-19";

// 1. Chia name thành mảng các từ (dùng khoảng trắng)
console.log("\n=== 1. CHIA NAME THÀNH MẢNG CÁC TỪ ===");
const nameArray = name.split(" ");
console.log("nameArray:", nameArray); // Kết quả: ["Nguyễn", "Văn", "A"]

// 2. Chia emails thành mảng các email (dùng dấu phẩy)
console.log("\n=== 2. CHIA EMAILS THÀNH MẢNG CÁC EMAIL ===");
const emailsArray = emails.split(",");
console.log("emailsArray:", emailsArray); // Kết quả: ["example1@gmail.com", "example2@gmail.com", "example3@gmail.com"]

// 3. Chia date thành mảng ngày, tháng, năm (dùng dấu gạch ngang)
console.log("\n=== 3. CHIA DATE THÀNH MẢNG NGÀY, THÁNG, NĂM ===");
const dateArray = date.split("-");
console.log("dateArray:", dateArray); // Kết quả: ["2024", "05", "19"]
