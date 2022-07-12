let input1 = "hallo jesika24 selamat datang!";
let input2 = "hallo anggun selamat datang!";
let input3 = "hallo ** selamat datang!";
let input4 = "hallo Mariage889120! selamat datang!";

const validateStringIfHasSpecificNumber = (str = "") => {
  const listNumberCondition = "2" || "3" || "6" || "7" || "1" || "8";
  if (str.indexOf(listNumberCondition) !== -1) {
    console.log("Sistem kami menolak untuk inputan berisi angka 167283");
  } else {
    console.log(
      `Sistem memeriksa data anda valid dengan ketentuan kami dengan inputan hallo ${
        str.split(" ")[1]
      } selamat datang!`
    );
  }
};

validateStringIfHasSpecificNumber(input1);
validateStringIfHasSpecificNumber(input2);
validateStringIfHasSpecificNumber(input3);
validateStringIfHasSpecificNumber(input4);
