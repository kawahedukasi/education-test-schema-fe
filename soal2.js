var input1 = "hallo jesika24 selamat datang!";
var input2 = "hallo anggun selamat datang!";
var input3 = "hallo ** selamat datang!";
var input4 = "hallo Mariage889120! selamat datang!";

function cekInput(str) {
 return /[0-9]/.test(str);
}

console.log(cekInput(input1)? "Sistem kami menolak untuk inputan berisi angka " + input1.match(/\d/g).join(""):"Sistem memeriksa data anda valid dengan ketentuan kami dengan inputan " + input1);

console.log(cekInput(input2)? "Sistem kami menolak untuk inputan berisi angka " + input2.match(/\d/g).join(""):"Sistem memeriksa data anda valid dengan ketentuan kami dengan inputan " + input2);

console.log(cekInput(input3)? "Sistem kami menolak untuk inputan berisi angka " + input3.match(/\d/g).join(""):"Sistem memeriksa data anda valid dengan ketentuan kami dengan inputan " + input3);

console.log(cekInput(input4)? "Sistem kami menolak untuk inputan berisi angka " + input4.match(/\d/g).join(""):"Sistem memeriksa data anda valid dengan ketentuan kami dengan inputan " + input4);