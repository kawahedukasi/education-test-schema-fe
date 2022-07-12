
// Nama : Ilyasa Azharil Muhajir
// Alamat Email: ilyasaazm@gmail.com
// Soal Nomor 3

const bintang = "*";
const spasi = " ";
console.log("Segitiga 1")
for (var baris = 6, bbintang=0; baris > 0; baris--, bbintang++) {
    console.log(bintang.repeat(bbintang+1)+spasi.repeat(baris));
}

console.log("\nSegitiga 2")
for (var baris = 5, bbintang=1; baris > 0; baris--, bbintang++) {
    console.log(spasi.repeat(baris-1)+bintang.repeat(bbintang));
}
