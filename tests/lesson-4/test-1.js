// ==============================
// 1. Khởi động Tàu Vũ trụ K17
// ==============================

// Hành tinh khởi đầu
let departurePlanet = "Trái Đất";

// Nhiệm vụ
let mission = "Khám phá Vũ trụ K17";

// Phi hành đoàn
let crew = ["Anh", "Lan", "Minh", "Hà"];

// Hàm khởi động tàu
function launchShip(crew) {
    return `Chuẩn bị khởi động! Phi hành đoàn gồm: ${crew.join(", ")} sẽ đồng hành cùng bạn trong chuyến phiêu lưu "${mission}"!`;
}

// Kết nối với Trung tâm Điều khiển
console.log(launchShip(crew));


// ==============================
// 2. Du hành đến hành tinh bí ẩn
// ==============================

// Hàm tính khoảng cách
function calculateDistance(speed, time) {
    return speed * time;
}

let speed = 1000; // km/h
let time = 24;    // giờ
let distance = calculateDistance(speed, time);

console.log(`Khoảng cách đến hành tinh bí ẩn là: ${distance} km`);


// ==============================
// 3. Hành tinh kỳ lạ
// ==============================

// Hàm chuyển đổi thời gian sang hệ thập lục phân
function convertTimeToHex(time) {
    return time.toString(16).toUpperCase();
}

let hexTime = convertTimeToHex(120);
console.log(`Thời gian 120 giờ trong hệ thập lục phân là: ${hexTime}`);


// ==============================
// 4. Khám phá kho báu
// ==============================

// Hàm giải mã mật mã
function decryptCode(code) {
    let result = "";
    for (let char of code) {
        if (char === char.toLowerCase()) {
            result += char.toUpperCase();
        } else {
            result += char.toLowerCase();
        }
    }
    return result;
}

let secretCode = "K17 Challenge";
console.log(`Mật mã gốc: ${secretCode}`);
console.log(`Mật mã đã giải: ${decryptCode(secretCode)}`);


// ==============================
// 5. Trở về Trái Đất
// ==============================

// Hàm trở về Trái Đất
function returnToEarth() {
    console.log("Chuẩn bị trở về Trái Đất!");
}

// Gọi hàm để hoàn thành nhiệm vụ
returnToEarth();
