var input1 = "hallo jesika24 selamat datang!";
var input2 = "hallo anggun selamat datang!";
var input3 = "hallo ** selamat datang!";
var input4 = "hallo Mariage889120! selamat datang!";

//function validasiInput berfungsi untuk mem-validasi semua kalimat adalah string dan bukan numbers 
function validasiInput(str){
    return /[0-9]/.test(str);
}
/* di dalam console.log di tambahkan function untuk mengecek jika kalimat berupa hanya string atau tidak
jika iya maka output akan menampilkan bahwa data valid dan jika tidak maka output akan menampilkan bahwa data tidak valid
*/
console.log(validasiInput(input1)? "Maaf, sistem kami menolak untuk inputan berisi angka " + 
input1.match(/\d/g).join(""):"Sistem memeriksa bahwa data anda valid dengan ketentuan, " + input1);

console.log(validasiInput(input2)? "Maaf, sistem kami menolak untuk inputan berisi angka " +
input2.match(/\d/g).join(""):"Sistem memeriksa bahwa data anda valid dengan ketentuan, " + input2);

console.log(validasiInput(input3)? "Maaf, sistem kami menolak untuk inputan berisi angka " + 
input3.match(/\d/g).join(""):"Sistem memeriksa bahwa data anda valid dengan ketentuan, " + input3);

console.log(validasiInput(input4)? "Maaf, sistem kami menolak untuk inputan berisi angka " + 
input4.match(/\d/g).join(""):"Sistem memeriksa bahwa data anda valid dengan ketentuan, " + input4); 