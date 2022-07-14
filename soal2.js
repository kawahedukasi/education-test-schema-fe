var input1 = "hallo jesika24 selamat datang!"
var input2 = "hallo anggun selamat datang!"
var input3 = "hallo ** selamat datang!"
var input4 = "hallo Mariage889120! selamat datang!"

function cekdata(str){
    return /\d/.test(str)
}

function result(cek){
    var resultdata = cekdata(cek)
    if (resultdata){
       var number = cek.match(/(\d+)/)
        console.log ('Sistem kami menolak untuk inputan berisi angka '+number[0])
    } else {
        console.log ('Sistem memeriksa data anda valid dengan ketentuan kami dengan inputan '+cek)
    }
}

var cekk1 = result(input1)
var cekk2 = result(input2)
var cekk3 = result(input3)
var cekk4 = result(input4)