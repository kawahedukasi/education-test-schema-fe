<?php
echo "output 1 : <br>";
for($i=6; $i > 0; $i--){
    for ($j=6; $j>=$i; $j--){
           echo "*";
    }
    echo "<br>";
}
echo "<br>";

echo "output 2 : <br>";
for($a=5; $a > 0; $a--){
    for ($b=1; $b<=$a; $b++){
           echo " &nbsp";
    }
    for ($c=5; $c>=$a; $c--){
           echo "*";
    }
    echo "<br>";
}
?>