let data1 = [1, 1, 1, 2, 2, 4, 1, 1];
let data2 = [2, 1, 2, 2, 2, 8, 1, 1];
let data3 = [3, 3, 3, 3, 2, 4, 1, 1];

const getArrayOccurence = (arr) => {
  if (!Array.isArray(arr)) return;
  const countData = {};
  for (const element of arr) {
    if (countData[element]) {
      countData[element] += 1;
    } else {
      countData[element] = 1;
    }
  }
  let maxVal = Math.max(...Object.values(countData));
  const res = Object.entries(countData).filter((item) => item[1] === maxVal);
  const text = `total data paling banyak keluar adalah ${res[0][0]} dengan jumlah ${res[0][1]}`;
  return text;
};

const result1 = getArrayOccurence(data1);
const result2 = getArrayOccurence(data2);
const result3 = getArrayOccurence(data3);
console.log("Data ke-1 : " + result1);
console.log("Data ke-2 : " + result2);
console.log("Data ke-3 : " + result3);
