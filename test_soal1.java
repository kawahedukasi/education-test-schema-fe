import org.apache.commons.lang3.ObjectUtils;

import java.util.Arrays;
import java.util.Objects;

public class test_soal1 {
    public static void main(String[] args) {
        int[] data1 = {1, 1, 1, 2, 2, 4, 1, 1};
        int[] data2 = {2, 1, 2, 2, 2, 8, 1, 1};
        int[] data3 = {3, 3, 3, 3, 2, 4, 1, 1};

        modus(data1);
        modus(data2);
        modus(data3);


    }


    static String modus(int[] dataArr){
        int[] b = new int[dataArr.length];
        int c = 0;

        // mencari modus
        for(int i = 0; i < dataArr.length; i++){
            c = 1;
            if(dataArr[i] == -1){
                b[i] = 0;
            } else {
                for(int j = i+1; j < dataArr.length; j++){
                    if(dataArr[i] == dataArr[j]){
                        c++;
                        dataArr[j] = -1;
                    }
                }
                b[i] = c;
            }
        }

        int m = b[0];
        for(int i = 1; i < dataArr.length; i++){
            if(b[i] >= m){
                m = b[i];
            }
        }


        String[] outputHasil = new String[dataArr.length];
        for(int i = 0; i < dataArr.length; i++){
            if(b[i] == m){
                outputHasil[i] = String.valueOf(dataArr[i]);
            }
        }

        // menghapus nilai null
        String[] modus = Arrays.stream(outputHasil).filter(Objects::nonNull).toArray(String[]::new);

        String modusReturn = String.join(", ", modus);
        System.out.println("total data paling banyak keluar adalah "
                + modusReturn
                + " dengan jumlah " + m);
        return modusReturn;

    }


}
