// Segitigasikusiku
let segitigasikusiku = num => {
  let pola = "";
  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= i; j++) {
      pola += "*";
    }
     pola += "\n";
  }

  return pola;
}

console.log(segitigasikusiku(6));

// Segitigasikusiku terbalik
let segitigasikusikubalik = num => {
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
console.log(segitigasikusiubalik(5));
