public class test_soal2 {
    public static void main(String[] args) {
        String input1 = "hallo jesika24 selamat datang!";
        String input2 = "hallo anggun selamat datang!";
        String input3 = "hallo ** selamat datang!";
        String input4 = "hallo Mariage889120! selamat datang!";
        
        userNameValid(input1);
        userNameValid(input2);
        userNameValid(input3);
        userNameValid(input4);
    }
    public static void userNameValid(String message) {
        String[] parts=message.split(" ");
        String userName = parts[1];
        String errNum="";
        for(int i=0;i<userName.length();i++){
            int check = userName.charAt(i);
            if(check>=48 && check<=57) errNum+=userName.charAt(i);
        }
        if(errNum==""){
            System.out.println("Sistem memeriksa data anda valid dengan ketentuan kami dengan inputan "+message);
        } else {
            System.out.println("Sistem kami menolak untuk inputan berisi angka "+errNum);
        }
    }
}
