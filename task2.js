function reverseWords(kalimat) {
  if (kalimat === undefined) {
    console.log("Data harus diisi");
  } else if (typeof kalimat !== "string") {
    console.log("Data harus berupa string");
  } else {
    let arrKal = [""];
    let j = 0;
    let hasil = "";
    for (i = 0; i < kalimat.length; i++) {
      if (kalimat[i] !== " ") {
        arrKal[j] += kalimat[i];
      } else {
        j += 1;
        arrKal[j] = "";
      }
    }
    for (k = arrKal.length - 1; k >= 0; k--) {
      hasil += arrKal[k] + " ";
    }
    console.log(hasil);
  }
}
reverseWords("Saya Belajar Javascript");

// let kalimat = "Saya Belajar Javascript"
// let spasi = [0, 4, 13, 23]
// let convert = kalimat[23]
// let hasil = ""
// let k = 23
// for (i = spasi.length; i >= 0; i--) {
//   for (j = spasi[i]; j < k; j++) {
//     hasil += kalimat[j]
//   }    k = spasi[i]
// }
// console.log(hasil)
