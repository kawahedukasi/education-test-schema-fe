// 3. buatlah program looping untuk menampilkan output di bawah 

//    output 1:  

//     *
//     **
//     ***
//     ****
//     *****
//     ******

//     output 2: 

//             *
//            **
//           ***
//          ****
//         *****

// Jawaban nomor 3!

// OUTPUT 1
// let n = 6;
// let string = "";
// for (let i = 1; i <= n; i++) {
//   for (let j = 0; j < i; j++) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);

// OUTPUT 2
let n = 5;
let string = "";
for (let i = 1; i <= n; i++) {

  for (let j = 0; j < n - i; j++) {
    string += " ";
  }

  for (let k = 0; k < i; k++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);