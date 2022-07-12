var input1 = "hallo jesika24 selamat datang!"
var input2 = "hallo anggun selamat datang!"
var input3 = "hallo ** selamat datang!"
var input4 = "hallo Mariage889120! selamat datang!"


var regex = /\d+/g;
var matches1 = input1.match(regex);
var matches2 = input2.match(regex);
var matches3 = input3.match(regex);
var matches4 = input4.match(regex);


if(matches1 != null ){
    console.log('Sistem kami menolak untuk inputan berisi angka ' + Number(matches1));
}else{
    console.log("Sistem memeriksa data anda valid dengan ketentuan kami dengan inputan " + (input1));
}

if(matches2 != null ){
    console.log('Sistem kami menolak untuk inputan berisi angka ' + Number(matches2));
}else{
    console.log("Sistem memeriksa data anda valid dengan ketentuan kami dengan inputan " + (input2));
}

if(matches3 != null ){
    console.log('Sistem kami menolak untuk inputan berisi angka ' + Number(matches3));
}else{
    console.log("Sistem memeriksa data anda valid dengan ketentuan kami dengan inputan " + (input3));
}

if(matches4 != null ){
    console.log('Sistem kami menolak untuk inputan berisi angka ' + Number(matches4));
}else{
    console.log("Sistem memeriksa data anda valid dengan ketentuan kami dengan inputan " + (input4));
}





