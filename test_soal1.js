var data1 = [1, 1, 1, 2, 2, 4, 1, 1 ]
var data2 = [2, 1, 2, 2, 2, 8, 1, 1 ]
var data3 = [3, 3, 3, 3, 2, 4, 1, 1 ]

var data = [].concat(data1, data2, data3);

data.sort();

var current = null;
var cnt = 0;
var datanow = [];
for (var i = 0; i < data.length; i++) {   
    if (data[i] != current) {
        if (cnt > 0) {
            datanow.push({angka:current,jumlah:cnt})
        }
            current = data[i];
            cnt = 1;
        } 
        else {
            cnt++;
        }
    }
    if (cnt > 0) {
        datanow.push({angka:current,jumlah:cnt})
    }
    let len = datanow.length;
        let a = datanow;
        for (var i = len - 1; i >= 0; i--) {
            for (var j = 1; j <= i; j++) {
                if (a[j - 1]['jumlah'] < a[j]['jumlah']) {
                    var temp = a[j - 1]
                    a[j - 1] = a[j]
                    a[j] = temp
                }
            }
        }
console.log(`total data paling banyak keluar adalah ${datanow[0].angka} dengan jumlah ${datanow[0].jumlah}`);