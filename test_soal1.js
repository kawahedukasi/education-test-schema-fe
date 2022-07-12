// variabel
var data1 = [1, 1, 1, 2, 2, 4, 1, 1]
var data2 = [2, 1, 2, 2, 2, 8, 1, 1]
var data3 = [3, 3, 3, 3, 2, 4, 1, 1]


// function
function modus(arr) {
    var x = 1;
    var y = 0;
    var angka;

    for (var i = 0; i < arr.length; i++) {
        for (var j = i; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                y++;
                if (y > x) {
                    x = y;
                    angka = arr[i];
                }
            }
        }
        y = 0;
    }
    return angka;
}

function count(array, value) {
    return array.filter((nilai) => (nilai === value)).length
}


// output
console.log("total data paling banyak keluar adalah", modus(data1), "dengan jumlah", count(data1, 1));
console.log("total data paling banyak keluar adalah", modus(data2), "dengan jumlah", count(data2, 2));
console.log("total data paling banyak keluar adalah", modus(data3), "dengan jumlah", count(data3, 3));