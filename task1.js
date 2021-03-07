function palindromeCheck(data) {
  if (data === undefined) {
    console.log("Data harus diisi");
  }
  else if (typeof data !== "string") {
    console.log("Data harus berupa string");
  } else {
    let halfLength = data.length / 2 - ((data.length / 2) % 1);//cukup gunakan length/2
    let hasil = "";
    for (i = 0; i < halfLength; i++) {
      if (data[i] !== data[data.length - i - 1]) {
        hasil = "bukan palindrome";
      } else {
        hasil = "palindrome";
      }
    }
    console.log(data + " adalah " + hasil);
  }
}
palindromeCheck(124);
