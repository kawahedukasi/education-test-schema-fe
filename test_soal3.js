// Segitiga
let segitiga = num => {
  let pola = "";
  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= i; j++) {
      pola += "*";
    }
     pola += "\n";
  }

  return pola;
}

console.log(segitiga(6));

// Segitiga Terbalik
let segitigabalik = num => {
  let pola = "";
  for (let i = 1; i <= num; i++) {
    for (let j = num-1; j >= i; j--) {
      pola += " ";
    }
    for(let k = 1; k <= i; k++){
      pola += "*";
    }
    pola += "\n";
  }

  return pola;
}

console.log(segitigabalik(5));