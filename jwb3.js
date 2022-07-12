// output 1:
let m = 5;
let string = "";
for (let i = 1; i <= m; i++) {
  for (let j = 0; j < i; j++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);

// output 2:
let n = 5;
let string2 = "";
for (let i = 1; i <= n; i++) {
  for (let j = 0; j < n - i; j++) {
    string2 += " ";
  }
  for (let k = 0; k < i; k++) {
    string2 += "*";
  }
  string2 += "\n";
}
console.log(string2);
