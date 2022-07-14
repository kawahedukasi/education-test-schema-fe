var data1 = [1, 1, 1, 2, 2, 4, 1, 1 ]
var data2 = [2, 1, 2, 2, 2, 8, 1, 1 ]
var data3 = [3, 3, 3, 3, 2, 4, 1, 1 ]


var countdata1 ={}
data1.forEach(e=>{
    countdata1[e]=(countdata1[e] || 0) +1
})

var maxvaluedata1 = Object.entries(countdata1).sort((x,y)=>y[1]-x[1])[0]
console.log('total data 1 paling banyak keluar adalah '+maxvaluedata1[0]+' dengan jumlah '+maxvaluedata1[1]);


var countdata2 ={}
data2.forEach(e=>{
    countdata2[e]=(countdata2[e] || 0) +1
})

var maxvaluedata2 = Object.entries(countdata2).sort((x,y)=>y[1]-x[1])[0]
console.log('total data 2 paling banyak keluar adalah '+maxvaluedata2[0]+' dengan jumlah '+maxvaluedata2[1]);

var countdata3 ={}
data3.forEach(e=>{
    countdata3[e]=(countdata3[e] || 0) +1
})

var maxvaluedata3 = Object.entries(countdata3).sort((x,y)=>y[1]-x[1])[0]
console.log('total data 3 paling banyak keluar adalah '+maxvaluedata3[0]+' dengan jumlah '+maxvaluedata3[1]);