var data1 = [1,1,1,2,2,4,1,1];
var data2 = [2,1,2,2,2,8,1,1];
var data3 = [3,3,3,3,2,4,1,1];

//var count berfungsi sebagai objek untuk menyimpan isi dari array data 1, 2, dan 3
var count1 = {};
var count2 = {};
var count3 = {};

//Data 1
for (var i = 0; i < data1.length; i++){     // for berfungsi untuk mengeluarkan isi dari sebuah array
    if (count1[data1[i]] === undefined ){   // if else berfungsi untuk mengecek objek 'count' sudah ada atau belum
        count1[data1[i]] = 1;               // dan untuk memisahkan dan mengisi array data kedalam objek 'count'  
       } else {
        count1[data1[i]] = count1[data1[i]] + 1;
       } 
} 
var jumlahKemunculan1 = 0;
var angkaTerbanyak1 = 0;
for (var i in count1){  // for dan if berfungsi untuk menghitung angka terbanyak muncul dan jumlahnya
	if (count1[i] > jumlahKemunculan1){
		angkaTerbanyak1 = i;
		jumlahKemunculan1 = count1[i];
	}    
}
//Data 2
for(var j=0; j< data2.length; j++){
    if (count2[data2[j]] === undefined){
        count2[data2[j]] = 1;
    } else{
        count2[data2[j]] = count2[data2[j]] + 1;
    } 
}
var jumlahKemunculan2 = 0;
var angkaTerbanyak2 = 0;
for (var j in count2){
	if (count2[j] > jumlahKemunculan2){
		angkaTerbanyak2 = j;
		jumlahKemunculan2 = count2[j];
	}    
}
//Data 3
for(var k=0; k< data3.length; k++){
    if (count3[data3[k]] === undefined){
        count3[data3[k]] = 1;
    } else{
        count3[data3[k]] = count3[data3[k]] + 1;
    } 
}
var jumlahKemunculan3 = 0;
var angkaTerbanyak3 = 0;
for (var k in count3){
	if (count3[k] > jumlahKemunculan3){
		angkaTerbanyak3 = k;
		jumlahKemunculan3 = count3[k];
	}    
}
console.log("var data 1", count1);
console.log("total data paling banyak keluar adalah",angkaTerbanyak1,"dengan jumlah",jumlahKemunculan1,"\n" )
console.log("var data 2", count2);
console.log("total data paling banyak keluar adalah",angkaTerbanyak2,"dengan jumlah",jumlahKemunculan2,"\n" )
console.log("var data 3", count3);
console.log("total data paling banyak keluar adalah",angkaTerbanyak3,"dengan jumlah",jumlahKemunculan3,"\n" )


