    var input1 = "hallo jesika24 selamat datang!"
    var input2 = "hallo anggun selamat datang!"
    var input3 = "hallo ** selamat datang!"
    var input4 = "hallo Mariage889120! selamat datang!"

//function untuk memvalidasi inputan tanpa inputan angka
function validation(nama) {
  const validasiHuruf = /^[a-zA-Z-!-* ]+$/;
  if (nama.match(validasiHuruf)) {
    console.log(
      `Sistem memeriksa data anda valid dengan ketentuan kami dengan inputan ${nama}`
    );
  } else {
    console.log("Sistem kami menolak untuk inputan berisi angka " + nama);
  }
}

console.log(input1);
validation(input1);

console.log(input2);
validation(input2);

console.log(input3);
validation(input3);

console.log(input4);
validation(input4);

