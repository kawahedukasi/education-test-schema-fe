var Data1 = [1, 1, 1, 2, 2, 4, 1, 1]
var Data2 = [2, 1, 2, 2, 2, 8, 1, 1]
var Data3 = [3, 3, 3, 3, 2, 4, 1, 1]

function Caridata(arr) {
  let a = 1;
  let b = 0;
  let item;

  for (let i = 0; i < arr.length; i++) {
  for (let j = i; j < arr.length; j++) {
  if (arr[i] == arr[j]) {
  y++;
  if (b > a) {
  a = b;
  item = arr[i];
  }
  }
  }
  b = 0;
  }
  return item;
}

function count(array, value) {
return array.filter((nilai) => (nilai === value)).length
}

console.log("total data paling banyak keluar adalah", Caridata(Data1), "dengan jumlah", count(Data1, 1))

console.log("total data paling banyak keluar adalah", Caridata(Data2), "dengan jumlah", count(Data2, 2))

console.log("total data paling banyak keluar adalah", Caridata(Data3), "dengan jumlah", count(Data3, 3)) 
