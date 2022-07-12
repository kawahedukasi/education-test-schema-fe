// output 1
function segitiga1(baris) {
    let hasil = '';
    for (let i = 0; i < baris; i++) {
        for (let j = 0; j <= i; j++) {
            hasil += '* ';
        }
        hasil += '\n';
    }
    return hasil;
}
console.log(segitiga1(6));

// output 2
function segitiga3(baris) {
    let hasil = '';
    for (let i = baris; i > 0; i--) {
        for (let j = 1; j <= baris; j++) {
            if (j >= i) {
                hasil += '* ';
            } else {
                hasil += ' '
            }
        }
        hasil += '\n';
    }
    return hasil;
}
console.log(segitiga3(6));