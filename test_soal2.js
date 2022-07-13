//Input Sample
var input1 = "hallo jesika24 selamat datang!";
var input2 = "hallo anggun selamat datang!";
var input3 = "hallo ** selamat datang!";
var input4 = "hallo Mariage889120! selamat datang!";

//Fungsi mengidentifikasi inputan
function identify(input) {
  let text = input;
  let format = /[0-9]/;
  let valid = format.test(text);
  return valid;
}
//Fungsi validasi final
function finalValidation(input) {
  checkItNow = identify(input) ? "Sistem kami menolak untuk inputan berisi angka " + input.match(/\d/g).join("") : "Sistem memeriksa data anda valid dengan ketentuan kami dengan inputan " + input;
  return checkItNow;
}
//Debugging
console.log(finalValidation(input2));
