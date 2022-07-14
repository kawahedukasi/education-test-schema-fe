// Nama : Ilhami Desvita
// Alamat Email: ilhamidesvita4@gmail.com
// Waktu Mulai : 14:10
// Waktu Selesai : 14:47 

function bintang2(baris){
    let bentuk = ' ';

    for(let c=1; c <= baris; c++){
        for(let d = baris; d >= c; d--){
            bentuk +='*';
        }

        bentuk +='\n';
    }

    return bentuk;
}

console.log(bintang2(5));