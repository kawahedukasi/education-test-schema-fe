var data1 = [1, 1, 1, 2, 2, 4, 1, 1 ]
var data2 = [2, 1, 2, 2, 2, 8, 1, 1 ]
var data3 = [3, 3, 3, 3, 2, 4, 1, 1 ]

// bagian data 1
angka1satu = []
angka2satu = []
angkalainbaru1 = []

for(i=0;i < data1.length; i++){
    if (data1[i] == 1 ){
        angka1satu.push(data1[i]);
    }else if(data1[i] == 2){
        angka2satu.push(data1[i]);
    }else{
        angkalainbaru1.push(data1[i]);
    }

}

if(angka1satu.length > angka2satu.length){
    console.log('total data paling banyak keluar adalah ' + 1 + " dengan jumlah " + angka1satu.length);
}else if (angka1satu.length < angkalainbaru1){
    console.log('total data paling banyak keluar adalah ' + 4 + " dengan jumlah " + angkalainbaru1.length)
}


// bagian data 2
angka1dua = []
angka2dua = []
angkalainbaru2 = []

for(i=0;i < data2.length; i++){
    if (data2[i] == 1 ){
        angka1dua.push(data2[i]);
    }else if(data2[i] == 2){
        angka2dua.push(data2[i]);
    }else{
        angkalainbaru2.push(data2[i]);
    }

}

if(angka1dua.length > angka2dua.length){
    console.log('total data paling banyak keluar adalah ' + 1 + " dengan jumlah " + angka1dua.length);
}else if (angka1dua.length < angkalainbaru2.length){
    console.log('total data paling banyak keluar adalah ' + 8 + " dengan jumlah " + angkalainbaru2.length)
}else if(angka2dua.length > angka1dua.length){
    console.log('total data paling banyak keluar adalah ' + angka2dua[0] + ' dengan jumlah ' + angka2dua.length ) 
}



// bagian data 3
angka1tiga = []
angka2tiga = []
angka3tiga = []
angkalainbaru3 = []

for(i=0;i < data3.length; i++){
    if (data3[i] == 1 ){
        angka1tiga.push(data3[i]);
    }else if(data3[i] == 2){
        angka2tiga.push(data3[i]);
    }else if(data3[i] == 3){
        angka3tiga.push(data3[i]);
    }else{
        angkalainbaru3.push(data3[i]);
    }

}

if(angka1tiga.length > angka2tiga.length & angka3tiga.length & angkalainbaru3.length){
    console.log('total data paling banyak keluar adalah ' + angka1tiga[0] + " dengan jumlah " + angka1tiga.length);
}else if (angka1tiga.length < angkalainbaru3.length){
    console.log('total data paling banyak keluar adalah ' +  angkalainbaru3[0] + " dengan jumlah " + angkalainbaru2.length)
}else if(angka2tiga.length > angka1tiga.length){
    console.log('total data paling banyak keluar adalah ' + angka2tiga[0] + ' dengan jumlah ' + angka2tiga.length ) 
}else if(angka3tiga > angka2tiga){
    console.log('total data paling banyak keluar adalah ' + angka3tiga[0] + ' dengan jumlah ' + angka3tiga.length)
}

