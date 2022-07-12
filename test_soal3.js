var a = ''

for(i=0; i<=5; i++){
    for(j=0; j<=i; j++){
        a += "*"
    }

    a += '\n'

}



var b = ''

for(k=5; k>=0; k--){
   
    
    for(l=0; l<k; l++){
		b+=" ";
	}

	for(m=5;m>=k;m--){
		b+="*"}
    b+='\n'
    
}

console.log(a)
console.log(b)