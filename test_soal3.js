function segitigaBintang(banyak){

let bintang = '';
    
        for(let i = 0; i < banyak; i++){
            for(let j = 0; j <= i; j++)
            {
                bintang += "*"; 
            }
            bintang += '\n';
        }
        return bintang;
}
console.log(segitigaBintang(6));

function segitigaBintangTerbalik(banyak){
    let bintangTerbalik = '';
    
        for(let i = banyak; i > 0; i--){
            for(let j = 0; j <= banyak; j++)
            {
                if(j >= i){
                    bintangTerbalik += "*";
                }else{
                    bintangTerbalik += " ";   
                }
            }
            bintangTerbalik += '\n';
        }
        return bintangTerbalik;
    }
console.log(segitigaBintangTerbalik(6));