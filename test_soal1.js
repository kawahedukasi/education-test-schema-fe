// Disini var saya ubah dengan let karena ketentuan ES6 dengan best practice

let data1 = [1, 1, 1, 2, 2, 4, 1, 1];
let data2 = [2, 1, 2, 2, 2, 8, 1, 1];
let data3 = [3, 3, 3, 3, 2, 4, 1, 1];

let hitung = {};
let bandingkan = 0;
let seringMuncul = undefined;
let jumlahData = undefined;

const cariTerbanyak = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let word = arr[i];

    if (hitung[word] === undefined) {
      hitung[word] = 1;
    } else {
      hitung[word] = hitung[word] + 1;
    }

    if (hitung[word] > bandingkan) {
      bandingkan = hitung[word];
      seringMuncul = arr[i];
    }

    let length = arr.length - 2;

    jumlahData = length - seringMuncul;
  }
  console.log(
    `total data paling banyak keluar adalah ${seringMuncul} dengan jumlah ${jumlahData}`
  );
};

cariTerbanyak(data3);
cariTerbanyak(data2);
cariTerbanyak(data1);
