var data1 = [1, 1, 1, 2, 2, 4, 1, 1 ]
var data2 = [2, 1, 2, 2, 2, 8, 1, 1 ]
var data3 = [3, 3, 3, 3, 2, 4, 1, 1 ]
    
var data = data1.concat(data2).concat(data3);
    
const result = data.filter(i => i === 1).length;
console.log('data paling banyak keluar adalah 1 dengan jumlah ' + result);