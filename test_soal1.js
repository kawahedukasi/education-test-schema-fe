var data1 = [1, 1, 1, 2, 2, 4, 1, 1]
var data2 = [2, 1, 2, 2, 2, 8, 1, 1]
var data3 = [3, 3, 3, 3, 2, 4, 1, 1]

function getMode (arr) {
    var obj = {};
    var max = 0;
    let result = []

    for (let i = 0; i < arr.length; i++) {
        obj[arr[i]] = (obj[arr[i]] + 1) || 1;
    }
    if (Object.keys(obj).length === result.length) {
        result = []
    }
    for (var key in obj) {
        if (obj[key] > max) {
            result = [key]
            max = obj[key]
        } else if (obj[key] === max) {
            result.push(key)
        }
    }
    return ("total data paling banyak keluar adalah " + result + " dengan jumlah " + max)
}

// TEST CASE
console.log(getMode(data1));
console.log(getMode(data2));
console.log(getMode(data3));


