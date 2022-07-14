var data1 = [1, 1, 1, 2, 2, 4, 1, 1 ]
var data2 = [2, 1, 2, 2, 2, 8, 1, 1 ]
var data3 = [3, 3, 3, 3, 2, 4, 1, 1 ]
  
  function checkMostAppearNumber(data) {
    const obj = {}
    for(let i = 0; i < data.length; i++) {
        if(!(data[i] in obj)) {
            obj[data[i]] = 1
        } else {
            obj[data[i]]++
        }
    }
    const max = Math.max(...Object.values(obj))
    const value = Object.keys(obj).find(key => obj[key] === max);

    return `total data paling banyak keluar adalah ${value} dengan jumlah ${max}`
  }
  
  console.log(checkMostAppearNumber(data1))
  console.log(checkMostAppearNumber(data2))
  console.log(checkMostAppearNumber(data3))