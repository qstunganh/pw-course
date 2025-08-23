// 1. Tạo object car với thuộc tính make="Toyota", model="Corolla", và year=2021
const car = {
    make: "Toyota",
    model: "Corolla", 
    year: 2021
};

console.log("1. Object car:");
console.log(car);
console.log("Năm sản xuất của xe:", car.year);

// 2. Tạo object person có thuộc tính name, address (là object lồng với street, city, country)
const person = {
    name: "Nguyễn Văn A",
    address: {
        street: "123 Đường ABC",
        city: "Hà Nội",
        country: "Việt Nam"
    }
};

console.log("\n2. Object person:");
console.log(person);
console.log("Tên đường của người này:", person.address.street);

// 3. Tạo object student và truy cập đến điểm môn toán (math) sử dụng ngoặc vuông
const student = {
    name: "Trần Thị B",
    grades: {
        math: 85,
        english: 92
    }
};

console.log("\n3. Object student:");
console.log(student);
console.log("Điểm toán của học sinh:", student["grades"]["math"]);
// Hoặc có thể viết: student.grades["math"] hoặc student["grades"].math

// 4. Tạo object settings để quản lý cài đặt ứng dụng
const settings = {
    volume: 75,
    brightness: 80
};

console.log("\n4. Object settings ban đầu:");
console.log(settings);

// Thay đổi volume và in ra object mới
settings.volume = 90;
console.log("Object settings sau khi thay đổi volume:");
console.log(settings);

// 5. Tạo object bike và sau đó thêm thuộc tính color vào object đó
const bike = {
    brand: "Giant",
    type: "Mountain bike"
};

console.log("\n5. Object bike ban đầu:");
console.log(bike);

// Thêm thuộc tính color
bike.color = "Đỏ";
console.log("Object bike sau khi thêm thuộc tính color:");
console.log(bike);

// 6. Tạo object employee với các thuộc tính name, age và xóa thuộc tính age
const employee = {
    name: "Lê Văn C",
    age: 28,
    position: "Developer"
};

console.log("\n6. Object employee ban đầu:");
console.log(employee);

// Xóa thuộc tính age
delete employee.age;
console.log("Object employee sau khi xóa thuộc tính age:");
console.log(employee);

// 7. Một trường học có các lớp học và học sinh
const school = {
    name: "Trường THPT ABC",
    classA: ["An", "Bình", "Châu"],
    classB: ["Đào", "Hương", "Giang"]
};

console.log("\n7. Object school:");
console.log(school);
console.log("Tên trường:", school.name);
console.log("Danh sách học sinh lớp A:", school.classA);
console.log("Danh sách học sinh lớp B:", school.classB);

// Ví dụ thêm: Truy cập học sinh đầu tiên của lớp A
console.log("Học sinh đầu tiên của lớp A:", school.classA[0]);