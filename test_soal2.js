
var input1 = "hallo jesika24 selamat datang!";
var input2 = "hallo anggun selamat datang!";
var input3 = "hallo ** selamat datang!";
var input4 = "hallo Mariage889120! selamat datang!";

function testNama(string) {
   return /\d/.test(string);
}

if (testNama(input1)) {
   console.log("Sistem kami menolak untuk inputan berisi angka " + input1.match(/\d/g).join(""));

} else {
   console.log("Sistem memeriksa data anda valid dengan ketentuan kami dengan inputan " + input1);
}

if (testNama(input2)) {
   console.log("Sistem kami menolak untuk inputan berisi angka " + input2.match(/\d/g).join(""));

} else {
   console.log("Sistem memeriksa data anda valid dengan ketentuan kami dengan inputan " + input2);
}

if (testNama(input3)) {
   console.log("Sistem kami menolak untuk inputan berisi angka " + input3.match(/\d/g).join(""));

} else {
   console.log("Sistem memeriksa data anda valid dengan ketentuan kami dengan inputan " + input3);
}

if (testNama(input4)) {
   console.log("Sistem kami menolak untuk inputan berisi angka " + input4.match(/\d/g).join(""));

} else {
   console.log("Sistem memeriksa data anda valid dengan ketentuan kami dengan inputan " + input4);
}
