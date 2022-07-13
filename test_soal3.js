triangle = (n) => {
    var result = '';
    for (let i = 0; i < n; i++) {
        for (let j = 0; j <= i; j++) {
            result += "*";
        }
        result += '\n';
    }
    return result;
}
console.log(triangle(6));
console.log("\n");

trianglee = (n) => {
    var result = '';
    for (let i = n; i>0; i--) {
        for (let j = 0; j <= n; j++) {
                if(j >= i){
                    result += "*";
                }else{
                    result += " ";   
                }
            }
        result += '\n';
    }
    return result;
}
console.log(trianglee(5));
