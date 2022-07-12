#include <stdio.h>
 
int main(void)
{
  for (int i = 1; i <= 5; i++) {
    for (int j = 1; j <= i; j++) {
      printf("* ");
    }
    printf("\n");
  }
  return 0;
}
#include <stdio.h>
 
int main(void)
{
  int jumlah;
 
  printf("Input tinggi segitiga: ");
  scanf("%i",&jumlah);
  printf("\n");
 
  for (int i = 1; i <= jumlah; i++) {
    for (int j = 1; j <= i; j++) {
      printf("* ");
    }
    printf("\n");
  }
  return 0;
}
function segitiga1(panjang) {
    let hasil = '';
    for (let i = 0; i < panjang; i++) {
        for (let j = 0; j <= i; j++) {
            hasil += '* ';
        }
        hasil += '\n';
    }
    return hasil;
}
console.log(segitiga1(10));