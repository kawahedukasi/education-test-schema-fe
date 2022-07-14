function segitiga(baris){
    let pola ='';

    for(let i=1; i<= baris; i++){
     for(j=1; j<=i; j++){
      pola += '*';
    }
     pola += '\n';
  }
    return pola;
}
console.log(segitiga(6));