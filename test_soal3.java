public class test_soal3 {
    public static void main(String[] args) {
        charPyramid('*',7);
    }
    public static void charPyramid(char input, int level) {
        int layer = 0;
        System.out.println("");
        while (layer<=level) {
            for(int i=0; i<layer; i++){
                System.out.print(input);
            }
            System.out.println("");
            layer++;
        };
        layer=level;
        int layer2=1;
        System.out.println("");
        while (layer>0) {
            for(int i=layer; i>0; i--){
                System.out.print(" ");
            }
            for(int j=1;j<=layer2;j++) {
                System.out.print(input);
            }
            layer2++;
            System.out.println("");
            layer--;
        };
    }
}
