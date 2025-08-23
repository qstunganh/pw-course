const name = "Nguyễn Văn A";
const email = "example@gmail.com";
const productName = "MacBook Pro";
const description = "Khóa học JavaScript cơ bản";

// 2.1 Tìm vị trí "a" trong name
console.log("\n=== 2.1 TÌM VỊ TRÍ 'a' TRONG NAME ===");
const indexOfA = name.indexOf("a");
console.log("name.indexOf('a'):", indexOfA); // -1 (không tìm thấy vì phân biệt hoa thường)
console.log("name.indexOf('A'):", name.indexOf("A")); // 9 (vị trí của chữ 'A')
console.log("Kết quả: 'a' thường không có, 'A' hoa ở vị trí", name.indexOf("A"));

// 2.2 Tìm vị trí "@" trong email
console.log("\n=== 2.2 TÌM VỊ TRÍ '@' TRONG EMAIL ===");
const indexOfAt = email.indexOf("@");
console.log("email.indexOf('@'):", indexOfAt); // 7
console.log("Kết quả: Ký tự '@' ở vị trí", indexOfAt);

// 2.3 Tìm vị trí "JavaScript" trong description
console.log("\n=== 2.3 TÌM VỊ TRÍ 'JavaScript' TRONG DESCRIPTION ===");
const indexOfJS = description.indexOf("JavaScript");
console.log("description.indexOf('JavaScript'):", indexOfJS); // 10
console.log("Kết quả: Từ 'JavaScript' bắt đầu ở vị trí", indexOfJS);