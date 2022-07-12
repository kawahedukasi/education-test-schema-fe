var input1 = "hallo jesika24 selamat datang!"
var input2 = "hallo anggun selamat datang!"
var input3 = "hallo ** selamat datang!"
var input4 = "hallo Mariage889120! selamat datang!"

function cekinputan(input) {
    let regexp = /\d/g;
    var inputstr = input.match(regexp);
    if(inputstr){
        var inputvalidate = input.match(regexp).join('');
    }

    if (inputvalidate != null) {    return console.log(`Sistem kami menolak untuk inputan berisi angka ${inputvalidate}`); }
    else{
        console.log('Sistem memeriksa data anda valid dengan ketentuan kami dengan inputan hallo justin selamat datang!');
    }
}

cekinputan(input1)
cekinputan(input2)
cekinputan(input3)
cekinputan(input4)