function segitiga(baris){
    let pola ='';

    for(let i=1; i<=baris; i++){
        for(let j = baris-1; j>=i; j--){
        pola += ' ';
    }
    for(let k=1; k<=i; k++){
        pola +='*';
    }
        pola +='\n';
    }
    return pola;

}
    console.log(segitiga(5));  