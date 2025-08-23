const name = "  Nguyễn Văn A  ";
const userInput = "  12345  ";
const email = "  example@gmail.com  ";

// 1. Loại bỏ khoảng trắng đầu và cuối của name
console.log("\n=== 1. LOẠI BỎ KHOẢNG TRẮNG CỦA NAME ===");
const trimmedName = name.trim();
console.log("Trước khi trim: '" + name + "'");
console.log("Sau khi trim: '" + trimmedName + "'");
console.log("Độ dài trước trim:", name.length);
console.log("Độ dài sau trim:", trimmedName.length);
console.log("Đã loại bỏ:", (name.length - trimmedName.length) + " ký tự khoảng trắng");

// 2. Loại bỏ khoảng trắng của userInput
console.log("\n=== 2. LOẠI BỎ KHOẢNG TRẮNG CỦA USERINPUT ===");
const trimmedUserInput = userInput.trim();
console.log("Trước khi trim: '" + userInput + "'");
console.log("Sau khi trim: '" + trimmedUserInput + "'");
console.log("Độ dài trước trim:", userInput.length);
console.log("Độ dài sau trim:", trimmedUserInput.length);
console.log("Đã loại bỏ:", (userInput.length - trimmedUserInput.length) + " ký tự khoảng trắng");

// 3. Loại bỏ khoảng trắng đầu của email
console.log("\n=== 3. LOẠI BỎ KHOẢNG TRẮNG CỦA EMAIL ===");
const trimmedEmail = email.trim();
console.log("Trước khi trim: '" + email + "'");
console.log("Sau khi trim: '" + trimmedEmail + "'");
console.log("Độ dài trước trim:", email.length);
console.log("Độ dài sau trim:", trimmedEmail.length);
console.log("Đã loại bỏ:", (email.length - trimmedEmail.length) + " ký tự khoảng trắng");