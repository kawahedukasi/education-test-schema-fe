<?php
$input = "hallo jesika24 selamat datang!";
$inputt = "hallo anggun selamat datang!";
$inputtt = "hallo ** selamat datang!";
$inputttt = "hallo Mariage889120! selamat datang!";
print "input = " . $input . "<br>";
validasi($input);
print "<br>";
print "<br>";

print "input = " . $inputt . "<br>";
validasi($inputt);
print "<br>";
print "<br>";

print "input = " . $inputtt . "<br>";
validasi($inputtt);
print "<br>";
print "<br>";

print "input = " . $inputttt . "<br>";
validasi($inputttt);
print "<br>";
print "<br>";

function validasi($string)
{
    if (preg_match('#[0-9]#', $string)) {
        $string = preg_replace("/[^0-9]/", "", $string);
        print "Sistem kami menolak untuk inputan berisi angka " . $string;
    } else {
        print "Sistem memeriksa data anda valid dengan ketentuan kami dengan inputan " . $string;
    }
}
