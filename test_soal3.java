public class test_soal3 {
    public static void main(String[] args) {
        System.out.println("Output 1:");
        for(int i = 0; i < 6; i++){
            for(int j = 0; j < 6; j++){
                System.out.print("*");
                if(j == i){
                    System.out.println();
                    break;
                }
            }
        }

        System.out.println();

        System.out.println("Output 2:");
        for(int i = 0; i < 5; i++){
            for(int j = 5; j > i; j--){
                System.out.print(" ");
            }
            for(int k = 0; k <= i; k++){
                System.out.print("*");
            }
            System.out.println();
        }
    }
}
