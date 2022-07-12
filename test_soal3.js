const starPattern = (n = 5, direction = "left") => {
  let string = "";
  for (let i = 1; i <= n; i++) {
    if (direction === "left") {
      for (let j = 0; j < i; j++) {
        string += "*";
      }
    } else {
      for (let j = 0; j < n - i; j++) {
        string += " ";
      }
      for (let k = 0; k < i; k++) {
        string += "*";
      }
    }

    string += "\n";
  }
  console.log(string);
};
console.log("Output 1: ");
starPattern(5, "left");
console.log("Output 2: ");
starPattern(5, "right");
