    var data1 = [1, 1, 1, 2, 2, 4, 1, 1 ]
    var data2 = [2, 1, 2, 2, 2, 8, 1, 1 ]
    var data3 = [3, 3, 3, 3, 2, 4, 1, 1 ]

    var count = 0;

data1.forEach(element => {
  if (element == '1') {
    count += 1;
  }
});

console.log(data1);
console.log('total data paling banyak keluar adalah 1 dengan jumlah ' + count);

data2.forEach(element => {
  if (element == '1') {
    count += 1;
  }
});

console.log(data2);
console.log('total data paling banyak keluar adalah 2 dengan jumlah ' + count);

data2.forEach(element => {
  if (element == '1') {
    count += 1;
  }
});

console.log(data3);
console.log('total data paling banyak keluar adalah 3 dengan jumlah ' + count);