// Disini var saya ubah dengan let karena ketentuan ES6 dengan best practice

let input1 = 'hallo jesika24 selamat datang!';
let input2 = 'hallo anggun selamat datang!';
let input3 = 'hallo ** selamat datang!';
let input4 = 'hallo Mariage889120! selamat datang!';

const checkInputUser = (i) => {
  let regexp = /\d/g;
  let inString = i.match(regexp);
  if (inString) {
    let inValidasi = i.match(regexp).join('');
  }

  if (inValidasi != null) {
    console.log(`Sistem kami menolak untuk inputan berisi angka ${inValidasi}`);
  } else {
    console.log(
      'Sistem memeriksa data anda valid dengan ketentuan kami dengan inputan hallo justin selamat datang!'
    );
  }
};

checkInputUser(input1);
checkInputUser(input2);
checkInputUser(input3);
checkInputUser(input4);
