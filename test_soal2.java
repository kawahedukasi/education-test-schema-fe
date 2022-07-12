import org.apache.commons.lang3.StringUtils;
import java.util.Arrays;

public class test_soal2 {
    public static void main(String[] args) {
        String input1 = "hallo jesika24 selamat datang!";
        String input2 = "hallo anggun selamat datang!";
        String input3 = "hallo ** selamat datang!";
        String input4 = "hallo Mariage889120! selamat datang!";

        checkString(input1);
        checkString(input2);
        checkString(input3);
        checkString(input4);



    }

    private static void checkString(String dataString){
        int jumlahAngka = 0;

        // mengecek elemen kalimat angka atau bukan
        for(int i = 0; i < dataString.length(); i++){
            String buffer = Character.toString(dataString.charAt(i));
            if(StringUtils.isNumeric(buffer) == true){
                jumlahAngka++;
            }
        }

        char[] dataAngkaString = new char[jumlahAngka];

        int j = 0;

        // mengecek elemen kalimat angka atau bukan
        for(int i = 0; i < dataString.length(); i++){
            String buffer = Character.toString(dataString.charAt(i));
            if(jumlahAngka == 0){
                System.out.println("Sistem memeriksa data anda valid dengan ketentuan kami dengan inputan " + dataString);
                return;
            }
            if(StringUtils.isNumeric(buffer) == true){
                char bufferStr = dataString.charAt(i);
                Arrays.fill(dataAngkaString, j, j+1, bufferStr);
                j++;
            }
        }

        System.out.println("Sistem kami menolak untuk inputan berisi angka " +
                Arrays.toString(dataAngkaString)
                        // menghapus tanda spasi, kurung siku, dan koma
                        .replace("[", "")
                        .replace("]", "")
                        .replace(",", "")
                        .replace(" ", "")
        );
    }
}
