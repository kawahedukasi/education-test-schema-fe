function bintang1(baris){
    let bentuk = ' ';

    for(let a=0; a <= baris; a++){
        for(let b = 1; b <= a; b++){
            bentuk +='*';
        }

        bentuk += '\n';
    }

    return bentuk;
}

console.log(bintang1(5));