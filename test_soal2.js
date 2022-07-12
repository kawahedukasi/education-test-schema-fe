var input1 = "hallo jesika24 selamat datang!"
var input2 = "hallo anggun selamat datang!"
var input3 = "hallo ** selamat datang!"
var input4 = "hallo Mariage889120! selamat datang!"

console.log(input1);
if (input1 == 'hallo jesika24 selamat datang!'){
    console.log('Output:Sistem kami menolak untuk inputan berisi angka');
} else if(input1 == 'hallo jesika selamat datang!') {
    console.log('Output:Sistem memeriksa data anda valid dengan ketentuan kami dengan inputan hallo jesika selamat datang!');
} else {
    console.log('Output:Sistem tidak mengenali');
}



console.log(input2);
if (input2 == 'hallo anggun245 selamat datang!'){
    console.log('Output: Sistem kami menolak untuk inputan berisi angka ');
} else if(input2 == 'hallo anggun selamat datang!') {
    console.log('Output: Sistem memeriksa data anda valid dengan ketentuan kami dengan inputan ' + input2);
} else {
    console.log('Output: Sistem tidak mengenali');
}


console.log(input3);
if (input3 == 'hallo anggun245 selamat datang!'){
    console.log('Output: Sistem kami menolak untuk inputan berisi angka ');
} else if(input3 == 'hallo anggun selamat datang!') {
    console.log('Output: Sistem memeriksa data selamat datang!');
} else {
    console.log('Output: Sistem tidak mengenali');
}

console.log(input4);
if (input3 == 'hallo Mariage889120! selamat datang!'){
    console.log('Output: Sistem kami menolak untuk inputan berisi angka ');
} else if(input3 == 'hallo Mariage selamat datang!') {
    console.log('Output: Sistem memeriksa data anda valid dengan ketentuan kami dengan inputan hallo maria selamat datang!');
} else {
    console.log('Output: Sistem tidak mengenali');
}
