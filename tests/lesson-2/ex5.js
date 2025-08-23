// a. Lặp từ 1 tới 100
// b. Trong mỗi vòng lặp, in ra:
//    - Nếu chia hết cho 2: "Số <i> là số chẵn"
//    - Nếu không chia hết cho 2: "Số <i> là số lẻ"

for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(`Số ${i} là số chẵn`);
    } else {
        console.log(`Số ${i} là số lẻ`);
    }
}