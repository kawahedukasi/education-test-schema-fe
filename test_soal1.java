public class test_soal1 {
    public static void main(String[] args) {
        int[] data1 = {1, 1, 1, 2, 2, 4, 1, 1};
        int[] data2 = {2, 1, 2, 2, 2, 8, 1, 1};
        int[] data3 = {3, 3, 3, 3, 2, 4, 1, 1};

        modusBilangan(data1);
        modusBilangan(data2);
        modusBilangan(data3);
    }

    public static void modusBilangan(int[] data){
        int count, num=0, mostNum=0, mostCount=0;
        for(int i=0;i<8;i++) {
            count = 0;
            if(mostNum!=data[i]) {
                for(int j=0;j<8;j++){
                    num=data[i];
                    if(num==data[j]) count++;
                }
                if(count>mostCount) {
                    mostNum=num;
                    mostCount=count;
                }
            }
        }
        System.out.println("total data paling banyak keluar adalah "+mostNum+" dengan jumlah "+mostCount);
    }
}
