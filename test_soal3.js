var segitiga1 = '';
for (var i = 0; i < 6; i++) {
    for (var j = 0; j <= i; j++) {
        segitiga1 += '*';
    }
    segitiga1 += '\n';
}
console.log(segitiga1);


function segitiga2(baris){
    var pola = '';

    for(var i = 1; i <= baris; i++){
        for(var j = baris - 1; j >= i; j--){
            pola += ' ';
        }
        for(var k = 1; k <= i; k++){
            pola += '*';
        }
        pola += '\n';
    }
    return pola;
}

console.log(segitiga2(5));