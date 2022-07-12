const TriangleStar = (jmlh) => {
  let star = '';

  for (let i = 0; i < jmlh; i++) {
    for (let j = 0; j <= i; j++) {
      star += '*';
    }
    star += '\n';
  }
  console.log(star);
};

TriangleStar(6);

function reverseTriangleStar(jmlh) {
  let bintangTerbalik = '';

  for (let i = jmlh; i > 0; i--) {
    for (let j = 0; j <= jmlh; j++) {
      if (j >= i) {
        bintangTerbalik += '*';
      } else {
        bintangTerbalik += ' ';
      }
    }
    bintangTerbalik += '\n';
  }
  console.log(bintangTerbalik);
}
reverseTriangleStar(6);
