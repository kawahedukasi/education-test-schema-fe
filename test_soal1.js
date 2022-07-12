var data1 = [1, 1, 1, 2, 2, 4, 1, 1]
var data2 = [2, 1, 2, 2, 2, 8, 1, 1]
var data3 = [3, 3, 3, 3, 2, 4, 1, 1]

function cariData(arr) {
  let x = 1;
  let y = 0;
  let item;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        y++;
        if (y > x) {
          x = y;
          item = arr[i];
        }
      }
    }
    y = 0;
  }
  return item;
}

function count(array, value) {
  return array.filter((nilai) => (nilai === value)).length
}

console.log("total data paling banyak keluar adalah", cariData(data1), "dengan jumlah", count(data1, 1))

console.log("total data paling banyak keluar adalah", cariData(data2), "dengan jumlah", count(data2, 2))

console.log("total data paling banyak keluar adalah", cariData(data3), "dengan jumlah", count(data3, 3))