var a = ''
for(var i = 0; i <= 5; i++){
    for(var j = 0; j <= i; j++){
        a += "*"
    }
    a += '\n'
}

var b = ''
for(var k = 5; k >= 0; k--){
    for(var l = 0; l < k; l++){
		b += " ";
	}
    for(var m = 5 ; m >= k; m--){
        b += "*"
    }
    b += '\n'
}

console.log(a)
console.log(b) 