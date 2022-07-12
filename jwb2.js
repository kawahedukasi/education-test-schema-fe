function validation(nama) {
  var validasiHuruf = /^[a-zA-Z ]+$/;
  if (nama === validasiHuruf) {
    console.log(
      `Sistem memeriksa data anda valid dengan ketentuan kami dengan inputan${nama}`
    );
  } else {
    console.log("Sistem kami menolak untuk inputan berisi angka" + nama);
  }
}

validation("sandi");
