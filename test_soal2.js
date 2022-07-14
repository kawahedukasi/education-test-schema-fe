var input1 = "hallo jesika24 selamat datang!"
    var input2 = "hallo anggun selamat datang!"
    var input3 = "hallo ** selamat datang!"
    var input4 = "hallo Mariage889120! selamat datang!"
  function checkInput(myString) {

    const string = "167283"
    const arr = myString.match(/\d/g)
    if(!arr) {
     return `Sistem memeriksa data anda valid dengan ketentuan kami dengan inputan ${myString}`;
    }
    
    return arr.reduce(element => {
        if (string.includes(element)) {
          return `Sistem kami menolak untuk inputan berisi angka ${arr.join("")}`;
         }
         return `Sistem memeriksa data anda valid dengan ketentuan kami dengan inputan ${myString}`;
    });
}

console.log(checkInput(input1))
console.log(checkInput(input2))
console.log(checkInput(input3))
console.log(checkInput(input4))