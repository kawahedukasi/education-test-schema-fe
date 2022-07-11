<?php
$data1 = [1, 1, 1, 2, 2, 4, 1, 1 ];
$data2 = [2, 1, 2, 2, 2, 8, 1, 1 ];
$data3 = [3, 3, 3, 3, 2, 4, 1, 1 ];
echo "data 1 = ";
modus($data1);
echo "data 2 = ";
modus($data2);
echo "data 3 = ";
modus($data3);

function modus ($var_array){
echo "[";
foreach ($var_array as $array){
    echo $array ." ";
}
echo "]</br>";

$a = array_count_values($var_array);
foreach ($a as $key => $val){
    if ($val == max($a)){
        echo "total data paling banyak keluar adalah ".$key." dengan banyak data ".$val."</br>";
    }
}
}
?>