var n1 = 6;
var pattern1 = "";
for (var i = 1; i <= n1; i++) {
  for (var j = 0; j < i; j++) {
    pattern1 += "*";
  }
  pattern1 += "\n";
}
console.log(pattern1);

var n2 = 5;
var pattern2 = "";
for (var i = 1; i <= n2; i++) {
  for (var j = 0; j < n2 - i; j++) {
    pattern2 += " ";
  }
  for (var k = 0; k < i; k++) {
    pattern2 += "*";
  }
  pattern2 += "\n";
}
console.log(pattern2);
