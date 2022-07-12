// 1. Kami mempunyai data array dengan data : 

    // var data1 = [1, 1, 1, 2, 2, 4, 1, 1 ]
    // var data2 = [2, 1, 2, 2, 2, 8, 1, 1 ]
    // var data3 = [3, 3, 3, 3, 2, 4, 1, 1 ]

//     - buatlah sebuah program untuk menampilkan banyak angka yang keluar
//     output yang di inginkan : total data paling banyak keluar adalah #angka dengan jumlah #10

//     - contoh:
//         var data = [2, 2, 2, 2, 4, 2, 1]
        // output : total data paling banyak keluar adalah 2 dengan jumlah 5

// Jawaban nomor 1!
var data1 = [1, 1, 1, 2, 2, 4, 1, 1 ]
var data2 = [2, 1, 2, 2, 2, 8, 1, 1 ]
var data3 = [3, 3, 3, 3, 2, 4, 1, 1 ]

var totalData = data1.concat(data2).concat(data3);

var mf = 1;
var m = 0;
var item;
for (var i=0; i<totalData.length; i++)
{
        for (var j=i; j<totalData.length; j++)
        {
                if (totalData[i] == totalData[j])
                    m++;
                if (mf<m)
                {
                    mf=m; 
                    item = totalData[i];
                }
        }
        m=0;
}
console.log('Total data yang paling banyak keluar adalah ' + item + ' sebanyak ' + mf + ' kali');
        