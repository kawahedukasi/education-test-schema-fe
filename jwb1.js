function cariModus(arr) {
  let arrModus = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        arrModus.push(arr[i], arr[j]);
        console.log(
          "total data paling banyak keluar adalah",
          arrModus[0],
          "dengan jumlah ",
          arrModus.length
        );
      }
    }
  }
}
cariModus([10, 4, 5, 2, 4]); // 4
