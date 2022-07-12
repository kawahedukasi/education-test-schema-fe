<?php
$input1 = "hallo jesika24 selamat datang!";
$input2 = "hallo anggun selamat datang!";
$input3 = "hallo ** selamat datang!";
$input4 = "hallo Mariage889120! selamat datang!";
echo "inputan = ".$input1."<br>";
validation($input1);
echo "<br>";
echo "<br>";

echo "inputan = ".$input2."<br>";
validation($input2);
echo "<br>";
echo "<br>";

echo "inputan = ".$input3."<br>";
validation($input3);
echo "<br>";
echo "<br>";

echo "inputan = ".$input4."<br>";
validation($input4);
echo "<br>";


function validation ($string){
if (preg_match('#[0-9]#',$string)){
    $string = preg_replace("/[^0-9]/","",$string);
    echo "Sistem kami menolak untuk inputan berisi angka ".$string;
}
else{
    echo "Sistem memeriksa data anda valid dengan ketentuan kami dengan inputan ".$string;
}
}

?>