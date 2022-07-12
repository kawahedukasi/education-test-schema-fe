let y = 6;
var str = ""
var str2 = ""

// OUTPUT 1

for (i = 1; i < 7; i++) {
    for (j = 1; j < 7; j++) {
        if (i >= j) {
            str = str.concat("*")
        }
    }
    str = str.concat("\n")
}

console.log(str)

// OUTPUT 2
for (let i = 1; i < 6; i++) {
    for (let j = 1; j < 6; j++) {
        if (i + j >= y) {
            str2 = str2.concat("*");
        } else {
            str2 = str2.concat(" ")
        }
    }
    str2 = str2.concat("\n")
}

console.log(str2)