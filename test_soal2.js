var Input1 = "hallo jesika24 selamat datang!";
var Input2 = "hallo anggun selamat datang!";
var Input3 = "hallo ** selamat datang!";
var Input4 = "hallo Mariage889120! selamat datang!";

function Checkwords(string) {
  return /\d/.test(string);
}

console.log(Checkwords(Input1)? "Sistem kami menolak untuk inputan berisi angka " + Input1.match(/\d/g).join(""):"Sistem memeriksa data anda valid dengan ketentuan kami dengan inputan " + Input1);

console.log(Checkwords(Input2)? "Sistem kami menolak untuk inputan berisi angka " + Input2.match(/\d/g).join(""):"Sistem memeriksa data anda valid dengan ketentuan kami dengan inputan " + Input2);

console.log(Checkwords(Input3)? "Sistem kami menolak untuk inputan berisi angka " + Input3.match(/\d/g).join(""):"Sistem memeriksa data anda valid dengan ketentuan kami dengan inputan " + Input3);

console.log(Checkwords(Input4)? "Sistem kami menolak untuk inputan berisi angka " + Input4.match(/\d/g).join(""):"Sistem memeriksa data anda valid dengan ketentuan kami dengan inputan " + Input4);
