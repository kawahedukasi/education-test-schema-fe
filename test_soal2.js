var input1 = "hallo jesika24 selamat datang!"
var input2 = "hallo anggun selamat datang!"
var input3 = "hallo ** selamat datang!"
var input4 = "hallo Mariage889120! selamat datang!"


function cekUser (a) {
    re = /^([^0-9]*)$/;
    return re.test(a);
}

function validasi (str) {
    if (!cekUser(str)) {
        console.log("Sistem kami menolak untuk inputan berisi angka " + str.replace(/[^0-9]/g, ""))
    } else {
        console.log("Sistem memeriksa data anda valid dengan ketentuan kami dengan inputan " + str);
    }
}

// TEST CASE
validasi(input1)
validasi(input2)
validasi(input3)
validasi(input4)



