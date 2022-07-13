//Datasets
var data1 = [1, 1, 1, 2, 2, 4, 1, 1];
var data2 = [2, 1, 2, 2, 2, 8, 1, 1];
var data3 = [3, 3, 3, 3, 2, 4, 1, 1];
var mergeData = [...data1, ...data2, ...data3];

//Fungsi Mencari Modus Data
function findMode(arr) {
  const index = {};

  arr.forEach((num) => {
    if (!index[num]) {
      index[num] = 1;
    } else {
      index[num] += 1;
    }
  });

  let highestValue = 0;
  let highestValueKey = -Infinity;

  for (let key in index) {
    const value = index[key];
    if (value > highestValue) {
      highestValue = value;
      highestValueKey = key;
    }
  }

  return Number(highestValueKey);
}

//Fungsi Menghitung Jumlah Data pada Data Modus
function totalMode() {
  let tm = 1;
  let t = 0;
  let obj;
  for (var i = 0; i < mergeData.length; i++) {
    for (var j = i; j < mergeData.length; j++) {
      if (mergeData[i] == mergeData[j]) t++;
      if (tm < t) {
        tm = t;
        obj = mergeData[i];
      }
    }
    t = 0;
    return Number(tm);
  }
}

//Debugging
console.log("total data paling banyak keluar adalah " + findMode(mergeData), "dengan jumlah " + totalMode(mergeData));
