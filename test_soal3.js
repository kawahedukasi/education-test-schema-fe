
function kiri(bintang){

    let kiri = '';
    
            for(let i = 0; i < bintang; i++){
                for(let j = 0; j <= i; j++)
                {
                    kiri += "*"; 
                }
                kiri += '\n';
            }
            return kiri;
    }
    console.log(kiri(6));
    
    function kanan(bintang){
        let kanan = '';
    
            for(let i = bintang; i > 0; i--){
                for(let j = 0; j <= bintang; j++)
                {
                    if(j >= i){
                        kanan += "*";
                    }else{
                        kanan += " ";   
                    }
                }
                kanan += '\n';
            }
            return kanan;
        }
    console.log(kanan(5)); 