//variabel
var data1 = [1, 1, 1, 2, 2, 4, 1, 1]
var data2 = [2, 1, 2, 2, 2, 8, 1, 1]
var data3 = [3, 3, 3, 3, 2, 4, 1, 1]

//array di satukan dalam variable array
var array = [...data1, ...data2, ...data3];

//Mencari Nilai yang sering muncul menggunakan fc
 modus = (a) => {
    var b = 1, c=0,angka;
    for (var i = 0; i < a.length; i++) {
        for (var j = i; j < a.length; j++) {
            if (a[i] == a[j]) {
                c++;
                if (c > b) {
                    b = c;
                    angka = a[i];}}}
                    c = 0;}
                    return angka;}
//Output
const jumlah = array.filter(i => i === 1).length;
console.log('total data paling banyak keluar adalah ' + modus(array), 'dengan jumlah ' + jumlah);