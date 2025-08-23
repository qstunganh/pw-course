const number = 12; // a. Khai báo một hằng số number với giá trị là 12

let name = "my number"; // b. Khai báo một biến name với giá trị là "my number"

let isEven = false; // c. Khai báo một biến isEven với giá trị là sai


// d. Kiểm tra nếu number là số chẵn, gán lại isEven thành giá trị đúng
if (number % 2 === 0) {
    isEven = true;
}

// In kết quả để kiểm tra
console.log(`Hằng số number: ${number}`);
console.log(`Biến name: ${name}`);
console.log(`Biến isEven: ${isEven}`);
console.log(`${number} ${isEven ? 'là' : 'không phải là'} số chẵn`);