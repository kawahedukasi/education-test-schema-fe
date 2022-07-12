function validation1() {
   var validasiHuruf = /^[a-zA-Z ]+$/;
   var input1 = "hallo jesika24 selamat datang!";


   if (input1.valueOf.match(validasiHuruf)) {
      hasil = "Sistem memeriksa data anda valid dengan ketentuan kami dengan inputan" + input1;

   } else {
      hasil = "Sistem kami menolak untuk inputan berisi angka 23";
      input1.focus();
      return false;
   }
}

console.log(validation1());
